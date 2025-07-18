
export default function Blog() {
  return (
    <main className="min-h-screen px-6 py-16 bg-white text-gray-900 max-w-6xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Templish Blog</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Devotionals, reflections, and practical faith + wellness tips to encourage your journey.
        </p>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-emerald-50 shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Reset with Scripture</h2>
          <p className="text-gray-600 mb-2">How daily Bible verses can renew your mindset and habits.</p>
          <a href="#" className="text-green-800 font-medium underline">Read More</a>
        </div>

        <div className="bg-emerald-50 shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700 mb-2">WFPB Meal Planning 101</h2>
          <p className="text-gray-600 mb-2">Get started with simple, soul-nourishing plant-based meals.</p>
          <a href="#" className="text-green-800 font-medium underline">Read More</a>
        </div>

        <div className="bg-emerald-50 shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Sabbath as a Wellness Habit</h2>
          <p className="text-gray-600 mb-2">Embrace rest with purpose and restore body + soul.</p>
          <a href="#" className="text-green-800 font-medium underline">Read More</a>
        </div>
      </section>
    </main>
  );
}
