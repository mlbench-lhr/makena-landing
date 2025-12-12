import Banner from "../components/Banner/Banner";
import Layout from "../components/Layout/Layout";



export default function ServiceTerm() {
return (
    <Layout>
<main>
<Banner
title="Terms of Service"
subtitle="Clear, fair terms that protect both you and the TrueDrop community."
subtext="Last updated: September 24, 2024"
/>


{/* Agreement*/}
<section className="w-full bg-[#FFFFFF] py-20">
  <div className="max-w-6xl mx-auto px-4">

    <h2 className="text-center text-[20px] md:text-[30px] font-bold text-[#000000] mb-10">
      Agreement to Terms
    </h2>

    <p className="text-center text-[#000000] max-w-3xl mx-auto mb-10 text-[14px] md:text-[16px]">
      By using TrueDrop, you agree to these Terms of Service and our Privacy Policy.
      These terms are designed to create a safe, supportive environment for everyone in recovery.
    </p>

    <div className="bg-[#F5F9FF] p-10 rounded-xl max-w-6xl mx-auto">
      <h3 className="text-[16px] md:text-[20px] text-[#000000] font-bold mb-8">Key Points</h3>

      <ul className="space-y-2 text-[#21212C] text-[14px] md:text-[16px]">
        <li className="flex items-start gap-3">
          <span className="text-[#2EB88A] text-xl">✔</span>
          <span>You must be at least 13 years old to use TrueDrop</span>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-[#2EB88A] text-xl">✔</span>
          <span>One account per person</span>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-[#2EB88A] text-xl">✔</span>
          <span>You're responsible for keeping your account secure</span>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-[#2EB88A] text-xl">✔</span>
          <span>We may update these terms with notice</span>
        </li>
      </ul>
    </div>

  </div>
</section>

{/* Communnity standard */}
<section className="w-full bg-[#F9FBFA] py-30">
  <div className="max-w-6xl mx-auto px-4">

    <h2 className="text-center text-[20px] md:text-[30px] text-[#000000] font-bold text-black mb-6">
      Community Standards
    </h2>

   <p className="text-center text-[14px] md:text-[16px] text-[#000000] max-w-2xl mx-auto mb-12">
          Support pods are small, intimate groups where members can share safely.
          Each pod has a maximum of 8 members to maintain intimacy and trust.
        </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      {/* Acceptable Use */}
      <div className="flex">
        <div className="flex-none">
          <div className="w-1 bg-[#3EB489] h-full"></div>
        </div>

        <div className="pl-4">
          <h3 className="text-[16px] md:text-[20px] text-[#101828] font-semibold mb-4">Acceptable Use</h3>

          <p className="text-[#475467] text-[14px] md:text-[16px] mb-6">
            TrueDrop is a platform for recovery support. You agree to
          </p>

          <ul className="space-y-4 text-[#21212C] text-[14px] md:text-[16px]">
            <li className="flex items-start gap-3">
              <span className="text-[#2EB88A] text-xl">✔</span>
              Use the platform to support your recovery and help others
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2EB88A] text-xl">✔</span>
              Follow our Community Guidelines
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2EB88A] text-xl">✔</span>
              Respect other users' privacy and experiences
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2EB88A] text-xl">✔</span>
              Provide accurate information about yourself
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2EB88A] text-xl">✔</span>
              Report violations of these terms
            </li>
          </ul>
        </div>
      </div>

      {/* Prohibited Activities */}
      <div className="flex">
        <div className="flex-none">
          <div className="w-1 bg-[#3EB489] h-full"></div>
        </div>

        <div className="pl-4">
          <h3 className="text-[16px] md:text-[20px] text-[#101828] font-semibold mb-4">Prohibited Activities</h3>

          <p className="text-[#475467] text-[14px] md:text-[16px] mb-6">
            You may not
          </p>

          <ul className="space-y-4 text-[#21212C] text-[14px] md:text-[16px]">
            <li className="flex items-start gap-3">
              <span className="text-[#2EB88A] text-xl">✔</span>
              Share content promoting substance use
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2EB88A] text-xl">✔</span>
              Harass, threaten, or harm other users
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2EB88A] text-xl">✔</span>
              Share others' personal information
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2EB88A] text-xl">✔</span>
              Use the platform for commercial purposes
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2EB88A] text-xl">✔</span>
              Create multiple accounts
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2EB88A] text-xl">✔</span>
              Attempt to hack or disrupt the service
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>

{/* disclaimer section */}
<section className="w-full bg-[#FFF6F6] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-[20px] md:text-[30px] font-bold mb-10 text-[#000000]">
          Important Disclaimers
        </h2>

        <div className="space-y-8">

          {/* Not Medical Advice */}
          <div className="rounded-xl bg-[#F8FFDE] hover:border hover:border-[#A7DAD8] p-4 shadow-sm">
            <h3 className="text-[16px] md:text-[18px] font-bold text-[#F7B7A3] mb-2">
              Not Medical Advice
            </h3>
            <p className="text-[#F7B7A3] text-[14px] md:text-[16px] leading-relaxed">
              TrueDrop provides peer support, not medical or professional treatment.
              Always consult healthcare professionals for medical advice about addiction and recovery.
            </p>
          </div>

          {/* Crisis Situations */}
          <div className="rounded-xl bg-[#F5F9FF] p-4 shadow-sm">
            <h3 className="text-[16px] md:text-[18px] font-bold text-[#2080DF] mb-2">
              Crisis Situations
            </h3>
            <p className="text-[#2080DF] text-[14px] md:text-[16px] leading-relaxed">
              If you're experiencing a mental health crisis or thinking about self-harm,
              contact emergency services immediately. TrueDrop is not a crisis intervention service.
            </p>
          </div>

          {/* Platform Availability */}
          <div className="rounded-xl bg-[#FFFFFF] p-4 shadow-sm">
            <h3 className="text-[16px] md:text-[18px] font-bold text-[#000000] mb-2">
              Platform Availability
            </h3>
            <p className="text-[#000000] text-[14px] md:text-[16px] leading-relaxed">
              We strive to keep TrueDrop available 24/7, but we may need to take the service offline for
              maintenance or updates. Notice will be provided when possible.
            </p>
          </div>

        </div>
      </div>
    </section>

    {/* subscrition section */}
    <section className="w-full bg-[#F9FBFA] py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-[20px] md:text-[30px] text-[#000000] font-bold text-center">Subscription & Billing</h1>

       <p className="text-center text-[#000000] max-w-3xl mx-auto mb-10 text-[14px] md:text-[16px]">
      By using TrueDrop, you agree to these Terms of Service and our Privacy Policy.
      These terms are designed to create a safe, supportive environment for everyone in recovery.
    </p>

        <div className="bg-white shadow rounded-xl p-6 space-y-8">
          <div>
            <h2 className="text-[16px] md:text-[18px] text-[#000000] font-bold">Free Trial</h2>
            <p className="text-[#000000] text-[14px] md:text-[16px] mt-2">
              New users receive a 3-day free trial. You can cancel anytime during the trial without being charged.
            </p>
          </div>

          <div>
            <h2 className="text-[16px] md:text-[18px] text-[#000000] font-bold">Subscription Plans</h2>
            <p className="text-[#000000] text-[14px] md:text-[16px] mt-2">
              After your trial, you can choose from our subscription plans:
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="shadow-md rounded-xl p-6 text-center bg-blue-50">
                <h3 className="text-[16px] md:text-[18px] text-[#000000] font-bold">Monthly</h3>
                <p className="text-[#000000] text-[14px] md:text-[16px] mt-2">Billed monthly, cancel anytime</p>
              </div>

              <div className="shadow-md rounded-xl p-6 text-center bg-blue-50">
                <h3 className="text-[16px] md:text-[18px] text-[#000000] font-bold">Annual</h3>
                <p className="text-[#000000] text-[14px] md:text-[16px] mt-2">Billed yearly with discount</p>
              </div>
            </div>
          </div>

          <div className="border border-[#3C886B] rounded-xl p-4">
            <h2 className="text-[16px] md:text-[18px] text-[#000000] font-bold">Cancellation</h2>
            <p className="text-[#000000] text-[14px] md:text-[16px] mt-2">
              After your trial, you can cancel your subscription at any time. You'll continue to have
              access until the end of your current billing period.
            </p>
          </div>
        </div>
      </div>
    </section>
</main>
</Layout>
);
}