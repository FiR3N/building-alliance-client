import { FC } from "react";
import cls from "./MyInput.module.scss";
import { FieldError } from "react-hook-form";
import classNames from "classnames";

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  error?: FieldError | undefined;
  labelTitle?: string;
}

const MyInput: FC<MyInputProps> = ({
  error,
  register,
  labelTitle,
  ...props
}) => {
  return (
    <label className={cls.formItem}>
      {labelTitle && labelTitle}
      {error && (
        <p
          className={classNames(
            labelTitle && cls.errorWithLabel,
            cls.error,
            "error-text"
          )}
        >
          {error?.message}
        </p>
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
