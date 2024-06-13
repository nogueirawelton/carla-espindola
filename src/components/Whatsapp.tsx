import { WhatsappLogo } from "phosphor-react";

export function Whatsapp() {
  return (
    <a
      href="#"
      className="bg-green-whatsapp fixed bottom-4 right-4 grid h-14 w-14 place-items-center rounded-full lg:h-16 lg:w-16"
    >
      <WhatsappLogo className="h-8 w-8 text-white" />
    </a>
  );
}
