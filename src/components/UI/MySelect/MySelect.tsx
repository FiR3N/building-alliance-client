import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import cls from "./MySelect.module.scss";
import dropDownImage from "../../../assets/img/drop-down.png";
import classNames from "classnames";
import { Control, FieldError, FormState } from "react-hook-form";

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
  control?: Control<any>;
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
    control?.register(formName as any, rules);
  }, [control, formName, rules]);

  return (
    <label>
      <p>{labelTitle}</p>
      {error && (
        <p className={classNames(cls.error, "error-text")}>
          {error.message as React.ReactNode}
        </p>
      )}

      <div className={cls.mySelect} onClick={() => setIsOpen((prev) => !prev)}>
        <p
          className={classNames(
            cls.mySelectName,
            isOpen && cls._active,
            selectedItem && cls._selected,
            error && cls.mySelectNameError,
            "default-text"
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
    </label>
  );
};

export default MySelect;
