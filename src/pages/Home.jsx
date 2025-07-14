
export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to Templish</h1>
      <p className="text-lg text-gray-700">This is the home page.</p>
      <a href="/reset" className="inline-block mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition">
        Go to Faith + Food Reset
      </a>
    </div>
  );
}
