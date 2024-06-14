import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface SmootherProviderProps {
  smoother: ScrollSmoother | undefined;
  scroll: (hash: string) => void;
}

const SmootherContext = createContext<SmootherProviderProps>(
  {} as SmootherProviderProps,
);

export function SmootherProvider({ children }: { children: ReactNode }) {
  const [smoother, setSmoother] = useState<ScrollSmoother>();
  const hash = location.hash;

  function scroll(hash: string) {
    const element: HTMLElement | null = document.querySelector(hash);

    if (element) {
      history.pushState(null, "", hash);
      smoother?.scrollTo(element.offsetTop - 96, true);
    }
  }

  if (smoother && hash) {
    setTimeout(() => {
      scroll(hash);
    }, 2000);
  }

  useEffect(() => {
    if (!smoother) {
      setSmoother(
        ScrollSmoother.create({
          smooth: 0.75,
          effects: true,
          smoothTouch: 0.1,
        }),
      );
    }
  }, []);

  return (
    <SmootherContext.Provider
      value={{
        smoother,
        scroll,
      }}
    >
      {children}
    </SmootherContext.Provider>
  );
}

export function useSmoother() {
  return useContext(SmootherContext);
}
