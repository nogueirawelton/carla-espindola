import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "phosphor-react";
import { useSmoother } from "../hooks/useSmoother";

export function Banner() {
  const { scroll } = useSmoother();

  useGSAP(() => {
    gsap.timeline().from(".gsap-banner > *", {
      opacity: 0,
      y: 8,
      duration: 1,
      stagger: 0.5,
      ease: "power1.inOut",
    });
  });

  return (
    <section id="inicio" className="relative flex h-screen items-center">
      <div className="absolute top-0 z-[-1] h-full w-full bg-[radial-gradient(circle,rgba(0,0,0,0.8)_0%,rgb(0,0,0)_100%)] opacity-50" />

      <picture>
        <source srcSet="/img/desktop/banner.webp" media="(min-width: 600px)" />
        <img
          src="/img/mobile/banner.webp"
          alt="Banner"
          className="absolute left-0 top-0 z-[-2] h-full w-full object-cover"
          width={425}
          height={800}
        />
      </picture>

      <div className="mx-auto w-full max-w-screen-2xl px-4 text-white md:px-8">
        <div className="gsap-banner max-w-xl">
          <h1 className="font-jomolhari text-4xl leading-[50px] lg:text-6xl lg:leading-[70px]">
            Excelência em <br />
            Direito e Justiça
          </h1>

          <p className="mt-3">
            Protegendo seus direitos com expertise e dedicação. <br /> Alcance
            resultados concretos com nossa equipe especializada.
          </p>

          <a
            href="#contato"
            className="mt-8 flex h-14 w-fit items-center gap-2 rounded-sm bg-green-500 px-5 font-semibold uppercase shadow-sm lg:h-16 lg:gap-4"
            onClick={(e) => {
              e.preventDefault();
              scroll(e.currentTarget.getAttribute("href")!);
            }}
          >
            Fale conosco
            <ArrowRight className="h-6 w-6 lg:h-8 lg:w-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
