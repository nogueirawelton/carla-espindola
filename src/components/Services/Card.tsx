import { ArrowRight, X } from "phosphor-react";
import { tv } from "tailwind-variants";
import * as Dialog from "@radix-ui/react-dialog";
interface CardProps {
  thumb: string;
  title: string;
  description: string;
  content: string;
}

export function Card(props: CardProps) {
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
    <Dialog.Root modal>
      <Dialog.Trigger className="group relative h-[320px] w-full overflow-hidden rounded-sm md:h-[480px] lg:h-[550px]">
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

          <span className={cta({ ua: isMobile ? "mobile" : "desktop" })}>
            Saiba mais
            <ArrowRight className="h-6 w-6" />
          </span>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-[#222222]/40" />

        <Dialog.Content className="data-[state=open]:animate-item fixed left-1/2 top-1/2 z-40 flex h-[95%] max-h-[480px] w-[95%] max-w-[720px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-sm bg-white">
          <div className="flex items-center justify-between px-4 pt-4 lg:px-8 lg:pt-8">
            <Dialog.Title className="text-xl font-medium text-green-500 lg:text-2xl">
              {props.title}
            </Dialog.Title>

            <Dialog.Close>
              <X className="h-8 w-8 text-green-500" />
            </Dialog.Close>
          </div>

          <div
            className="scrollbar- scrollbar-thumb-green-500 scrollbar-track-zinc-200 scrollbar-thin mt-4 flex flex-1 flex-col gap-4 overflow-auto px-4 pb-4 lg:px-8 lg:pb-8"
            dangerouslySetInnerHTML={{
              __html: props.content,
            }}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
