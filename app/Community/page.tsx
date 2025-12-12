import Banner from "../components/Banner/Banner";
import Layout from "../components/Layout/Layout";
import Link from "next/link";

const guidelineCards = [
  {
    title: "Confidentiality",
    desc: "What’s shared in your pod stays in your pod. Never share another member’s story outside the group.",
    // items: [],
  },
  {
    title: "Active Participation",
    desc: "Engage meaningfully. Check in regularly, but don’t feel pressured to share more than you’re comfortable with.",
    // items: [],
  },
  {
    title: "Respect Boundaries",
    desc: "Everyone has different comfort levels. Respect when someone chooses not to share.",
    // items: [],
  },
];

export default function Community() {
  return (
    <Layout>
      <main>
        <Banner
          title="Community Guidelines"
          subtitle="Creating a safe, supportive space for everyone on their sobriety journey."
          subtext=""
        />

        {/* core value Section */}
        <section className="w-full py-20 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto px-4">
            {/* Heading */}
            <h2 className="text-center text-[20px] md:text-[30px] text-[#000000] font-bold text-black mb-14">
              Our Core Values
            </h2>

            {/* Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* DO Box */}
              <div className="bg-[#F5F9FF] p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[#41E81F] text-xl">✔</span>
                  <h3 className="text-[16px] md:text-[20px] font-bold text-[#000000]">
                    Do
                  </h3>
                </div>

                <ul className="space-y-4 text-[#000000] text-[14px] md:text-[16px] font-normal">
                  <li>Share your experiences honestly</li>
                  <li>Ask questions when you need help</li>
                  <li>Celebrate others' victories</li>
                  <li>Use trigger warnings when appropriate</li>
                </ul>
              </div>

              {/* DO NOT Box */}
              <div className="bg-[#F8FFDE] p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[#FA260E] text-xl">✖</span>
                  <h3 className="text-[16px] md:text-[20px] font-bold text-[#000000]">
                    Do Not
                  </h3>
                </div>

                <ul className="space-y-4 text-[#000000] text-[14px] md:text-[16px] font-normal">
                  <li>Share others' personal information</li>
                  <li>Give medical or legal advice</li>
                  <li>Promote substances or harmful behaviors</li>
                  <li>Use offensive or discriminatory language</li>
                  <li>Share graphic details of substance use</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* pod guidlines section */}
        <section className="w-full bg-[#FFF6F6] py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-center text-[20px] text-[#000000] md:text-[30px] font-bold mb-4">
              Support Pod Guidelines
            </h2>

            <p className="text-center text-[14px] md:text-[16px] text-[#000000] max-w-2xl mx-auto mb-12">
              Support pods are small, intimate groups where members can share
              safely. Each pod has a maximum of 8 members to maintain intimacy
              and trust.
            </p>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-3">
              {guidelineCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-[#F7FFF3] border border-[#E3EDE1] rounded-xl p-8 shadow-sm text-center"
                >
                  <h3 className="font-bold text-[14px] md:text-[16px] text-[#000000] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#000000] text-[12px] md:text-[14px]">
                    {card.desc}
                  </p>

                  {/* {card.items.length > 0 && (
                <ul className="">
                  {card.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700"
                    >
                    </li>
                  ))}
                </ul>
              )} */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* reporting and safety section */}
        <section className="w-full bg-gradient-to-b from-[#3C886B] to-[#9AF6D3]">
          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="py-12 md:py-20 text-center">
              <p className="text-[#FFFFFF] text-[20px] md:text-[30px] font-bold">
                Reporting & Safety
              </p>

              <i className="text-[#FFFFFF] mt-4 text-[14px] md:text-[16px]">
                If you encounter behavior that violates these guidelines or
                makes you feel unsafe, report it immediately.
              </i>

              <div
                className="
          mt-10 mx-auto max-w-6xl
          bg-[white]/10 backdrop-blur-md
          rounded-xl px-4 py-4
          text-left text-[#FFFFFF] space-y-1 text-[14px] md:text-[16px]
        "
              >
                <div className="flex items-start gap-3">
                  <span className="text-[#F7FFF3] text-[20px] text-center">
                    ✓
                  </span>
                  <p>Use the report function in any conversation</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#F7FFF3] text-[20px] text-center">
                    ✓
                  </span>
                  <p>Contact support@truedrop.app for serious concerns</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#F7FFF3] text-[20px] text-center">
                    ✓
                  </span>
                  <p>
                    In crisis situations, contact emergency services immediately
                  </p>
                </div>
              </div>

              {/* <div className="flex flex-col md:flex-row gap-3 justify-center mt-10">
                <Link
                  href="mailto:truedrop1975@gmail.com"
                  className="
               bg-gradient-to-t from-[#9AF6D3] to-[#3C886B] hover:bg-white/30 text-[#F9FBFA] text-[14px] md:text-[16px] font-semibold
               px-8 py-3 rounded-lg shadow-lg backdrop-blur-md text-center
               w-full h-[50px]        
               md:w-[295px] md:h-[60px]     
             flex items-center justify-center"
                >
                  Contact Support
                </Link>

                <Link
                  href="/HelpCenter"
                  className="
               bg-[#F7FFF3] text-[#000000] text-[14px] md:text-[16px] font-semibold
               px-8 py-3 rounded-lg shadow-lg text-center
               w-full h-[50px]            
               md:w-[295px] md:h-[60px]   
               flex items-center justify-center"
                >
                  Help Center
                </Link>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
