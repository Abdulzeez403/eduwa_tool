"use client";

import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ApTextInput } from "@/components/input/textInput";
import { ApButton } from "@/components/button/button";
import Link from "next/link";
import { loginUser } from "@/lib/auth";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Too short").required("Password is required"),
});

export default function LoginPage() {
  const router = useRouter();

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
          Login
        </h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            try {
              console.log("Email:", values.email);
              console.log("Password:", values.password);

              await loginUser(values.email.trim(), values.password);
              router.push("/admin/dashboard");
            } catch (error: any) {
              console.error("Login error:", error);
              alert(error?.message || "Login failed");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <ApTextInput
                label="Email"
                name="email"
                placeHolder="Enter your email"
              />
              <ApTextInput
                label="Password"
                name="password"
                placeHolder="Enter your password"
                type="password"
              />

              <ApButton
                type="submit"
                className="w-full mt-6"
                disabled={isSubmitting}
                loading={isSubmitting}
                title={isSubmitting ? "Processing..." : "Sign In"}
              />
            </Form>
          )}
        </Formik>

        <div className="text-center mt-4 text-gray-700">
          <p>
            You don&apos;t have an account?{" "}
            <Link href="/auth/signup">
              <span className="text-blue-600 hover:underline cursor-pointer">
                Sign up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
