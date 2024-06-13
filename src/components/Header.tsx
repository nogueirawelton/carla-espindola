import { List } from "phosphor-react";

export function Header() {
  return (
    <header className="fixed top-0 z-30 w-full py-6">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <a href="/">
          <img
            src="/img/logo.svg"
            alt="Logo"
            width={225}
            height={71}
            className="h-[50px] w-auto lg:h-[70px]"
          />
        </a>

        <nav className="hidden gap-12 text-white lg:flex">
          <a href="#">Início</a>
          <a href="#">Áreas de Atuação</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </nav>

        <button className="bg-beige-500 grid h-10 w-10 place-items-center rounded-[1px] text-green-500 lg:hidden">
          <List className="lh:w-8 h-6 w-6 lg:h-8" />
        </button>
      </div>
    </header>
  );
}
