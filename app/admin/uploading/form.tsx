"use client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { createTool, getTool, updateTool } from "@/lib/crud";
import { ApTextInput } from "@/components/input/textInput";
import { SelectPicker } from "@/components/input/SelectPicker";
import { storage } from "@/lib/appwrite";
import { ID } from "appwrite";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  tags: Yup.array().of(Yup.string()),
  category: Yup.array().required("Required"),
  about: Yup.string().required("Required"),
  feature: Yup.array().of(Yup.string()),
  status: Yup.string().required("Required"),
  pricing: Yup.array().of(Yup.string()),
  useCase: Yup.array().of(Yup.string()),
  website_link: Yup.string().url("Must be a valid URL").required("Required"),
  // website_logo: Yup.mixed().required("Logo is required"),
  // website_image: Yup.mixed().required("Image is required"),
});

const STATUS_OPTIONS = [
  { label: "Verified", value: "verified" },
  { label: "Unverified", value: "unverified" },
];

const CATEGORY_OPTIONS = [
  { label: "Teacher", value: "teacher" },
  { label: "Student", value: "student" },
  { label: "School", value: "school" },
  { label: "Learining", value: "learning" },
];

const TAGS_OPTIONS = [
  { label: "Code Generation", value: "code-generation" },
  { label: "Educational", value: "educational" },
];

const PRICING_OPTIONS = [
  { label: "Free", value: "free" },
  { label: "Freemium", value: "freemium" },
  { label: "Paid", value: "paid" },
  { label: "Free Trial", value: "free_trial" },
  { label: "5", value: "5" },
  { label: "10", value: "10" },
  { label: "15", value: "15" },
  { label: "20", value: "20" },
];

type ToolFormProps = {
  documentId: string;
  slug: string;
  onComplete: () => void;
};

export default function ToolForm({
  slug,
  onComplete,
  documentId,
}: ToolFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [toolData, setToolData] = useState<any | null>(null);
  console.log(slug, "the data!");

  useEffect(() => {
    if (!slug) return;

    async function fetchTool() {
      try {
        const response = await getTool(slug);

        setToolData(response.documents?.[0]);
      } catch (error) {
        console.error("Failed to fetch tool", error);
      }
    }

    fetchTool();
  }, [slug]);

  async function uploadFile(file: File) {
    if (!file) return "";
    const upload = await storage.createFile(
      process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
      ID.unique(),
      file
    );
    return `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${upload.$id}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`;
  }

  function renderDynamicFieldList(
    items: string[],
    key: "feature" | "useCase",
    placeholder: string,
    setFieldValue: (field: string, value: any) => void,
    values: any
  ) {
    return (
      <>
        {items.map((value, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <textarea
              rows={3}
              name={`${key}[${index}]`}
              value={value}
              placeholder={placeholder}
              className="flex-1 p-2 border rounded-md"
              onChange={(e) => {
                const updatedItems = [...items];
                updatedItems[index] = e.target.value;
                setFieldValue(key, updatedItems);
              }}
            />
            {items.length > 1 && (
              <button
                type="button"
                className="text-red-600"
                onClick={() => {
                  const updatedItems = items.filter((_, i) => i !== index);
                  setFieldValue(key, updatedItems);
                }}
                aria-label={`Remove ${key} item`}
              >
                &times;
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          className="text-indigo-600 mt-2"
          onClick={() => setFieldValue(key, [...items, ""])}
        >
          + Add More {key === "feature" ? "Feature" : "Use Case"}
        </button>
      </>
    );
  }

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: toolData?.name || "",
        description: toolData?.description || "",
        tags: toolData?.tags || [],
        category: toolData?.category || [],
        about: toolData?.about || "",
        feature: toolData?.feature || [""],
        status: toolData?.status || "",
        pricing: toolData?.pricing || [],
        useCase: toolData?.useCase || [""],
        website_link: toolData?.website_link || "",
        website_image: null,
        website_logo: null,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        setSubmitting(true);
        try {
          const websiteLogoUrl = values.website_logo
            ? await uploadFile(values.website_logo)
            : toolData?.website_logo || "";

          const websiteImageUrl = values.website_image
            ? await uploadFile(values.website_image)
            : toolData?.website_image || "";

          const toolPayload = {
            ...values,
            website_logo: websiteLogoUrl,
            website_image: websiteImageUrl,
          };

          console.log(documentId, "the id!");

          if (documentId) {
            await updateTool(documentId, toolPayload);
            alert("Tool updated successfully!");
            onComplete();
          } else {
            await createTool(toolPayload);
            alert("Tool created successfully!");
            resetForm();
          }
        } catch (error) {
          console.error(error);
          alert("Error submitting tool");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
          <h2 className="text-xl font-bold">Submit a Tool</h2>

          {/* Name and Description */}
          <div className="flex flex-col md:flex-row gap-4">
            <ApTextInput
              label="Name"
              name="name"
              placeHolder="Enter the AI Name"
              inputClassName="w-full"
            />
            <ApTextInput
              label="Description"
              name="description"
              placeHolder="Enter the description"
              inputClassName="w-full"
            />
          </div>

          {/* About, Website Link, Status */}
          <div className="flex flex-col md:flex-row gap-4">
            <ApTextInput
              label="About"
              name="about"
              placeHolder="Enter the About"
              inputClassName="w-full"
            />
            <ApTextInput
              label="Website Link"
              name="website_link"
              placeHolder="Enter the Website Link"
              inputClassName="w-full"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <SelectPicker
                label="Status"
                options={STATUS_OPTIONS}
                selectedValues={values.status}
                onChange={(val) => setFieldValue("status", val)}
                placeholder="Select status"
                isMulti={false}
              />
            </div>
            <div className="flex-1">
              <SelectPicker
                label="category"
                options={CATEGORY_OPTIONS}
                selectedValues={values.category}
                onChange={(vals) => setFieldValue("category", vals)}
                placeholder="Select category"
                isMulti={true}
                isCreatable={true}
              />
            </div>
          </div>
          {/* Tags, Category, Pricing */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <SelectPicker
                label="Tags"
                options={TAGS_OPTIONS}
                selectedValues={values.tags}
                onChange={(vals) => setFieldValue("tags", vals)}
                isMulti={true}
                isCreatable={true}
                placeholder="Select or add tags..."
              />
            </div>

            <div className="flex-1">
              <SelectPicker
                label="Pricing"
                options={PRICING_OPTIONS}
                selectedValues={values.pricing}
                onChange={(vals) => setFieldValue("pricing", vals)}
                placeholder="Select pricing"
                isMulti={true}
              />
            </div>
          </div>

          {/* Features */}
          <div>
            <label className="block font-medium mb-2">Features</label>
            {renderDynamicFieldList(
              values.feature,
              "feature",
              "Describe a feature",
              setFieldValue,
              values
            )}
          </div>

          {/* Use Cases */}
          <div>
            <label className="block font-medium mb-2">Use Cases</label>
            {renderDynamicFieldList(
              values.useCase,
              "useCase",
              "Describe a use case",
              setFieldValue,
              values
            )}
          </div>

          {/* Website Logo Upload */}
          <div>
            <label className="block mb-1">Website Logo</label>
            {toolData?.website_logo && (
              <img
                src={toolData.website_logo}
                alt="Website Logo"
                className="mb-2 max-h-20 object-contain"
              />
            )}
            <input
              type="file"
              name="website_logo"
              accept="image/*"
              onChange={(e) =>
                setFieldValue("website_logo", e.currentTarget.files?.[0])
              }
            />
          </div>

          {/* Website Image Upload */}
          <div>
            <label className="block mb-1">Website Image</label>
            {toolData?.website_image && (
              <img
                src={toolData.website_image}
                alt="Website Image"
                className="mb-2 max-h-20 object-contain"
              />
            )}
            <input
              type="file"
              name="website_image"
              accept="image/*"
              onChange={(e) =>
                setFieldValue("website_image", e.currentTarget.files?.[0])
              }
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
