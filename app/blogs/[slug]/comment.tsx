"use client";
import React, { useState } from "react";

interface Comment {
  name: string;
  message: string;
  createdAt: Date;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    const newComment: Comment = {
      name,
      message,
      createdAt: new Date(),
    };

    setComments([newComment, ...comments]);
    setName("");
    setMessage("");
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Comments</h2>

      <form onSubmit={handleSubmit} className="mb-10">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Write your comment..."
            className="w-full p-3 border border-slate-300 rounded-lg h-32 focus:outline-none focus:ring focus:border-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Submit Comment
        </button>
      </form>

      <div className="space-y-6">
        {comments.length === 0 && (
          <p className="text-slate-500">
            No comments yet. Be the first to comment!
          </p>
        )}
        {comments.map((comment, idx) => (
          <div
            key={idx}
            className="p-4 bg-slate-50 rounded-lg border border-slate-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-slate-700">
                {comment.name}
              </span>
              <span className="text-xs text-slate-500">
                {comment.createdAt.toLocaleString()}
              </span>
            </div>
            <p className="text-slate-700">{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
