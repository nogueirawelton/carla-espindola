import { ComponentProps, ReactNode } from "react";

interface CardProps extends ComponentProps<"div"> {
  icon: ReactNode;
  title: string;
  description: string;
}

export function Card({ icon, title, description, ...props }: CardProps) {
  return (
    <div
      className="card flex-1 rounded-sm bg-beige-500 p-6 transition-all duration-500 md:h-[375px] lg:data-[extended=true]:flex-[1.2]"
      {...props}
    >
      <span className="grid h-16 w-16 place-items-center rounded-full bg-black text-3xl text-beige-500">
        {icon}
      </span>

      <strong className="mt-4 block max-w-[200px] text-xl text-green-500">
        {title}
      </strong>

      <p className="mt-2 text-sm text-green-500">{description}</p>
    </div>
  );
}
