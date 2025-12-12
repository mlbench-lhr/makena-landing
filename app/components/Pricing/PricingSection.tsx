// ===================== components/PricingSection.jsx =====================
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      per: "/month",
      subtitle: "Perfect for getting started",
      features: [
        "Basic progress tracking",
        "Personal journaling",
        "Basic coping toolbox",
      ],
      button: "Get Started Free",
      highlight: false,
    },
    {
      name: "Monthly",
      price: "$3.99",
      per: "/month",
      subtitle: "Perfect for getting started",
      features: [
        "Everything in premium",
        "Multiple community pods",
        "Advanced progress insights",
        "Priority support",
        "Custom integration",
      ],
      button: "$8.99/Month",
      highlight: false,
    },
    {
      name: "Premium",
      price: "$26.99",
      oldPrice: "$228",
      savePercent: "save 45%",
      per: "/year",
      subtitle: "Best value for committed growth",
      features: [
        "Everything in the free plan, plus",
        "Affordable plans designed to support your journey, not break your budget.",
        "Enhanced progress tracking",
        "Custom trigger alert",
        "Advanced analytics",
      ],
      button: "$59.99/year",
      highlight: true,
    },
  ];

  return (
    <section className="w-full bg-[linear-gradient(135deg,_#FFFFFF_0%,_#F9FBFA_100%)] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-[20px] md:text-[30px] font-bold text-[#21212C]">
          Simple, honest{" "}
          <span className="bg-gradient-to-b from-[#3C886B] to-[#9AF6D3] bg-clip-text text-transparent">
            pricing
          </span>
        </h2>

        <p className="text-[#67677E] mt-3 mb-14 text-[14px] md:text-[16px]">
          Start with a 3-day free trial. No credit card required.
        </p>

        <div className="grid gap-8 md:grid-cols-3 ">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.04,
                borderColor: "#2EB88A33",
                boxShadow: "#C2D6CF4D",
              }}
              className="relative bg-white border rounded-2xl p-8 shadow-sm transition flex flex-col border-gray-300 "
            >
              {p.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#3C886B] to-[#9AF6D3] text-white text-xs font-medium px-4 py-1 rounded-full shadow-md flex items-center gap-2">
                  <Image
                    src="/assets/images/icon/badge-icon.svg"
                    alt="badge"
                    width={14}
                    height={14}
                  />
                  Most Popular
                </div>
              )}

              <h3 className="text-[20px] md:text-[22px] text-[#21212C] font-bold mb-1">
                {p.name}
              </h3>
              <div className="flex flex-row items-center justify-center text-center">
                <p className="text-[20px] md:text-[30px] font-bold text-[#2EB88A]">
                  {p.price}
                </p>
                <p className="text-[#67677E] text-[14px] md:text-[18px]">
                  {p.per}
                </p>
              </div>
              <div className="flex flex-row items-center justify-center text-center gap-2">
                <p className="text-[#67677E] line-through text-[12px] md:text-[14px]">
                  {p.oldPrice}
                </p>
                <p className="text-[#2EB88A] font-semibold text-[12px] md:text-[14px]">
                  {p.savePercent}
                </p>
              </div>
              <p className="text-[#67677E] mt-2 mb-6 text-[14px] md:text-[16px]">{p.subtitle}</p>

              <ul className="space-y-2 text-left mb-8">
                {p.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 text-[#21212C] text-[14px] md:text-[16px] leading-relaxed"
                  >
                    <span className="text-[#2EB88A]">✓</span> {f}
                  </li>
                ))}
              </ul>

              {/* <div className="mt-auto">
                <motion.button
                  whileHover={{
                    backgroundColor: "#2EB88A",
                    color: "#fff",
                    borderColor: "#2EB88A33",
                  }}
                  className="w-full py-3 rounded-lg font-semibold transition border border-gray-300 shadow-md text-[#21212C]"
                >
                  {p.button}
                </motion.button>
              </div> */}
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <h2 className=" font-bold text-[20px] md:text-[30px] text-[#21212C] leading-snug">
            Start Today.{" "}
            <span className="bg-gradient-to-r from-[#2EB88A] to-[#D3B8E0] bg-clip-text text-transparent font-bold">
              You Deserve{" "}
            </span>
            <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-[#2EB88A] to-[#D3B8E0] bg-clip-text text-transparent">
              Support.
            </span>
          </h2>

          <p className="text-[#67677E] text-[14px] md:text-[18px] mt-4">
            Join thousands who've found strength in our supportive community
          </p>
        </div>
      </div>
    </section>
  );
};
