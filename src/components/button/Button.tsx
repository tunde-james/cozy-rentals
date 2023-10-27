import { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  className: string;
  children: React.ReactNode;
};

function Button({ children, className, ...delegated }: Props) {
  return (
    <button
      className={`bg-brand-light px-3 py-2 capitalize text-white ${className}`}
      {...delegated}
    >
      {children}
    </button>
  );
}

export default Button;
