import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-purple-500
        hover:shadow-[0_0_30px_rgba(145,94,255,0.3)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}