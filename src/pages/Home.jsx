
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white">
      <section className="text-center py-20 px-6">
        <img
          src="/logo.png"
          alt="Templish Logo"
          className="mx-auto mb-6 h-20 sm:h-28"
        />
        <h1 className="text-5xl sm:text-6xl font-bold text-green-800 mb-4 leading-tight">
          Faith-Fueled Wellness for Body & Soul
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Discover the tools, truths, and habits to help you thrive — physically, mentally, and spiritually.
        </p>
        <a
          href="/reset"
          className="inline-block bg-green-700 hover:bg-green-800 text-white text-lg font-semibold px-8 py-4 rounded-lg transition shadow-md"
        >
          Start the Free 7-Day Reset
        </a>
      </section>
    </main>
  );
}
