
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
  <div dangerouslySetInnerHTML={{ __html: `
    <!-- Begin MailerLite Embed -->
    <div id="mlb2-28330058" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-28330058">
      <div class="ml-form-align-center ">
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
                    <input aria-label="name" type="text" class="form-control" name="fields[name]" placeholder="Name" autocomplete="given-name" />
                  </div>
                </div>
                <div class="ml-form-fieldRow ml-last-item">
                  <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <input aria-label="email" aria-required="true" type="email" class="form-control" name="fields[email]" placeholder="Email" autocomplete="email" />
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
          <div class="ml-form-successBody row-success" style="display: none">
            <div class="ml-form-successContent">
              <h4>Thank you!</h4>
              <p>You have successfully joined our subscriber list.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024" type="text/javascript"></script>
    <!-- End MailerLite Embed -->
  `}} />
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
