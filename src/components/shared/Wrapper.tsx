import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: Props) => {
  return (
    <div className={cn("w-full max-w-6xl px-5 mx-auto", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
