import { ArrowRight } from "phosphor-react";
import { tv } from "tailwind-variants";
import { useSmoother } from "../../hooks/useSmoother";

interface CardProps {
  thumb: string;
  title: string;
  description: string;
}

export function Card(props: CardProps) {
  const { scroll } = useSmoother();

  const isMobile = navigator.userAgent.includes("Mobile");

  const card = tv({
    base: "absolute bottom-0 left-0 z-10 grid h-16 w-full place-items-center bg-green-500/50 px-6 transition-all duration-500",
    variants: {
      ua: {
        desktop: "group-hover:h-full",
        mobile: "group-[&.swiper-slide-active]/slide:h-full",
      },
    },
  });

  const title = tv({
    base: "grid h-16 place-items-center font-normal uppercase text-beige-500 transition-all duration-500",
    variants: {
      ua: {
        desktop: "group-hover:text-xl group-hover:font-medium",
        mobile:
          "group-[&.swiper-slide-active]/slide:text-xl group-[&.swiper-slide-active]/slide:font-medium",
      },
    },
  });

  const description = tv({
    base: "text-center text-sm text-beige-500 opacity-0 transition-all duration-500",
    variants: {
      ua: {
        desktop: "group-hover:opacity-100",
        mobile: "group-[&.swiper-slide-active]/slide:opacity-100",
      },
    },
  });

  const cta = tv({
    base: "absolute left-1/2 -translate-x-1/2 bottom-4 lg:left-auto lg:-translate-x-0 lg:right-4 flex items-center gap-2 uppercase text-beige-500 opacity-0 transition-opacity duration-500",
    variants: {
      ua: {
        desktop: "group-hover:opacity-100",
        mobile: "group-[&.swiper-slide-active]/slide:opacity-100",
      },
    },
  });

  return (
    <div className="group relative h-[320px] overflow-hidden rounded-sm md:h-[480px] lg:h-[550px]">
      <img
        src={props.thumb}
        alt={props.title}
        className="h-full w-full object-cover"
        height={320}
        width={425}
        loading="lazy"
      />

      <div className={card({ ua: isMobile ? "mobile" : "desktop" })}>
        <div className="flex flex-col items-center">
          <strong className={title({ ua: isMobile ? "mobile" : "desktop" })}>
            {props.title}
          </strong>

          <p
            className={description({
              ua: isMobile ? "mobile" : "desktop",
            })}
          >
            {props.description}
          </p>
        </div>

        <a
          href="#contato"
          className={cta({ ua: isMobile ? "mobile" : "desktop" })}
          onClick={(e) => {
            e.preventDefault();
            scroll(e.currentTarget.getAttribute("href")!);
          }}
        >
          Saiba mais
          <ArrowRight className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
