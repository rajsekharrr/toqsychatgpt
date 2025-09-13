export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-3xl font-semibold text-indigo-600">
        Welcome to Toqsy 🚀
      </h2>
      <p className="mt-4 text-gray-600 max-w-lg">
        Toqsy is your AI-powered companion to overcome social anxiety and
        practice real conversations with fun icebreakers, challenges, and
        streaks.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="/login"
          className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
        >
          Login
        </a>
        <a
          href="/signup"
          className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}
