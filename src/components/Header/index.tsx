import { MouseEvent, useEffect, useState } from "react";
import { MenuMobile } from "./MenuMobile";
import { useSmoother } from "../../hooks/useSmoother";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scroll } = useSmoother();

  function scrollToSection(e: MouseEvent) {
    e.preventDefault();
    scroll(e.currentTarget.getAttribute("href")!);
  }

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className="group fixed top-0 z-30 w-full transition-colors duration-500 data-[scrolled=true]:bg-[rgba(0,0,0,0.4)] data-[scrolled=true]:backdrop-blur-sm"
    >
      <div className="mx-auto flex h-24 max-w-screen-2xl items-center justify-between px-4 md:px-8">
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
          <a href="#inicio" onClick={scrollToSection}>
            Início
          </a>
          <a href="#areas-de-atuacao" onClick={scrollToSection}>
            Áreas de Atuação
          </a>
          <a href="#sobre" onClick={scrollToSection}>
            Sobre
          </a>
          <a href="#contato" onClick={scrollToSection}>
            Contato
          </a>
        </nav>

        <MenuMobile scrollToSection={scrollToSection} />
      </div>
    </header>
  );
}
