
export default function Reset() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">✨ Start Your Faith + Food Reset</h1>
        <p className="text-lg text-gray-600">
          Scripture, WFPB wellness tips, and simple daily habits to nourish your body and soul.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">What you'll receive:</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Daily inspiration rooted in Scripture</li>
          <li><span className="font-semibold text-green-700">Faith-based habits</span> for spiritual wellness</li>
          <li>Whole-food, plant-based nutrition guidance</li>
        </ul>
      </section>

      <section className="mb-10">
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">
            Send Me the Reset
          </button>
        </form>
      </section>

      <blockquote className="italic text-center text-gray-600 my-10">
        ✝️ “Beloved, I pray that you may prosper in all things and be in health, just as your soul prospers.”<br />
        <span className="text-sm">– 3 John 1:2</span>
      </blockquote>

      <footer className="text-center border-t pt-4 text-sm text-gray-500">
        Explore more faith-based wellness tools at <a href="/reset" className="text-gray-700 underline">templish.com/reset</a>
      </footer>
    </div>
  );
}
