import { ComponentProps, useEffect, useRef, useState } from "react";

export function Lazy({ children, ...props }: ComponentProps<"div">) {
  const [render, setRender] = useState(false);

  const container = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRender(true);
            observer.disconnect();
          }
        });
      },
      {
        root: null,
        threshold: 0,
      },
    );

    if (container.current) {
      observer.observe(container.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="map" ref={container} {...props}>
      {render && <>{children}</>}
    </div>
  );
}
