import { FC } from "react";
import cls from "./MyInput.module.scss";
import { FieldError } from "react-hook-form";

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: any;
  error: FieldError | undefined;
}

const MyInput: FC<MyInputProps> = ({ error, register, ...props }) => {
  return (
    <>
      {error && <p className="error-text">{error?.message}</p>}
      <input className={cls.myInput} {...register} {...props} />
    </>
  );
};

export default MyInput;
