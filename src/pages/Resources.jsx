
export default function Resources() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-gray-800">
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Faith-Based Wellness Resources</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Explore handpicked tools, downloads, and links to support your whole-person wellness journey — rooted in faith, guided by purpose.
        </p>
      </section>

      <div className="w-full border-t border-dotted border-green-300 my-6" />

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700 mb-2">🥗 Plant-Based Recipes</h2>
          <p className="text-gray-600 mb-2">Wholesome, easy-to-make meals that honour your body and fuel your faith walk.</p>
          <a href="#" className="text-green-800 font-medium underline">View Recipes</a>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700 mb-2">📖 Bible Study Tools</h2>
          <p className="text-gray-600 mb-2">Apps and downloads to deepen your time in God’s Word and stay spiritually grounded.</p>
          <a href="#" className="text-green-800 font-medium underline">Browse Tools</a>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700 mb-2">📱 Wellness Apps</h2>
          <p className="text-gray-600 mb-2">Track movement, sleep, hydration and Sabbath rhythms with intention.</p>
          <a href="#" className="text-green-800 font-medium underline">Explore Apps</a>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700 mb-2">📄 Free Downloads</h2>
          <p className="text-gray-600 mb-2">Printable habit trackers, meal planners, and devotionals to support your reset.</p>
          <a href="/reset/Faith-Food-Reset.pdf" className="text-green-800 font-medium underline">Get the Reset Guide</a>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700 mb-2">🌿 Natural Remedies</h2>
          <p className="text-gray-600 mb-2">God-given healing tools from creation — herbs, hydrotherapy, and more.</p>
          <a href="#" className="text-green-800 font-medium underline">Learn More</a>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700 mb-2">🤝 Community Support</h2>
          <p className="text-gray-600 mb-2">Connect with others pursuing health and wholeness by faith.</p>
          <a href="#" className="text-green-800 font-medium underline">Find Community</a>
        </div>
      </section>
    </main>
  );
}
