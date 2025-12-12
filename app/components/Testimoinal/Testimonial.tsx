"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

export const Testimonial = () => {
  const testimonials = [
    {
      name: "Emily R.",
      text: "TrueDrop made me realize I don’t have to do this alone. My pod has become like a second family.",
      image: "/assets/images/home/emily.png",
    },
    {
      name: "James K.",
      text: "The daily check-ins kept me accountable. I’m now 4 months sober and feeling stronger every day.",
      image: "/assets/images/home/james.png",
    },
    {
      name: "Sophia L.",
      text: "At first, I doubted myself, but with the support I found here, I’ve built new habits and new hope.",
      image: "/assets/images/home/sophia.png",
    },
    {
      name: "Michael T.",
      text: "TrueDrop gave me consistency. It’s the first time I’ve felt real momentum in my recovery journey.",
      image: "/assets/images/home/michael.png",
    },
  ];

  return (
     <section className="w-full py-20 bg-[linear-gradient(135deg,_#FFFFFF_0%,_#F9FBFA_100%)]">
      <div className="max-w-6xl mx-auto px-4 relative">

        <h2 className="text-[20px] md:text-[30px] font-bold text-start mb-14 text-[#21212C]">
          Don’t just take our <span className="bg-gradient-to-b from-[#3C886B] to-[#9AF6D3] bg-clip-text text-transparent">word for it</span>
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".testimonial-prev-btn",
            nextEl: ".testimonial-next-btn",
          }}

          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}

          loop={true}
          slidesPerGroup={1}
          slidesPerView={1}
          spaceBetween={16}

          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 3.2, spaceBetween: 24 }
          }}

          className="pb-20"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden shadow-lg w-full"
              >
                <div className="w-full h-[360px] md:h-[480px] relative">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>

                <div className="absolute inset-0 bg-[black/40]"></div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#FFFFFF4D] border border-[#FFFFFF80] backdrop-blur-md p-5 h-[200px] md:h-[246px] ">
                  <p className="text-[#FFFFFF] text-[20px] ">★ ★ ★ ★ ★</p>
                  <p className="font-semibold text-[#FFFFFF] text-[16px] md:text-[20px] ">{t.name}</p>
                  <p className="text-[14px] md:text-[16px] text-[#FFFFFF] mt-4 mb-[4px]">“{t.text}”</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex gap-4 mt-6 md:justify-start justify-center">
          <button className="testimonial-prev-btn bg-[#FFFFFFE5] shadow-md p-2 border border-[#EAECF0] rounded-full w-12 h-12 flex items-center justify-center">
            <Image src="/assets/images/icon/arrow-left.svg" width={20} height={20} alt="Previous" />
          </button>

          <button className="testimonial-next-btn bg-[#FFFFFFE5] shadow-md p-2 rounded-full w-12 h-12 flex items-center justify-center">
            <Image src="/assets/images/icon/arrow-right.svg" width={20} height={20} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};
