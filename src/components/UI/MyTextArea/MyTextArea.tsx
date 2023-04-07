import { FC } from "react";
import cls from "./MyTextArea.module.scss";
import { FieldError } from "react-hook-form";

interface MyTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: any;
  error: FieldError | undefined;
}
const MyTextArea: FC<MyTextAreaProps> = ({ error, register, ...props }) => {
  return (
    <>
      {error && <p className="error-text">{error?.message}</p>}
      <textarea className={cls.myTextArea} {...props} />
    </>
  );
};

export default MyTextArea;
