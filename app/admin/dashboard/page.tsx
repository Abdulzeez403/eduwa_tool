import React from "react";

const demoStats = {
  totalTools: 42,
  favorites: 7,
  reviews: 15,
};

const demoRecentTools = [
  {
    id: "1",
    name: "Khan Academy",
    description: "Free online courses, lessons & practice.",
  },
  {
    id: "2",
    name: "Quizlet",
    description: "Flashcards & study tools for students.",
  },
  {
    id: "3",
    name: "Duolingo",
    description: "Learn languages for free with bite-sized lessons.",
  },
];

export default function Dashboard() {
  const userName = "Sodiq";
  const userRole = "Teacher";

  return (
    <div className="p-6 space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold">Welcome back, {userName}!</h1>
        <p className="text-sm text-gray-600">Role: {userRole}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{demoStats.totalTools}</h2>
          <p>Total Tools</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{demoStats.favorites}</h2>
          <p>Favorited Tools</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{demoStats.reviews}</h2>
          <p>Your Reviews</p>
        </div>
      </div>

      {/* Recent Tools */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Recently Added Tools</h3>
        <ul className="space-y-2">
          {demoRecentTools.map((tool) => (
            <li
              key={tool.id}
              className="border p-4 rounded hover:shadow-md transition cursor-pointer"
            >
              <h4 className="font-semibold">{tool.name}</h4>
              <p className="text-sm text-gray-700">{tool.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 flex gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Add New Tool
        </button>
        <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition">
          View Favorites
        </button>
      </div>
    </div>
  );
}
