import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./Card";

import "swiper/css";
import { Navigation } from "swiper/modules";
import { CaretLeft, CaretRight } from "phosphor-react";

const cards = [
  {
    thumb:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Direito da saúde",
    description:
      "Atuamos no Direito à Saúde, com o objetivo primordial de assegurar os direitos de nossos clientes no acesso a tratamentos médicos, cirurgias e medicamentos de alto custo.",
    content: `
    <p>Atuamos no Direito à Saúde, com o objetivo primordial de assegurar os direitos de nossos clientes no acesso a tratamentos médicos, cirurgias e medicamentos de alto custo.</p>
    <p>Nosso foco é trazer soluções eficazes garantindo que nossos clientes recebam o tratamento adequado desde o momento da negativa pelo plano de saúde até a obtenção da decisão judicial. Com uma abordagem comprometida e estratégica, trabalhamos para superar os obstáculos legais e burocráticos, sempre visando o bem-estar e a qualidade de vida de quem confia em nossos serviços.</p>
    <p>Estamos à disposição para agendar uma consulta, onde poderemos discutir detalhadamente a sua situação e apresentar solução jurídica para a negativa indevida do seu procedimento. Conte conosco para defender os seus direitos e garantir que você receba o tratamento médico necessário sem demoras injustificadas.</p>
    `,
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Direito tributário",
    description:
      "Nossa equipe especializada utiliza estratégias jurídicas eficientes para garantir que nossos clientes obtenham o máximo proveito das oportunidades legais disponíveis, proporcionando alívio fiscal e justiça tributária.",
    content: `
    <p>O Direito Tributário é o ramo do Direito Público que regulamenta as complexas relações entre o Estado e os contribuintes no que diz respeito aos diversos tipos de tributos, tais como impostos (como IR, IPTU, ITCMD), taxas, contribuições (como PIS, COFINS) e contribuições de melhoria.</p>
    <p>Em nosso escritório, atuamos especialmente na recuperação de créditos tributários dos nossos clientes. Isso inclui um trabalho preciso de identificação, revisão e, quando cabível, a compensação ou restituição de tributos pagos a mais ou de maneira indevida.</p>
    <p>Nossa equipe especializada utiliza estratégias jurídicas eficientes para garantir que nossos clientes obtenham o máximo proveito das oportunidades legais disponíveis, proporcionando alívio fiscal e justiça tributária.</p>
    <p>Estamos preparados para analisar cuidadosamente cada caso, oferecendo suporte técnico e jurídico desde a identificação inicial dos créditos até a sua efetiva recuperação, seja por meio de processos administrativos ou judiciais.</p>
    <p>Nosso compromisso é assegurar que cada cliente receba o tratamento personalizado e a atenção necessária para resolver suas questões tributárias de forma eficaz e satisfatória.</p>
    <p>Entre em contato conosco para agendar uma consulta inicial. Descubra como vamos ajudar você ou sua empresa a otimizar sua situação fiscal e recuperar eventuais valores pagos a mais, fortalecendo assim sua posição financeira e legal no mercado.</p>
    `,
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Direito do consumidor",
    description:
      "Somos especializados em proporcionar soluções ágeis e satisfatórias tanto para pessoas físicas quanto para pessoas jurídicas.",
    content: `
      <p>O Direito do Consumidor visa coordenar as relações de consumo. Desde o nascimento, todos nós inseridos na sociedade estabelecemos relações regidas pelo direito consumerista.</p>
      <p>Somos especializados em proporcionar soluções ágeis e satisfatórias tanto para pessoas físicas quanto para pessoas jurídicas.</p>
      <p>Para pessoas físicas, acompanhamos o cliente desde as soluções extrajudiciais, buscando sempre a melhor maneira de proteger seus direitos e interesses.</p>
      <p>Para pessoas jurídicas, oferecemos soluções que garantem a satisfação do consumidor. Trabalhamos para resolver questões de forma eficiente, ajudando a evitar litígios judiciais e a manter a boa reputação da empresa, mitigando prejuízos financeiros.</p>
      <p>Estamos à disposição para oferecer consultoria especializada e representação legal, assegurando que todas as partes envolvidas estejam devidamente protegidas e satisfeitas com os resultados. Entre em contato e descubra como podemos ajudar você ou a sua empresa.</p>
      `,
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Direito empresarial",
    description:
      "Nosso escritório, trabalha no direito empresarial estratégico e preventivo, trazendo todos os meses economia e tranquilidade para as empresas assistidas por nós.",
    content: `
    <p>Direito Empresarial é o ramo do direito privado que regula a atividade econômica relacionada ao fornecimento de bens e serviços.</p>
    <p>Nosso escritório trabalha no direito empresarial estratégico e preventivo, trazendo economia e tranquilidade mensalmente para as empresas assistidas por nós.</p>
    <p>Nossos serviços incluem gestão de riscos empresariais, revisão e elaboração de contratos, aconselhamento jurídico empresarial, conformidade regulatória e condução de negociações e acordos.</p>
    <p>Através de consultoria jurídica especializada, realização de due diligence, implementação de estratégias para redução de perdas financeiras e proteção patrimonial, proporcionamos segurança jurídica e eficiência operacional à sua empresa. Nosso compromisso é com um atendimento personalizado, onde cada cliente recebe soluções ágeis e adaptadas às suas necessidades específicas.</p>
    <p>Além disso, estamos preparados para acompanhar nossos clientes em todas as etapas do seu desenvolvimento empresarial, desde a constituição e estruturação inicial até questões mais complexas de governança corporativa e transações comerciais estratégicas.</p>
    <p>Agende sua consulta para descobrirmos como podemos ajudar sua empresa a alcançar seus objetivos de forma segura e eficaz no campo do direito empresarial.</p>
    `,
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Direito Civil",
    description:
      "Em nosso escritório, focamos no Direito Civil tanto no âmbito contencioso quanto consultivo, oferecendo soluções personalizadas para cada cliente.",
    content: `
      <p>Direito Civil é o ramo do direito privado que abrange as normas relacionadas à interação entre os sujeitos de direito em suas relações patrimoniais, familiares e obrigacionais.</p>
      <p>Em nosso escritório, focamos no Direito Civil tanto no âmbito contencioso quanto consultivo, oferecendo soluções personalizadas para cada cliente.</p>
      <p>Nos casos contenciosos, representamos nossos clientes em litígios judiciais, buscando proteger seus direitos e interesses. Na consultoria jurídica, fornecemos orientação estratégica para prevenir litígios, resolver questões contratuais, familiares e patrimoniais de maneira eficaz.</p>
      <p>Nosso objetivo é garantir a segurança jurídica e a satisfação de nossos clientes, proporcionando atendimento individualizado e soluções jurídicas adaptadas às necessidades específicas de cada situação.</p>
      `,
  },
];

export function Services() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: "#areas-de-atuacao",
      })
      .from("#areas-de-atuacao h2", {
        opacity: 0,
        ease: "power1.inOut",
      })
      .from("#areas-de-atuacao .desc", {
        opacity: 0,
        y: 8,
        ease: "power1.inOut",
      })
      .from("#areas-de-atuacao .swiper-slide", {
        duration: 1,
        opacity: 0,
        y: 16,
        ease: "back.inOut",
      })
      .from("#areas-de-atuacao button", {
        opacity: 0,
        y: 16,
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

        <p className="desc mx-auto mt-4 max-w-2xl text-center text-green-500">
          Com uma equipe de advogados altamente especializados, oferecemos
          soluções jurídicas abrangentes e personalizadas
        </p>

        <div className="relative mt-8 lg:mx-8 2xl:mx-0">
          <Swiper
            spaceBetween={16}
            speed={750}
            loop
            modules={[Navigation]}
            navigation={{
              prevEl: "[data-prev='services']",
              nextEl: "[data-next='services']",
              lockClass: "hidden",
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
            {cards.map((card, index) => (
              <SwiperSlide className="group/slide" key={index}>
                <Card
                  thumb={card.thumb}
                  title={card.title}
                  description={card.description}
                  content={card.content}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-between gap-4">
            <button
              aria-label="Serviço Anterior"
              data-prev="services"
              className="left-0 top-1/2 z-10 -mt-6 box-content grid h-12 w-12 place-items-center rounded-full border-8 border-beige-500 bg-white lg:absolute lg:-mt-0 lg:h-16 lg:w-16 lg:-translate-x-1/2 lg:-translate-y-1/2"
            >
              <CaretLeft className="h-10 w-10 text-green-500" />
            </button>

            <button
              aria-label="Próximo Serviço"
              data-next="services"
              className="right-0 top-1/2 z-10 -mt-6 box-content grid h-12 w-12 place-items-center rounded-full border-8 border-beige-500 bg-white lg:absolute lg:-mt-0 lg:h-16 lg:w-16 lg:-translate-y-1/2 lg:translate-x-1/2"
            >
              <CaretRight className="h-10 w-10 text-green-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
