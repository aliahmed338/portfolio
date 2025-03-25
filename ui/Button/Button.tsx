import { ReactNode, ButtonHTMLAttributes } from "react";
import "./Button.css";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
}
