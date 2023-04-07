import { FC } from "react";
import cls from "./MyButton.module.scss";

interface MyButtonProps {
  children: React.ReactNode;
}

const MyButton: FC<MyButtonProps> = ({ children, ...props }) => {
  return (
    <button className={cls.myButton} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
