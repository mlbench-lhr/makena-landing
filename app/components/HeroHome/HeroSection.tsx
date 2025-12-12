import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:min-h-[651px] flex items-center text-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/images/home/home-banner.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Green Overlay */}
        <div className="absolute inset-0 bg-[#3C886B]/60 -z-10"></div>

        {/* Content */}
        <div className="w-full text-white space-y-5 md:space-y-6 flex flex-col items-start">
          {/* Title */}
          <h1 className="font-bold text-[30px] md:text-[50px] leading-tight text-left">
            Sobriety Made <br /> Simple.
          </h1>

          {/* Description */}
          <p className="font-normal text-[16px] md:text-[22px] text-[#FFFFFF] leading-snug text-left max-w-[600px]">
            Track your journey, monitor your progress, and <br/>
            build healthy habits for a stronger, sober life.
          </p>
        </div>
      </div>
    </section>
  );
}
