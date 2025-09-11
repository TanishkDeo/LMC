export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-900">
      <div className="max-w-2xl text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Hi, I’m Alex 👋</h1>
        <p className="text-lg mb-6">
          Welcome to my personal website! I’m a developer passionate about building
          modern web apps and sharing knowledge.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/about" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            About Me
          </a>
          <a href="mailto:youremail@example.com" className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
            Contact
          </a>
        </div>
      </div>
    </main>
  );
}
