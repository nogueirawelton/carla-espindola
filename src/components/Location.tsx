import {
  ArrowRight,
  Envelope,
  InstagramLogo,
  Phone,
  WhatsappLogo,
} from "phosphor-react";
import { Lazy } from "./Lazy";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSmoother } from "../hooks/useSmoother";

export function Location() {
  const { scroll } = useSmoother();

  useGSAP(() => {
    gsap
      .timeline()
      .from("#localizacao .left h2", {
        opacity: 0,
        x: -8,
        duration: 1,
        ease: "power1.inOut",
      })
      .from("#localizacao .left p", {
        opacity: 0,
        x: -8,
        ease: "power1.inOut",
      })
      .from("#localizacao .left .contact", {
        opacity: 0,
        y: 8,
        ease: "power1.inOut",
      })
      .from("#localizacao .left > a ", {
        opacity: 0,
        y: 8,
        ease: "power1.inOut",
      });
  });

  return (
    <section id="localizacao" className="py-12">
      <div className="mx-auto grid w-full max-w-screen-2xl gap-8 px-4 md:px-8 lg:grid-cols-12 lg:gap-4">
        <div className="left lg:col-span-5">
          <h2 className="font-jomolhari text-3xl text-green-500 lg:text-4xl">
            Lorem Ipsum Dolor
          </h2>

          <p className="mt-4 text-green-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies ut neque vitae pharetra. In a lorem fringilla, porttitor
            tellus ut, iaculis nisi.
          </p>

          <div className="contact mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <a
                href="tel:9999999999"
                className="flex items-center gap-2 text-green-500"
              >
                <Phone className="h-8 w-8" />
                <span>(99) 9999-9999</span>
              </a>

              <a
                href="mailto:email@dominio.com.br"
                className="mt-4 flex items-center gap-2 text-green-500"
              >
                <Envelope className="h-8 w-8" />
                <span>email@dominio.com.br</span>
              </a>
            </div>

            <div>
              <a
                href="#"
                target="_blank"
                className="flex items-center gap-2 text-green-500"
              >
                <WhatsappLogo className="h-8 w-8" />
                <span>(99) 99999-9999</span>
              </a>

              <a
                href="#"
                target="_blank"
                className="mt-4 flex items-center gap-2 text-green-500"
              >
                <InstagramLogo className="h-8 w-8" />
                <span>@instagram</span>
              </a>
            </div>
          </div>

          <a
            href="#contato"
            className="mt-8 flex h-14 w-fit items-center gap-2 rounded-sm bg-green-500 px-5 font-semibold uppercase text-beige-500 shadow-sm lg:gap-4"
            onClick={(e) => {
              e.preventDefault();
              scroll(e.currentTarget.getAttribute("href")!);
            }}
          >
            Fale conosco
            <ArrowRight className="h-6 w-6 lg:h-8 lg:w-8" />
          </a>
        </div>

        <div className="right order-first lg:order-none lg:col-span-6 lg:col-start-7">
          <Lazy className="h-[320px] lg:h-[420px]">
            <iframe
              title="Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58795.977016345045!2d-43.086505513781624!3d-22.922643131866707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9985c034c8b985%3A0x262ee793dfcc1775!2zTml0ZXLDs2ksIFJK!5e0!3m2!1spt-BR!2sbr!4v1718400267745!5m2!1spt-BR!2sbr"
              loading="lazy"
              className="] block h-full w-full rounded-sm border-0"
            ></iframe>
          </Lazy>
        </div>
      </div>
    </section>
  );
}
