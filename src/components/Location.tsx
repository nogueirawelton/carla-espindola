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

  // useGSAP(() => {
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: "#localizacao",
  //         start: "top 50%",
  //       },
  //     })
  //     .from("#localizacao .left h2", {
  //       opacity: 0,
  //       x: -8,
  //       duration: 0.75,
  //       ease: "power1.inOut",
  //     })
  //     .from("#localizacao .left p", {
  //       opacity: 0,
  //       x: -8,
  //       ease: "power1.inOut",
  //     })
  //     .from("#localizacao .left .contact", {
  //       opacity: 0,
  //       y: 8,
  //       ease: "power1.inOut",
  //     })
  //     .from("#localizacao .left > a ", {
  //       opacity: 0,
  //       y: 8,
  //       ease: "power1.inOut",
  //     });
  // });

  return (
    <section id="localizacao" className="py-12">
      <div className="mx-auto grid w-full max-w-screen-2xl gap-8 px-4 md:px-8 lg:grid-cols-12 lg:gap-4">
        <div className="left lg:col-span-5">
          <h2 className="font-jomolhari text-3xl text-green-500 lg:text-4xl">
            Entre em contato
          </h2>

          <p className="mt-4 text-green-500">
            Estamos aqui para oferecer soluções jurídicas personalizadas que
            atendem às suas necessidades específicas. Entre em contato hoje
            mesmo e descubra como podemos ajudar você a alcançar seus objetivos
            legais.
          </p>

          <div className="contact mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <a
                href="tel:2134924688"
                className="flex items-center gap-2 text-green-500"
              >
                <Phone className="h-8 w-8" />
                <span>(21) 3492-4688</span>
              </a>

              <a
                href="mailto:carlaespindola.adv@hotmail.com"
                className="mt-4 flex items-center gap-2 text-green-500"
              >
                <Envelope className="h-8 w-8" />
                <span>carlaespindola.adv@hotmail.com</span>
              </a>
            </div>

            <div>
              <a
                href="https://wa.me/+5521999397844"
                target="_blank"
                className="flex items-center gap-2 text-green-500"
              >
                <WhatsappLogo className="h-8 w-8" />
                <span>(21) 99939-7844</span>
              </a>

              <a
                href="https://www.instagram.com/carlaespindolaadvocacia"
                target="_blank"
                className="mt-4 flex items-center gap-2 text-green-500"
              >
                <InstagramLogo className="h-8 w-8" />
                <span>@carlaespindolaadvocacia</span>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.4725138772687!2d-43.0671675!3d-22.932819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99870050a117cd%3A0xbb9d8512ea595d67!2sCarla%20Espindola%20Advocacia%20C%C3%ADvel%20e%20Empresarial!5e0!3m2!1spt-BR!2sbr!4v1722567206355!5m2!1spt-BR!2sbr"
              loading="lazy"
              className="] block h-full w-full rounded-sm border-0"
            ></iframe>
          </Lazy>
        </div>
      </div>
    </section>
  );
}
