import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import cls from "./MySelect.module.scss";
import dropDownImage from "../../../assets/img/drop-down.png";
import classNames from "classnames";
import { Control, FieldError, FormState } from "react-hook-form";
import IUserForm from "../../../models/Forms/IUserForm";

interface ArrayForSelect {
  id: number;
  content: string;
}

interface MySelectProps {
  name: string;
  array: ArrayForSelect[];
  selectedItem: ArrayForSelect | null;
  setSelectedItem: Dispatch<SetStateAction<ArrayForSelect | null>>;
  labelTitle?: string;
  control?: Control<IUserForm>;
  rules?: Record<string, unknown>;
  error?: FieldError;
  formName?: string;
}

const MySelect: FC<MySelectProps> = ({
  name,
  array,
  selectedItem,
  setSelectedItem,
  labelTitle,
  control,
  rules,
  error,
  formName,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    control?.register(formName as keyof IUserForm, rules);
  }, [control, formName, rules]);

  return (
    <label>
      {labelTitle}
      {error && (
        <p
          className={classNames(
            labelTitle && cls.errorWithLabel,
            cls.error,
            "error-text"
          )}
        >
          {error.message as React.ReactNode}
        </p>
      )}

      <div className={cls.mySelect} onClick={() => setIsOpen((prev) => !prev)}>
        <p
          className={classNames(
            cls.mySelectName,
            isOpen && cls._active,
            "default-text"
            // error && cls.mySelectNameError
          )}
        >
          {selectedItem ? selectedItem.content : name}
          <img src={dropDownImage} alt="drop-down" />
        </p>
        <div className={classNames(cls.mySelectContent, isOpen && cls._active)}>
          {array.map((item) => (
            <p
              className={classNames(cls.mySelectItem, "default-text")}
              onClick={() => setSelectedItem(item)}
              key={item.id}
            >
              {item.content}
            </p>
          ))}
        </div>
      </div>
      {/* <div className={cls.mySelect} onClick={() => setIsOpen((prev) => !prev)}>
        <p
          className={classNames(
            cls.mySelectName,
            isOpen && cls._active,
            "default-text"
            // error && cls.mySelectNameError
          )}
        >
          {selectedItem ? selectedItem.content : name}
          <img src={dropDownImage} alt="drop-down" />
        </p>
        <div className={classNames(cls.mySelectContent, isOpen && cls._active)}>
          {array.map((item) => (
            <p
              className={classNames(cls.mySelectItem, "default-text")}
              onClick={() => setSelectedItem(item)}
              key={item.id}
            >
              {item.content}
            </p>
          ))}
        </div>
      </div> */}
    </label>
  );
};

export default MySelect;
