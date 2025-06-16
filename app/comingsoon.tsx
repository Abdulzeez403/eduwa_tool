import Link from "next/link";

export default function ComingSoon() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 text-white p-4">
      <div className="text-center w-full max-w-md animate-fade-in">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
          🚀 Coming Soon!
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          We’re cooking something awesome for you. 🍳🔥
        </p>
        <div className="text-2xl sm:text-3xl">
          ⏳ Stay tuned...
          <br />
          📬 Sign up for updates!
        </div>

        <Link
          href="/auth/signup"
          className="inline-block mt-6 px-4 py-2 bg-white text-purple-600 font-semibold rounded-md hover:bg-gray-100 transition w-full sm:w-auto"
        >
          Notify Me
        </Link>
      </div>
    </main>
  );
}
