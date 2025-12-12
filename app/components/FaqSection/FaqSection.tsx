"use client";
import { useState } from "react";
import Link from "next/link";
import ContactModal from "../ContactModal/ContactModal";

const faqs = [
  {
    q: "How do Support Community Pods work?",
    a: "Community Pods are small groups of 3–5 people who support each other through private, secure chats. You’ll be matched with others on a similar recovery journey, making it easier to connect, share, and stay accountable together.",
  },
  {
    q: "Is my data private and secure?",
    a: "Yes, all data is encrypted and securely stored. Your privacy is our top priority.",
  },
  {
    q: "What is your cancellation policy?",
    a: "You can cancel anytime from your account settings with no hidden fees.",
  },
  {
    q: "What happens if I relapse—does my progress reset?",
    a: "Relapse does not reset your progress—it becomes part of your recovery journey.",
  },
  {
    q: "Can I use TrueDrop for different types of addiction?",
    a: "Yes, TrueDrop supports various types of addictions with tailored support.",
  },
  {
    q: "Is there a cost to using TrueDrop?",
    a: "We offer free and paid subscription options.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full px-4 md:px-8 lg:px-20 py-16 bg-[#FFFFFF]">
      <p className="text-[20px] md:text-[30px] text-[#101828] font-bold text-center mb-12">
        Frequently Asked Questions
      </p>

      <div className="max-w-5xl mx-auto">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-[#EAECF0]">
            <button
              className="w-full py-5 flex items-center justify-between text-left"
              onClick={() => toggle(i)}
            >
              <span className="text-[14px] md:text-[16px] text-[#101828] font-medium">{faq.q}</span>

              <img
                src={
                  openIndex === i
                    ? "/assets/images/icon/minus-circle.svg"
                    : "/assets/images/icon/plus-circle.svg"
                }
                alt="toggle icon"
                className="w-5 h-5 object-contain"
              />
            </button>

            <div
              className={`transition-all overflow-hidden ${
                openIndex === i ? "max-h-40 mb-4" : "max-h-0"
              }`}
            >
              <p className="text-[#475467] text-[12px] md:text[14px] leading-relaxed pb-4 pr-8">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-5xl mx-auto mt-16 bg-[#F9FAFB] rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200">
        <div className="flex justify-center -space-x-3 mb-4">
          <img
            src="/assets/images/home/marco1.png"
            className="w-[48px] h-[48] rounded-full bg-[#DDC0CE] z-0"
          />
          <img
            src="/assets/images/home/amile2.png"
            className="w-[56px] h-[56px] rounded-full bg-[#DDC0CE] z-10 relative"
          />
          <img
            src="/assets/images/home/jaya3.png"
            className="w-[48px] h-[48px] rounded-full bg-[#C6D0CB] z-0"
          />
        </div>

        <h3 className="text-[16px] md:text-[18px] text-[#101828] font-semibold text-center">
          Still have questions?
        </h3>
        <p className="text-[#475467] text-[14px] md:text-[16px] text-center mt-1">
         Can’t find the answer you’re looking for? 
        </p>

        <div className="flex justify-center mt-5">
          <Link
            href="#contact"
            onClick={(e) => { e.preventDefault(); setIsContactOpen(true); }}
            className="bg-gradient-to-b from-[#3C886B] to-[#9AF6D3] text-[#FFFFFF] text-[14px] md:text-[16px] font-semibold px-6 py-2 rounded-lg transition">
              Get in touch
          
          </Link>
        </div>
      </div>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  );
}
