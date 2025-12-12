"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[linear-gradient(135deg,_#F9FBFA_0%,_#F7F5F3_100%)] pt-20 pb-10">
      {/* Top CTA Section */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-[20px] md:text-[30px] font-bold text-[#21212C]">
          Start Today. <span className="bg-gradient-to-b from-[#3C886B] to-[#9AF6D3] bg-clip-text text-transparent">You Deserve Support.</span>
        </h2>

       {/* <button
  className="mt-6 px-8 py-3 rounded-xl text-[#FFFFFF] text-[14px] md:text-[16px] font-semibold bg-gradient-to-b from-[#3C886B] to-[#9AF6D3] hover:opacity-90 transition inline-block"
>
  Get Started Free
</button> */}
      </div>

    <div className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-4 gap-10">

  {/* Column 1 spans 2 columns */}
  <div className="md:col-span-2">
    <h3 className="text-[20px] md:text-[24px] font-bold text-[#21212C]">TrueDrop</h3>
    <p className="text-[#67677E] mt-4 text-[14px] md:text-[16px] leading-relaxed">
      Sobriety made simple with personalized support <br className="hidden md:inline"/>
      and genuine community.
    </p>

    <div className="flex items-center gap-4 mt-6">

  {/* Google Play Store */}
  <a
    href="https://play.google.com/store/apps" 
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/assets/images/home/playstore.png"
      alt="Google Play"
      className="w-30 lg:w-[210px] cursor-pointer"
    />
  </a>

  {/* Apple App Store */}
  <a
    href="https://apps.apple.com" 
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/assets/images/home/applestore.png"
      alt="App Store"
      className="w-30 lg:w-[210px] cursor-pointer"
    />
  </a>

</div>

  </div>

 
  


  {/* Column 3: Support */}
  <div className="flex md:justify-end">
  <div>
    <h3 className="text-[16px] md:text-[18px] font-bold text-[#21212C]">Support</h3>
    <ul className="mt-4 space-y-3 text-[#67677E] text-[14px] md:text-[16px]">
      <li><a href="/HelpCenter" className="hover:underline">Help Center</a></li>
      <li><a href="/Community" className="hover:underline">Community Guidelines</a></li>
      <li><a href="/Privacy" className="hover:underline">Privacy Policy</a></li>
      <li><a href="/ServiceTerms" className="hover:underline">Terms of Service</a></li>

    </ul>
  </div>
  </div>

  {/* Column 4: Contact */}
  <div className="flex md:justify-end">
 <div>
  <h3 className="text-[16px] md:text-[18px] font-bold text-[#21212C]">Contact</h3>

  <ul className="mt-4 space-y-3 text-[#67677E] text-[14px] md:text-[16px]">
    <li className="flex items-center gap-2">
      <img
        src="/assets/images/icon/email-icon.svg"
        alt="mail icon"
        className="w-5 h-5"
      />
      <a href="mailto:support@truedrop.app" className="hover:underline">
        support@truedrop.app
      </a>
    </li>

    <li className="flex items-center gap-2">
      <img
        src="/assets/images/icon/secure-icon.svg"
        alt="lock icon"
        className="w-5 h-5"
      />
      Secure & Private
    </li>
  </ul>
</div>
</div>


</div>

      {/* Bottom Line */}
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-[14px] text-[#67677E]">
        <p>© 2024 TrueDrop. All rights reserved.</p>

       <p className="flex items-center gap-1 mt-4 md:mt-0">
  Made with
  <img
    src="/assets/images/icon/heart-icon.svg"
    alt="icon"
    className="w-4 h-4 object-contain"
  />
  for your journey
</p>
      </div>
    </footer>
  );
}
