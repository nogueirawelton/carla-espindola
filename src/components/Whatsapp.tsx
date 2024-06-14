import { WhatsappLogo } from "phosphor-react";

export function Whatsapp() {
  return (
    <a
      href="#"
      aria-label="Entrar em contato pelo whatsapp"
      className="fixed bottom-4 right-4 grid h-14 w-14 animate-bounce place-items-center rounded-full bg-green-whatsapp lg:h-16 lg:w-16"
    >
      {/* <span className="absolute right-0 top-0 grid h-5 w-5 place-items-center rounded-full bg-red-500 text-sm text-white">
        1
      </span> */}
      <WhatsappLogo className="h-8 w-8 text-white" />
    </a>
  );
}
