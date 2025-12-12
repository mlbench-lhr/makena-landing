"use client";
import Image from "next/image";

const steps = [
  {
    id: "01",
    icon: "/assets/images/icon/correct-icon.svg",
    bg: "bg-[#F8FFDE]",
    title: "Quick Sign-Up",
    desc: "No complicated forms or endless questions. Create your account in minutes and start right away.",
  },
  {
    id: "02",
    icon: "/assets/images/icon/profile-icon.svg",
    bg: "bg-[#F7FFF3]",
    title: "Personalize Your Journey",
    desc: "Set your goals and choose the tools that fit you — because recovery isn’t one-size-fits-all.",
  },
  {
    id: "03",
    icon: "/assets/images/icon/profile-icon1.svg",
    bg: "bg-[#FFD9E5]",
    title: "Find Your Community",
    desc: "Join a supportive pod or create your own safe space to share, learn, and grow.",
  },
  {
    id: "04",
    icon: "/assets/images/icon/award-icon.svg",
    bg: "bg-[#F7B7A3]",
    title: "Track & Celebrate Progress",
    desc: "Watch your wins add up with easy-to-read progress tracking that keeps you motivated and accountable.",
  },
];

export default function WorkSection() {
  return (
    <section className="py-20 bg-[#FFFFFF]">
      <div className="max-w-5xl mx-auto px-4 ">
        {/* Heading */}
        <h2 className="text-center text-[20px] md:text-[30px] font-bold text-[#21212C]">
          How TrueDrop Works – in{" "}
          <span className=" text-[#3C886B]">4 Simple steps</span>
        </h2>

        <p className="text-center text-[14px] md:text-[16px] font-normal text-[#67677E] mt-3">
          See how TrueDrop supports you every step of the way
        </p>

        <div className="relative mt-16 flex gap-10">
          {/* Left vertical icons */}
          <div className="relative hidden md:flex flex-col items-center space-y-16">
            {/* vertical line */}
            <div className="absolute top-0 bottom-0 w-[2px] bg-[#E5EFEA]"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative z-10 w-12 h-12 flex items-center justify-center rounded-full shadow-md ${step.bg}`}
              >
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={30}
                  height={30}
                />
              </div>
            ))}
          </div>

          {/* Step cards */}
          <div className="flex-1 space-y-6 md:space-y-0 w-full">
            {steps.map((step, index) => (
              <div
                key={index}
                // className="bg-gradient-to-r from-[#FCFDFD] to-[#FAF9FB] rounded-xl md:rounded-none p-6 shadow-md border border-[#E9F1EC]">
                className={`
                bg-gradient-to-r from-[#FCFDFD] to-[#FAF9FB] 
                p-6 border border-[#E9F1EC] shadow-md rounded-xl md:rounded-none

                /* remove spacing and create single-group rounded corners */
                ${index === 0 ? "md:rounded-t-xl" : ""}
                ${index === steps.length - 1 ? "md:rounded-b-xl" : ""}
                 mb:border-t-0
                ${index === 0 ? "md:border-t" : ""}

               /* equal height on mobile */
                sm-h-[150px] flex flex-col justify-center
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-gradient-to-b from-[#3C886B] to-[#9AF6D3] text-[10px] md:text-[14px] font-semibold text-[#F9FBFA] rounded-full">
                    Step {step.id}
                  </span>
                  <h3 className="tex-[14px] md:text-[20px] font-bold text-[#21212C]">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 text-[14] md:[16px] font-normal text-[#67677E]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
