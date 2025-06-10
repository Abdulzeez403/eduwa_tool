"use client";

import React, { useEffect, useState } from "react";
import ToolForm from "./form";
import Modal from "@/components/Modal";
import { listTools, deleteTool, insertData } from "@/lib/crud";

export default function UploadingPage() {
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [docId, setDocid] = useState<string | null>(null);
  const [tools, setTools] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTools = async () => {
    setLoading(true);
    try {
      const response = await listTools();
      setTools(response?.documents || []);
    } catch (error) {
      console.error("Failed to fetch tools", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTools();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this tool?")) return;
    try {
      await deleteTool(id);
      fetchTools();
      alert("Tool deleted");
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const handleEdit = (slug: string, doc: string) => {
    setEditId(slug);
    setDocid(doc);
    setShowModal(true);
  };

  const handleNew = () => {
    setEditId(null);
    setShowModal(true);
  };

  return (
    <div className="p-8  mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          AI Tools Dashboard
        </h2>

        <div className="items-center gap-2">
          <button
            onClick={insertData}
            className="mt-4 sm:mt-0 inline-flex items-center px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            import
          </button>
          <button
            onClick={handleNew}
            className="mt-4 sm:mt-0 inline-flex items-center px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New Tool
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center text-gray-500 py-10">Loading tools...</div>
      )}

      {/* Empty State */}
      {!loading && tools.length === 0 && (
        <div className="text-center text-gray-400 py-10">
          No tools found. Click “Add New Tool” to get started.
        </div>
      )}

      {/* Tools Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <div
            key={tool.$id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                {tool.name}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {tool.description}
              </p>
              {tool.website && (
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline text-sm"
                >
                  Visit Website &rarr;
                </a>
              )}
            </div>

            <div className="mt-4 flex space-x-3">
              <button
                onClick={() => handleEdit(tool.slug, tool.$id)}
                className="flex items-center px-3 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-md text-black transition"
                aria-label={`Edit ${tool.name}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 5.232l3.536 3.536M9 11l6 6m2-10l-8 8H7v-2l8-8z"
                  />
                </svg>
                Edit
              </button>
              <button
                onClick={() => handleDelete(tool.$id)}
                className="flex items-center px-3 py-1 bg-red-500 hover:bg-red-600 rounded-md text-white transition"
                aria-label={`Delete ${tool.name}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4"
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Create/Edit */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={editId ? "Edit Tool" : "Add New Tool"}
        description="Manage your AI tools easily"
        width="max-w-xl"
      >
        <ToolForm
          slug={editId as any}
          documentId={docId as any}
          onComplete={() => {
            setShowModal(false);
            fetchTools();
          }}
        />
      </Modal>
    </div>
  );
}
