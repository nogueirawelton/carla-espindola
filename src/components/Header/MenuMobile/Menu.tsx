import gsap from "gsap";
import { ReactNode, useEffect } from "react";

export function Menu({ children }: { children: ReactNode }) {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".gsap-menu > *",
      {
        opacity: 0,
        y: 16,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power1.inOut",
      },
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <nav className="gsap-menu mt-4 flex flex-col items-center gap-2 text-lg font-medium text-green-500">
      {children}
    </nav>
  );
}
