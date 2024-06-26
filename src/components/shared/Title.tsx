import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Title = ({ children }: Props) => {
  return <h2 className="text-white font-bold text-2xl mb-8">{children}</h2>;
};

export default Title;
