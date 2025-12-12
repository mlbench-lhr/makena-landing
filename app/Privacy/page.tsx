import Banner from "../components/Banner/Banner";
import Layout from "../components/Layout/Layout";
import Link from "next/link";

const guidelineCards = [
  {
    title: "Account Information",
    desc:
      "Email address, chosen username, and basic profile information you provide.",
    items: [],
  },
  {
    title: "Recovery Data",
    desc:
      "Sobriety start date, progress milestones, and goals you set for yourself.",
    items: [],
  },
  {
    title: "Support Pod Messages",
    desc:
      "Messages shared in support pods are encrypted and only visible to pod members.",
    items: [],
  },
   {
    title: "Journal Entries",
    desc:
      "Private journal entries are encrypted and never shared with anyone, including TrueDrop staff.",
    items: [],
  },
];

export default function PrivacyPolicy() {
return (
<Layout>
<main>
<Banner
title="Privacy Policy"
subtitle="Your privacy is fundamental to your recovery journey. Here's how we protect it."
subtext="Last updated: September 24, 2024"
/>


{/* privacy promise */}
<section className="w-full bg-[#F9FBFA] py-20">
  <div className="max-w-6xl mx-auto px-4">

    <h2 className="text-center text-[20px] md:text-[30px] text-[#000000] font-bold text-black mb-4">
      Our Privacy Promise
    </h2>

    <p className="text-center text-[#000000] max-w-2xl mx-auto mb-10 text-[14px] md:text-[18px]">
      TrueDrop is built on the foundation that your recovery journey is deeply 
      personal. We collect only what's necessary to provide you with support
      and never sell your data to third parties.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* We Do */}
      <div className="bg-[#F7FFF3] p-10 rounded-xl">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[#41E81F] text-xl">✔</span>
          <h3 className="text-[16px] md:text-[20px] font-bold text-[#000000]">We Do</h3>
        </div>

        <ul className="space-y-4 text-[#000000] text-[14px] md:text-[16px]">
          <li>Encrypt all personal data</li>
          <li>Allow you to delete your account</li>
          <li>Keep your identity private</li>
          <li>Secure your journal entries</li>
        </ul>
      </div>

      {/* We Don’t */}
      <div className="bg-[#F8FFDE] p-10 rounded-xl">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[#FA260E] text-xl">✖</span>
          <h3 className="text-[16px] md:text-[20px] font-bold text-[#000000]">We Don’t</h3>
        </div>

        <ul className="space-y-4 text-[#000000] text-[14px] md:text-[16px]">
          <li>Sell your data</li>
          <li>Share with employers</li>
          <li>Track your location</li>
          <li>Store payment details</li>
        </ul>
      </div>

    </div>
  </div>
</section>

{/* we collect info */}
<section className="w-full bg-[#F9FBFA] py-16">
  <div className="max-w-6xl mx-auto px-4">

    <h2 className="text-center text-[20px] md:text-[30px] text-[#000000] font-bold mb-6">
      Support Pod Guidelines
    </h2>

     <p className="text-center text-[16px] md:text-[20px] text-[#000000] max-w-2xl mx-auto mb-6">
          Support pods are small, intimate groups where members can share <br className="hidden md:inline" /> safely.
          Each pod has a maximum of 8 members to maintain intimacy <br className="hidden md:inline" /> and trust.
        </p>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {guidelineCards.map((card, index) => (
        <div
          key={index}
          className="bg-[#F7FFF3] border border-[#E3EDE1] rounded-xl p-8 shadow-sm"
        >
          <h3 className="font-bold text-[16px] md:text-[18px] text-[#000000] mb-2 text-center">{card.title}</h3>
          <p className="text-[#000000] text-[14px] md:text-[16px] text-center">{card.desc}</p>
        </div>
      ))}
    </div>

  </div>
</section>

{/* protect data section */}
      <section className="w-full bg-[#FFFFFF] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-[20px] md:text-[30px] font-bold text-[#000000] text-center">How We Protect Your Data</h2>
         <p className="text-center text-[14px] md:text-[16px] text-[#000000] max-w-3xl mx-auto">
          Support pods are small, intimate groups where members can share safely.
          Each pod has <br className="hidden md:inline" /> a maximum of 8 members to maintain intimacy and trust.
        </p>

        <div className="mt-8 space-y-6">
          <div className="rounded-xl bg-[#F5F9FF] p-6 shadow-sm">
            <h3 className="text-[16px] md:text-[20px] font-bold text-[#000000]">End-to-End Encryption</h3>
            <p className="text-[#000000] text-[14px] md:text-[16px] mt-2">
              Your journal entries and private messages are encrypted before leaving your device.
            </p>
          </div>

          <div className="rounded-xl bg-[#F5F9FF] p-6 shadow-sm">
            <h3 className="text-[16px] md:text-[20px] font-bold text-[#000000]">Secure Servers</h3>
            <p className="text-[#000000] text-[14px] md:text-[16px] mt-2">
              All data is stored on secure, HIPAA-compliant servers with regular security audits.
            </p>
          </div>

          <div className="rounded-xl bg-[#F5F9FF] p-6 shadow-sm">
            <h3 className="text-[16px] md:text-[20px] font-bold text-[#000000]">Limited Access</h3>
            <p className="text-[#000000] text-[14px]  md:text-[16px] mt-2">
              Only essential staff have access to user data, and only for support purposes.
            </p>
          </div>

          <div className="rounded-xl bg-[#F5F9FF] p-6 shadow-sm">
            <h3 className="text-[16px] md:text-[20px] font-bold text-[#000000]">Anonymous Analytics</h3>
            <p className="text-[#000000] text-[14px] md:text-[16px] mt-2">
              We use anonymized data to improve the app without tracking individual users.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* question privacy */}
    <section className="w-full bg-gradient-to-b from-[#3C886B] to-[#9AF6D3]">
 <div className="w-full max-w-6xl mx-auto px-4">
  <div className="flex items-center justify-center text-center">

    <p className="text-[#FFFFFF] text-[20px] md:text-[30px] font-bold py-30 ">
      Your privacy matters—here’s how TrueDrop protects your data and keeps your experience secure
    </p>
      {/* <i className="text-[#FFFFFF] mt-4 text-[16px] md:text-[18px]">
        Contact our privacy team at privacy@truedrop.app for any questions or concerns.
      </i> */}

      {/* <div className="flex justify-center mt-10">
        <Link
                  href="#"
                  className="
               bg-gradient-to-t from-[#9AF6D3] to-[#3C886B] hover:bg-white/30 text-[#F9FBFA] text-[14px] md:text-[16px] font-semibold
               px-8 py-3 rounded-lg shadow-lg backdrop-blur-md text-center
               w-full h-[50px]             
               md:w-[295px] md:h-[60px]    
             flex items-center justify-center"
                >
                  Contact Privacy Team
                </Link>
      </div> */}

    </div>
  </div>
</section>

</main>
</Layout>
);
}