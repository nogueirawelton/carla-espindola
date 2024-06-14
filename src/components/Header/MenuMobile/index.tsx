import * as Dialog from "@radix-ui/react-dialog";
import { List, X } from "phosphor-react";
import { Menu } from "./Menu";
import { MouseEvent, useState } from "react";

interface MenuMobileProps {
  scrollToSection: (e: MouseEvent) => void;
}

export function MenuMobile({ scrollToSection }: MenuMobileProps) {
  const [open, setOpen] = useState(false);

  function handleClick(e: MouseEvent) {
    setOpen(false);
    scrollToSection(e);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          aria-label="Abrir menu"
          className="grid h-10 w-10 place-items-center rounded-[1px] text-white lg:hidden"
        >
          <List className="h-7 w-7" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Content className="data-[state=open]:animate-menu fixed inset-0 top-0 z-50 flex flex-col bg-beige-500 lg:hidden">
          <div className="flex h-24 items-center justify-end px-4 md:px-8">
            <Dialog.Trigger asChild>
              <button
                aria-label="Fechar menu"
                className="grid h-10 w-10 place-items-center rounded-[1px] text-green-500"
              >
                <X className="h-7 w-7" />
              </button>
            </Dialog.Trigger>
          </div>

          <div className="pt-32">
            <img
              src="/img/icon-green.svg"
              alt=""
              width={80}
              height={55}
              loading="lazy"
              className="mx-auto"
            />

            <Menu>
              <a
                href="#inicio"
                onClick={handleClick}
                className="grid h-12 place-items-center px-8"
              >
                Início
              </a>

              <a
                href="#areas-de-atuacao"
                onClick={handleClick}
                className="grid h-12 place-items-center px-8"
              >
                Áreas de Atuação
              </a>

              <a
                href="#sobre"
                onClick={handleClick}
                className="grid h-12 place-items-center px-8"
              >
                Sobre
              </a>

              <a
                href="#contato"
                onClick={handleClick}
                className="grid h-12 place-items-center px-8"
              >
                Contato
              </a>
            </Menu>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
