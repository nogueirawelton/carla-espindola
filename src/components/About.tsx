import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "phosphor-react";
import { useSmoother } from "../hooks/useSmoother";

export function About() {
  const { scroll } = useSmoother();

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#sobre",
          start: "top 50%",
        },
      })
      .from("#sobre .left", {
        duretion: 1,
        opacity: 0,
        x: -8,
        ease: "power1.inOut",
      })
      .from("#sobre .right > *", {
        opacity: 0,
        stagger: 0.25,
        y: 8,
        ease: "power1.inOut",
      });
  });
  return (
    <section id="sobre" className="bg-beige-500 py-12">
      <div className="mx-auto grid max-w-screen-2xl gap-8 px-4 lg:grid-cols-12 lg:gap-4 lg:px-8">
        <div className="left relative h-full min-h-[320px] lg:col-span-7">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imagem"
            width={425}
            height={325}
            loading="lazy"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />

          <span className="group absolute bottom-0 left-1/2 right-0 box-content grid h-16 w-16 -translate-x-1/2 translate-y-1/2 place-items-center rounded-full border-8 border-beige-500 bg-green-500 lg:left-auto lg:top-1/2 lg:h-20 lg:w-20 lg:-translate-y-1/2 lg:translate-x-1/2">
            <img
              src="/img/icon-white.svg"
              alt=""
              width={45}
              height={30}
              loading="lazy"
              className="transition-all duration-500 group-hover:rotate-180"
            />
          </span>
        </div>

        <div className="right mt-8 text-green-500 lg:col-span-4 lg:col-start-9 lg:mt-0">
          <h2 className="text-left font-jomolhari text-3xl lg:text-4xl">
            Sobre nós
          </h2>

          <p className="mt-4">
            Somos um escritório de advocacia localizado no Rio de Janeiro, mais
            precisamente em Niterói. Nosso compromisso é oferecer excelência nos
            serviços de consultoria jurídica, representação judicial, elaboração
            de documentos e assessoria empresarial. Contamos com uma equipe
            especializada e estabelecemos parcerias em todo o Brasil para
            garantir soluções eficientes e personalizadas em cada demanda.
          </p>

          <p className="mt-4">
            Valorizamos profundamente estabelecer uma relação de confiança com
            cada um dos nossos clientes, buscando compreender seus objetivos e
            necessidades individuais. Cada caso é tratado com a máxima
            importância e agilidade, assegurando um serviço de excelência.
          </p>

          <p className="mt-4">
            Estamos à disposição para agendar uma consulta inicial, onde vamos
            discutir como melhor atender você ou sua empresa. Descubra como
            nossa experiência e dedicação podem fazer a diferença na resolução e
            prevenção dos seus litígios.
          </p>

          {/* <p className="mt-4">
            Entre em contato conosco para identificarmos as suas necessidades e
            desenvolver conclusões personalizadas para que possamos lhe ajudar.
          </p> */}

          <a
            href="#contato"
            className="mt-8 flex h-14 w-fit items-center gap-2 rounded-sm bg-green-500 px-5 font-semibold uppercase text-beige-500 shadow-sm lg:gap-4"
            onClick={(e) => {
              e.preventDefault();
              scroll(e.currentTarget.getAttribute("href")!);
            }}
          >
            Saiba mais
            <ArrowRight className="h-6 w-6 lg:h-8 lg:w-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
