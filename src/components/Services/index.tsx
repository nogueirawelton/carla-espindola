import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./Card";

import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { CaretLeft, CaretRight } from "phosphor-react";

export function Services() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: "#areas-de-atuacao p",
      })
      .from("#areas-de-atuacao h2", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      })
      .from("#areas-de-atuacao .desc", {
        opacity: 0,
        y: 10,
        ease: "power1.inOut",
      })
      .from("#areas-de-atuacao .swiper-slide", {
        opacity: 0,
        y: 24,
        duration: 1,
        stagger: 0.25,
        ease: "back.inOut",
      });
  });

  return (
    <section id="areas-de-atuacao" className="bg-beige-500 py-12">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-2">
          <img
            src="/img/icon-green.svg"
            alt="Ícone"
            width={73}
            height={49}
            loading="lazy"
          />
          <h2 className="text-center font-jomolhari text-3xl text-green-500 lg:text-4xl">
            Áreas de Atuação
          </h2>
        </div>

        <p className="desc mx-auto mt-3 max-w-2xl text-center text-green-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          ultricies ut neque vitae pharetra. In a lorem fringilla, porttitor
          tellus ut, iaculis nisi.
        </p>

        <div className="relative mt-8 lg:mx-8">
          <Swiper
            spaceBetween={16}
            speed={750}
            loop
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: "[data-prev='services']",
              nextEl: "[data-next='services']",
            }}
            autoplay={{
              delay: 10000,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide className="group/slide">
              <Card />
            </SwiperSlide>

            <SwiperSlide className="group/slide">
              <Card />
            </SwiperSlide>

            <SwiperSlide className="group/slide">
              <Card />
            </SwiperSlide>

            <SwiperSlide className="group/slide">
              <Card />
            </SwiperSlide>

            <SwiperSlide className="group/slide">
              <Card />
            </SwiperSlide>

            <SwiperSlide className="group/slide">
              <Card />
            </SwiperSlide>
          </Swiper>

          <div className="flex justify-between gap-4">
            <button
              aria-label="Serviço Anterior"
              data-prev="services"
              className="left-0 top-1/2 z-10 -mt-6 box-content grid h-12 w-12 place-items-center rounded-full border-8 border-beige-500 bg-white lg:absolute lg:h-16 lg:w-16 lg:-translate-x-1/2 lg:-translate-y-1/2"
            >
              <CaretLeft className="h-10 w-10 text-green-500" />
            </button>

            <button
              aria-label="Próximo Serviço"
              data-next="services"
              className="right-0 top-1/2 z-10 -mt-6 box-content grid h-12 w-12 place-items-center rounded-full border-8 border-beige-500 bg-white lg:absolute lg:h-16 lg:w-16 lg:-translate-y-1/2 lg:translate-x-1/2"
            >
              <CaretRight className="h-10 w-10 text-green-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
