
export default function Reset() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <img
            src="/logo.png"
            alt="Templish Logo"
            className="mx-auto mb-6"
            style={{ maxWidth: '120px' }}
          />
          <h1 className="text-4xl font-bold mb-4">✨ Start Your Faith + Food Reset</h1>
          <p className="text-lg text-gray-600">
            A free 7-day journey to nourish your body and soul with Scripture, WFPB tips, and spiritual habits.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">What You’ll Receive</h2>
          <ul className="space-y-4 text-left list-disc list-inside text-gray-700">
            <li>✨ Daily inspiration rooted in Scripture</li>
            <li>🌿 <span className="font-semibold text-green-700">Faith-based habits</span> for spiritual wellness</li>
            <li>🥗 Whole-food, plant-based nutrition guidance</li>
          </ul>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-green-50 py-12 px-4">
        <div className="max-w-md mx-auto bg-white shadow-md rounded p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Join the Reset</h3>
          <form
            action="https://assets.mailerlite.com/jsonp/1658042/forms/159804880877257870/subscribe"
            method="post"
            target="_blank"
            className="space-y-4"
          >
            <input
              type="text"
              name="fields[name]"
              placeholder="Your name"
              className="w-full border rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="email"
              name="fields[email]"
              placeholder="Your email"
              className="w-full border rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input type="hidden" name="ml-submit" value="1" />
            <input type="hidden" name="anticsrf" value="true" />
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded font-semibold hover:bg-green-800 transition"
            >
              Send Me the Reset
            </button>
          </form>
        </div>
      </section>

      {/* Scripture Block */}
      <section className="py-10 px-4 text-center italic text-gray-700">
        <p>✝️ “Beloved, I pray that you may prosper in all things and be in health, just as your soul prospers.”</p>
        <p className="text-sm mt-2">– 3 John 1:2</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600 border-t">
        Explore more faith-based wellness tools at <a href="/reset" className="text-gray-800 underline">templish.com/reset</a>
      </footer>
    </div>
  );
}
