import Banner from "../components/Banner/Banner";
import Link from "next/link";

import { Check } from "lucide-react";
import Layout from "../components/Layout/Layout";

const cards = [
  {
    title: "Getting Started",
    desc: "Learn how to set up your account and begin your journey",
    items: [
      "Creating your account",
      "Setting up your profile",
      "Understanding the dashboard",
      "Your first 7 days",
    ],
  },
  {
    title: "Support Pods",
    desc: "How to join and participate in support communities",
    items: [
      "Finding the right pod",
      "Pod guidelines",
      "Sharing safely",
      "Supporting others",
    ],
  },
  {
    title: "Tools & Features",
    desc: "Make the most of TrueDrop's recovery tools",
    items: [
      "Progress tracking",
      "Journaling features",
      "Coping toolbox",
      "Savings calculator",
    ],
  },
];

export default function HelpCenter() {
  return (
    <Layout>
      <>
        <Banner
          title="Help Center"
          subtitle="Find answers to common questions and get the support you need on your sobriety journey."
          subtext=""
        />

        {/* Other Sections */}
        <section className="w-full bg-[linear-gradient(135deg,_#F9FBFA_0%,_#F7F5F3_100%)] py-20 ">
          {/* Top Heading */}
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-[20px] md:text-[30px] font-bold text-[#000000]">
                Everything you need to stay strong
              </h2>
              <p className="mt-4 text-[#000000] text-[14px] md:text-[16px]">
                Powerful tools designed specifically for your sobriety journey,
                all in one <br className="hidden md:inline" /> beautiful,
                private space.
              </p>
            </div>

            {/* 3 Cards */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-[#F7FFF5] border border-[#E3EDE1] rounded-xl p-8 shadow-sm"
                >
                  <h3 className="font-bold text-[18px] md:text-[20px] text-[#000000] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#000000] text-[14px] md:text-[16px] mb-6">{card.desc}</p>

                  <ul className="space-y-3">
                    {card.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-[#21212C] text-[14px] md:text-[16px]"
                      >
                        <Check className="w-5 h-5 text-green-600 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Gradient Section */}
        <section className="w-full bg-gradient-to-b from-[#3C886B] to-[#9AF6D3]">
          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="py-12 md:py-20 text-center">
              <p className="text-[#FFFFFF] text-[20px] md:text-[30px] font-bold mb-2">
                Need More Help?
              </p>
              <i className="text-[#FFFFFF] text-[14px] md:text-[16px] mt-3">
                Can't find what you're looking for? Our support team is here to
                help. <br className="hidden md:inline"/> Contact Support
              </i>

              <div className="flex flex-col md:flex-row gap-3 justify-center mt-2">
                 <Link
                  href="mailto:truedrop1975@gmail.com"
                  className="
               bg-gradient-to-t from-[#9AF6D3] to-[#3C886B] hover:bg-white/30 text-[#F9FBFA] text-[14px] md:text-[16px] font-semibold
               px-8 py-3 rounded-lg shadow-lg backdrop-blur-md text-center
               w-full h-[50px]              /* mobile/tablet */
               md:w-[295px] md:h-[60px]     /* desktop size */
             flex items-center justify-center"
                >
                  Contact Support
                </Link>

                <Link
                  href="/Community"
                  className="
               bg-[#F7FFF3] text-[#000000] text-[14px] md:text-[16px] font-semibold
               px-8 py-3 rounded-lg shadow-lg text-center
               w-full h-[50px]              /* mobile/tablet */
               md:w-[295px] md:h-[60px]     /* desktop size */
               flex items-center justify-center"
                >
                  Community Guidelines
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
}
