"use client";

import Image from "next/image";

// Card data function
function getCardsData() {
  return [
    {
      // icon: "/assets/images/icon/card-icon-1.svg",
      title: "Isolation and Shame",
      description:
        "Recovery feels lonely. Large support groups are overwhelming, and friends don’t understand the daily struggle.",
    },
    {
      // icon: "/assets/images/icon/card-icon-2.svg",
      title: "Lost Progress",
      description:
        "Without proper tracking and motivation, it’s easy to lose sight of progress and fall back into old patterns.",
    },
    {
      // icon: "/assets/images/icon/card-icon-3.svg",
      title: "Trigger Blindness",
      description:
        "Cravings hit unexpectedly. Without anticipation and coping strategies, triggers become overwhelming.",
    },
  ];
}

export default function RecoveryChallenges() {
  const cards = getCardsData(); // ✅ FIX
  return (
    <section
      className="w-full py-16"
      style={{
        background: "linear-gradient(to bottom, #F9FBFA, #F7F5F3)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-[20px] md:text-[30px] font-bold text-[#21212C] leading-snug">
          We Understand the Hidden{" "}
          <span className="bg-gradient-to-r from-[#3C886B] to-[#9AF6D3] bg-clip-text text-transparent">
            Challenges of <br className="hidden md:inline" /> Recovery
          </span>
        </h2>

        <p className="mt-4 text-[#67677E] max-w-lg mx-auto font-noraml text-[14px] md:text-[16px]">
          TrueDrop is your private, everyday companion for sobriety. No loud
          forums. No pressure. Just small, safe support spaces, powerful tools,
          and daily wins — all built around
          <span className="text-[#2EB88A] font-semibold"> <i>you</i></span>.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 shadow-sm border border-green-100 flex flex-col items-center text-center h-full"
              style={{ backgroundColor: "#F7FFF3" }}
            >
              {/* Image Icon */}

              <div className="md:w-[64px] md:h-[64px] w-[48px] h-[48px] mx-auto mb-4 flex items-center justify-center shadow-md rounded-full bg-gradient-to-r from-[#9AF6D3] to-[#3C886B]">
                {/* <Image src={card.icon} alt={`icon-${index}`} width={60} height={60} className="object-contain" /> */}
                <span className="text-white text-[20px] md:text-[24px] font-bold">
                  {index + 1}
                </span>
              </div>

              {/* Title */}
              <p className="text-[#21212C] text-[12px] md:text-[14px] font-medium mb-2">
                {card.title}
              </p>

              {/* Description */}
              <p className="text-[#67677E] text-[12px] md:text-[14px] font-normal ">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
