import { Card } from "./Card";
import { ArrowRight, Medal, Scales } from "phosphor-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSmoother } from "../../hooks/useSmoother";

const cards = [
  {
    icon: <Medal />,
    title: "Experiência Reconhecida",
    description:
      "Nossa equipe possui vasta experiência e reconhecimento na defesa dos direitos de nossos clientes. Conte com quem entende para alcançar resultados excepcionais",
  },
  {
    icon: <Scales />,
    title: "Equidade e Transparência",
    description:
      "Promovemos justiça com equidade e transparência em todas as nossas intervenções legais. Protegemos seus direitos com comprometimento e integridade",
  },
];

export function Benefits() {
  const { scroll } = useSmoother();

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#beneficios",
          start: "top 80%",
        },
      })
      .from("#beneficios .left h2", {
        opacity: 0,
        x: -8,
        duration: 1,
        ease: "power1.inOut",
      })
      .from("#beneficios .left p", {
        opacity: 0,
        x: -8,
        ease: "power1.inOut",
      })
      .from("#beneficios .left a", {
        opacity: 0,
        y: 8,
        ease: "power1.inOut",
      })
      .from("#beneficios .items ", {
        opacity: 0,
        y: 8,
        ease: "power1.inOut",
      });
  });

  return (
    <section id="beneficios" className="bg-green-icon bg-cover py-12">
      <div className="mx-auto grid max-w-screen-2xl gap-8 px-4 lg:grid-cols-12 lg:gap-4 lg:px-8">
        <div className="left lg:col-span-4">
          <h2 className="text-center font-jomolhari text-3xl text-beige-500 lg:text-left lg:text-4xl">
            Por que escolher nossos serviços jurídicos?
          </h2>

          <p className="mt-4 text-center text-beige-500 lg:text-left">
            Nossa equipe oferece soluções personalizadas para garantir seus
            direitos e interesses, seja em questões complexas ou situações
            cotidianas.
          </p>

          <a
            href="#contato"
            className="mt-8 hidden h-14 w-fit items-center gap-2 rounded-sm bg-beige-500 px-5 font-semibold uppercase text-green-500 shadow-sm lg:flex lg:gap-4"
            onClick={(e) => {
              e.preventDefault();
              scroll(e.currentTarget.getAttribute("href")!);
            }}
          >
            Fale conosco
            <ArrowRight className="h-6 w-6 lg:h-8 lg:w-8" />
          </a>
        </div>

        <div className="lg:col-span-7 lg:col-start-7">
          <div className="items flex flex-col items-center gap-4 md:flex-row">
            {cards.map((card, index) => (
              <Card
                data-extended={index == 1}
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

          <a
            href="#contato"
            className="mx-auto mt-8 flex h-14 w-fit items-center gap-2 rounded-sm bg-beige-500 px-5 font-semibold uppercase text-green-500 shadow-sm lg:hidden lg:gap-4"
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
