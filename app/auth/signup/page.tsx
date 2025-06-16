"use client";

import { useRouter } from "next/navigation";
import { ApTextInput } from "@/components/input/textInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Link from "next/link";
import { registerUser } from "@/lib/auth";
import { ApButton } from "@/components/button/button";
import { ApSelectInput } from "@/components/input/selectorInput";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(20, "Too long!")
    .required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password too short")
    .required("Password is required"),
});

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignup = async (values: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) => {
    setLoading(true);
    try {
      const user = await registerUser(
        values.email,
        values.password,
        values.name,
        values.role
      );

      alert("Signup successful!");
      router.push("/auth/signin");
    } catch (error: any) {
      alert(error?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        // background:
        //   "radial-gradient(circle at top left, #667eea 0%, #764ba2 70%)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
      </div>
      <div className="relative bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md w-full z-10">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Create an Account
        </h1>

        <Formik
          initialValues={{ name: "", email: "", password: "", role: "student" }}
          validationSchema={SignupSchema}
          onSubmit={handleSignup}
        >
          {({
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            values,
          }) => (
            <Form className="flex flex-col gap-6">
              <ApTextInput
                label="name"
                name="name"
                placeHolder="Enter your username"
              />

              <ApTextInput
                label="Email"
                name="email"
                placeHolder="Enter your email"
              />

              <ApSelectInput
                label="Role"
                name="role"
                options={[
                  { label: "Student", value: "student" },
                  { label: "Teacher", value: "teacher" },
                  { label: "School", value: "school" },
                ]}
              />

              <ApTextInput
                label="Password"
                name="password"
                type="password"
                placeHolder="Enter your password"
              />

              <ApButton
                type="submit"
                className="w-full mt-6"
                disabled={isSubmitting}
                loading={isSubmitting}
                title={isSubmitting ? "Processing..." : "Sign In"}
              />

              <div className="text-center mt-4 text-gray-700">
                <p>
                  Do you have an account?{" "}
                  <Link href="/auth/signin">
                    <span className="text-blue-600 hover:underline cursor-pointer">
                      Sign In
                    </span>
                  </Link>
                </p>

                <p className="mt-2">
                  <Link
                    href="/"
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    Go back
                  </Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
