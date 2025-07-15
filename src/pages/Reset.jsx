import { useEffect } from 'react';

export default function Reset() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.mailerlite.com/js/universal.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
<section className="bg-green-50 py-14 px-4">
  <div
    className="max-w-md mx-auto bg-white shadow-xl rounded p-6 text-center"
    dangerouslySetInnerHTML={{
      __html: `
        <!-- BEGIN MailerLite Embed -->
        <div id="mlb2-28330058" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-28330058">
          <div class="ml-form-align-center">
            <div class="ml-form-embedWrapper embedForm">
              <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
                <div class="ml-form-embedContent">
                  <h4>✨ Start Your Faith + Food Reset</h4>
                  <p>Enter your email below to get instant access to the 7-day reset — filled with Scripture, WFPB wellness tips, and simple daily habits.</p>
                </div>
                <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/1658042/forms/159804880877257870/subscribe" method="post" target="_blank">
                  <div class="ml-form-formContent">
                    <div class="ml-form-fieldRow">
                      <div class="ml-field-group ml-field-name">
                        <input type="text" class="form-control" name="fields[name]" placeholder="Name" autocomplete="given-name" />
                      </div>
                    </div>
                    <div class="ml-form-fieldRow ml-last-item">
                      <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                        <input type="email" class="form-control" name="fields[email]" placeholder="Email" autocomplete="email" required />
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="ml-submit" value="1" />
                  <div class="ml-form-embedSubmit">
                    <button type="submit" class="primary">Send Me the Reset</button>
                  </div>
                  <input type="hidden" name="anticsrf" value="true" />
                </form>
              </div>
              <div class="ml-form-successBody row-success" style="display: none;">
                <div class="ml-form-successContent">
                  <h4>Welcome to the Reset!</h4>
                  <p>📩 Your welcome email is on its way — be sure to check your inbox (and your spam or promotions folder).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script>
          function ml_webform_success_28330058() {
            var $ = ml_jQuery || jQuery;
            $('.ml-subscribe-form-28330058 .row-success').show();
            $('.ml-subscribe-form-28330058 .row-form').hide();
          }
        </script>
        <script src="https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024" type="text/javascript"></script>
        <!-- END MailerLite Embed -->
      `,
    }}
  />
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
