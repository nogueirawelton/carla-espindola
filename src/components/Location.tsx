// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import { Lazy } from "./Lazy";

export function Location() {
  // useGSAP(() => {
  //   gsap.timeline().from(".gsap-banner > *", {
  //     opacity: 0,
  //     y: 8,
  //     duration: 1,
  //     stagger: 0.5,
  //     ease: "power1.inOut",
  //   });
  // });

  return (
    <section id="localizacao" className="py-12">
      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-2 gap-4 px-4 text-white md:px-8">
        <div className="left"></div>

        <div className="right">
          <Lazy>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58795.977016345045!2d-43.086505513781624!3d-22.922643131866707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9985c034c8b985%3A0x262ee793dfcc1775!2zTml0ZXLDs2ksIFJK!5e0!3m2!1spt-BR!2sbr!4v1718400267745!5m2!1spt-BR!2sbr"
              loading="lazy"
              className="block h-[320px] w-full rounded-sm border-0 lg:h-[420px]"
            ></iframe>
          </Lazy>
        </div>
      </div>
    </section>
  );
}
