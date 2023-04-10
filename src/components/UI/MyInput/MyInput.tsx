import { FC } from "react";
import cls from "./MyInput.module.scss";
import { FieldError } from "react-hook-form";
import classNames from "classnames";

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: any;
  error: FieldError | undefined;
}

const MyInput: FC<MyInputProps> = ({ error, register, ...props }) => {
  return (
    <label className={cls.formItem}>
      {error && (
        <p className={classNames(cls.error, "error-text")}>{error?.message}</p>
      )}
      <input
        className={classNames(cls.myInput, error && cls.myInputError)}
        {...register}
        {...props}
      />
    </label>
  );
};

export default MyInput;
