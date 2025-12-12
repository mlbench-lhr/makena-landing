import Image from "next/image";
import Link from "next/link";

interface BannerProps {
  title: string;
  subtitle: string;
  subtext: string;
}

export default function Banner({ title, subtitle, subtext, }: BannerProps) {
  return (
    <section className="relative w-full h-[500px] md:min-h-[588px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
      <Image
        src="/assets/images/home/page-banner.png" // place your banner image in public folder as banner-bg.jpg
        alt="Banner Background"
        fill
        className="object-cover"
        priority
      />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3C886B]/60 -z-10"></div>

      {/* Content */}
     <div className="relative z-10 text-center px-4 w-full mx-auto flex flex-col items-center">
  
  <h1 className="text-[30px] md:text-[50px] text-[#FFFFFF] font-bold mb-4">{title}</h1>
  
  <p className="text-[18px] md:text-[22px] font-normal text-[#FFFFFF] mb-6">{subtitle}</p>
  <p className="text-[18px] md:text-[22px] text-[#FFFFFF] mb-6">{subtext}</p>

  {/* <button
    className="
      flex items-center justify-center gap-2
      rounded-xl font-semibold text-[14px] md:text-[16px] text-[#FAF9FB]
      bg-gradient-to-t from-[#9AF6D3] to-[#3C886B] shadow-md hover:opacity-90 transition-all

      w-[200px] md:w-[234px] h-12 md:h-[52px]   
    "
  >
    <Image
      src="/assets/images/icon/nav-icon.svg"
      alt="Start Icon"
      width={20}
      height={20}
      className="w-4 h-4 md:w-5 md:h-5"
    />
    Start Free for 3 Days
  </button> */}

  {/* <p className="text-[12px] md:text-[14px] text-[#FFFFFF] mt-4 opacity-80">
    No credit card required • Cancel anytime
  </p> */}
</div>
    </section>
  );
}
