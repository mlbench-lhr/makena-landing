"use client";
import Image from "next/image";

export default function ToolsSection() {
  return (
    <section className="w-full py-20 bg-[#F9FBFA]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-[20px] md:text-[30px] font-bold text-[#21212C]">
          Everything you need to{" "}
          <span className="bg-gradient-to-b from-[#3C886B] to-[#9AF6D3] bg-clip-text text-transparent">
            stay strong
          </span>
        </h2>
        <p className="text-[14px] md:text-[16px] font-normal text-[#67677E] mt-3 max-w-xl mx-auto">
          Powerful tools designed specifically for your sobriety journey, all in
          one beautiful, private space.
        </p>

        {/* Cards Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
          {/* Card 1 */}
          <div className="bg-gradient-to-t from-[#FCFDFD] to-[#FAF9FB] p-4 rounded-2xl shadow-lg flex flex-col">
            <Image
              src="/assets/images/icon/barchart-icon.svg"
              alt="Progress Icon"
              width={48}
              height={48}
              className="mb-4 w-[30px] h-[30px] md:w-[48px] md:h-[48px]"
            />
            <h3 className="font-bold text-[14px] md:text-[16px] text-[#21212C] text-left">
              Sobriety Progress Tracker
            </h3>
            <p className="text-[#67677E] text-[14px] md:text-[16px] mt-1 font-normal text-left ">
              See your growth daily with beautiful progress rings and milestone
              badges.
            </p>

            <div className="bg-[#F7FFF3] rounded-xl border border-[#DCE5E2] p-4 mt-4 md:mt-auto mb-[4px]">
              <p className="text-center text-[10px] md:text-[14px] text-[#21212C] font-medium mb-1">
                Sobriety Streak
              </p>

              <div className="flex justify-center items-center relative">
                <img
                  src="/assets/images/icon/circle-graph.svg" // your circle image here
                  alt="progress"
                  className="w-[44px] h-[44px]"
                />
              </div>
              <p className="text-center text-[#67677E] text-[10px] md:text-[12px] mt-3">
                Days Strong!
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-t from-[#FCFDFD] to-[#FAF9FB] p-4 rounded-2xl shadow-md flex flex-col">
            <Image
              src="/assets/images/icon/message-icon.svg"
              alt="Support Icon"
              width={48}
              height={48}
              className="mb-4 w-[30px] h-[30px] md:w-[48px] md:h-[48px]"
            />
            <h3 className="font-bold text-[14px] md:text-[16px] text-[#21212C] text-left">
              Micro Support Pods
            </h3>
            <p className="text-[#67677E] text-[14px] md:text-[16px] mt-1 font-normal text-left">
              Join small, intimate groups of 3-5 people for authentic
              connection.
            </p>

            <div className="bg-[#F8FFDE] rounded-xl border border-[#DCE5E2] p-4 mt-4 md:mt-auto mb-[4px] text-sm space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-[17px] h-[16px] rounded-full bg-[#4BAF8E]"></div>
                <div className="w-[17px] h-[16px] rounded-full bg-[#A4D7E1]"></div>
                <div className="w-[17px] h-[16px] rounded-full bg-[#F2BFD9]"></div>
                <span className="text-[12px] text-[#67677E] ml-1">+2</span>
              </div>
              <div className="w-full text-center rounded-lg bg-[#2EB88A1A] text-[#21212C] text-[12px]">
                <p> Just hit 30 days!🎉</p>
              </div>
              <div className="w-full text-center  rounded-lg bg-[#D3B8E01A] text-[#21212C] text-[12px] ">
                <p>Amazing work! Keep going 💪</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-t from-[#FCFDFD] to-[#FAF9FB] p-4 rounded-2xl shadow-md flex flex-col">
            <Image
              src="/assets/images/icon/book-icon.svg"
              alt="Journal Icon"
              width={48}
              height={48}
              className="mb-4 w-[30px] h-[30px] md:w-[48px] md:h-[48px]"
            />
            <h3 className="font-bold text-[14px] md:text-[16px] text-[#21212C] text-left">
              Private Journaling
            </h3>
            <p className="text-[#67677E] text-[14px] md:text-[16px] mt-1 font-normal text-left">
              Express yourself freely in your personal,encrypted journal space.
            </p>

            <div className="bg-[#F7FFF3] rounded-xl border border-[#DCE5E2] p-4 mt-4 md:mt-auto mb-[4px] text-left">
              <div className="h-2 bg-gradient-to-b from-[#3C886B] to-[#9AF6D3] rounded-full w-5/5 mb-2"></div>
              <div className="h-2 bg-gradient-to-b from-[#3C886B] to-[#9AF6D3] rounded-full w-3/5 mb-2"></div>
              <div className="h-2 bg-gradient-to-b from-[#3C886B] to-[#9AF6D3] rounded-full w-2/5"></div>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-[8px] h-[8px] rounded-full bg-[#4BAF8E] mt-2"></div>
                <p className="text-[12px] text-[#67677E] mt-2">
                  Private & Encrypted
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-t from-[#FCFDFD] to-[#FAF9FB] p-4 rounded-2xl shadow-md flex flex-col">
            <Image
              src="/assets/images/icon/brain-icon.svg"
              alt="AI Icon"
              width={48}
              height={48}
              className="mb-4 w-[30px] h-[30px] md:w-[48px] md:h-[48px]"
            />
            <h3 className="font-bold text-[14px] md:text-[16px] text-[#21212C] text-left">
              Personalized Coping Tools
            </h3>
            <p className="text-[#67677E] text-[14px] md:text-[16px] mt-1 font-normal text-left">
              Small actions that make big differences over time.
            </p>

            <div className="bg-[#F5F9FF] rounded-xl border border-[#DCE5E2] p-4 mt-4 md:mt-auto mb-[4px] text-left text-sm space-y-2">
              <p className="text-[#00000087]">
                Understanding your emotions starts with your words.
              </p>
            </div>
          </div>
        </div>
        {/* Wallet Section */}
        <div className="bg-gradient-to-t from-[#FCFDFD] to-[#FAF9FB] shadow-md mt-10 rounded-2xl shadow-sm p-4">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/assets/images/icon/wallet-icon.svg"
              alt="Wallet Icon"
              width={48}
              height={48}
              className=" w-[30px] h-[30px] md:w-[48px] md:h-[48px]"
            />
            <div className="flex flex-col">
              <h3 className="text-[16px] md:text-[18px] font-bold text-[#21212C] text-start">
                Sobriety Wallet
              </h3>
              <p className="text-[#67677E] text-[14px] md:text-[16px]">
                Track the money you're saving on your journey to freedom.
              </p>
            </div>
          </div>

          <div className="bg-[#FFF6F6] rounded-xl p-[17px]">
            <p className="text-[18px] md:text-[22px] font-bold text-[#2EB88A]">
              $786.20
            </p>
            <p className="text-[#67677E] text-[12px] text-center">
              Money Saved
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full mt-2">
              <div
                className="h-full bg-gradient-to-b from-[#3C886B] to-[#9AF6D3] rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>

            <p className="text-[#67677E] text-[12px] mt-2">Goal: $1,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
