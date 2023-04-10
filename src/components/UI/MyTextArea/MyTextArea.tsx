import { FC } from "react";
import cls from "./MyTextArea.module.scss";
import { FieldError } from "react-hook-form";
import classNames from "classnames";

interface MyTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: any;
  error: FieldError | undefined;
}
const MyTextArea: FC<MyTextAreaProps> = ({ error, register, ...props }) => {
  return (
    <label className={cls.formItem}>
      {error && (
        <p className={classNames(cls.error, "error-text")}>{error?.message}</p>
      )}
      <textarea
        className={classNames(cls.myTextArea, error && cls.myTextAreaError)}
        {...register}
        {...props}
      />
    </label>
  );
};

export default MyTextArea;
