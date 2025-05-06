import { ReactNode, ButtonHTMLAttributes } from "react";
import style from "./Button.module.css";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button className={style.btn} {...props}>
      {children}
    </button>
  );
}
