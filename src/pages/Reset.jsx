export default function Reset() {
const mailerLiteEmbed = `
  <form
    action="https://assets.mailerlite.com/jsonp/1658042/forms/159804880877257870/subscribe"
    method="post"
    onsubmit="window.location.href='/reset/thank-you'; return false;"
  >
    <input
      type="text"
      name="fields[name]"
      placeholder="Your name"
      required
      style="display:block;width:100%;padding:12px;margin-bottom:12px;border:1px solid #ccc;border-radius:4px;"
    />
    <input
      type="email"
      name="fields[email]"
      placeholder="Your email"
      required
      style="display:block;width:100%;padding:12px;margin-bottom:12px;border:1px solid #ccc;border-radius:4px;"
    />
    <button
      type="submit"
      style="background:#A3B18A;color:white;padding:12px 20px;border:none;border-radius:4px;cursor:pointer;width:100%;"
    >
      Get the Reset
    </button>
  </form>
`;
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-[url('https://www.svgrepo.com/show/382191/wave-top.svg')] bg-no-repeat bg-cover rotate-180 opacity-20"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <img
            src="/logo.png"
            alt="Templish Logo"
            className="mx-auto mb-6"
            style={{ maxWidth: '200px' }}
          />
          <h1 className="text-4xl font-bold mb-4">✨ Start Your Faith + Food Reset</h1>
          <p className="text-lg text-gray-600">
            A free 7-day journey to nourish your body and soul with Scripture, WFPB tips, and spiritual habits.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 bg-white relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">What You’ll Receive</h2>
          <ul className="space-y-4 text-left list-disc list-inside text-gray-700">
            <li className="transition hover:translate-x-1">✨ Daily inspiration rooted in Scripture</li>
            <li className="transition hover:translate-x-1">🌿 <span className="font-semibold text-green-700">Faith-based habits</span> for spiritual wellness</li>
            <li className="transition hover:translate-x-1">🥗 Whole-food, plant-based nutrition guidance</li>
          </ul>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-14 px-4 bg-green-50">
        <div className="max-w-md mx-auto bg-white shadow-xl rounded p-6 text-center">
          <h3 className="text-xl font-bold mb-4">Join the Reset</h3>
          <div dangerouslySetInnerHTML={{ __html: mailerLiteEmbed }} />
        </div>
      </section>

      {/* Scripture Block */}
      <section className="py-10 px-4 text-center italic text-gray-700 bg-white">
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
