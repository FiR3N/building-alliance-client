import { FC, Dispatch, SetStateAction, useState } from "react";
import cls from "./MySelect.module.scss";
import dropDownImage from "../../../assets/img/drop-down.png";
import classNames from "classnames";
interface ArrayForSelect {
  id: number;
  content: string;
}

interface MySelectProps {
  name: string;
  array: ArrayForSelect[];
  selectedItem: ArrayForSelect | null;
  setSelectedItem: Dispatch<SetStateAction<ArrayForSelect | null>>;
  selectedId?: number;
  labelTitle?: string;
}

const MySelect: FC<MySelectProps> = ({
  name,
  array,
  selectedItem,
  setSelectedItem,
  selectedId,
  labelTitle,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [selectedItem, setSelectedItem] = useState<ArrayForSelect | null>(
  //   selectedId ? array.find((item) => item.id === selectedId) || null : null
  // );
  return (
    // <select className={cls.mySelect}>
    //   <option defaultChecked>{name}</option>
    //   {array.map((item) => (
    //     <option value={item.id}>{item.content}</option>
    //   ))}
    // </select>
    <label>
      {labelTitle}
      <div className={cls.mySelect} onClick={() => setIsOpen((prev) => !prev)}>
        <p
          className={classNames(
            cls.mySelectName,
            isOpen && cls._active,
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
