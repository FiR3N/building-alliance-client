import { useEffect } from "react";
import { useState } from "react";
import cls from "./ToTheTopButton.module.scss";
import { AiOutlineArrowUp } from "react-icons/ai";
import MyButton from "../MyButton/MyButton";
import classNames from "classnames";

function ToTheTopButton() {
  const [isShowable, setIsShowable] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setIsShowable(true);
      } else {
        setIsShowable(false);
      }
    });
  }, []);

  const scrollToTheTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={classNames(cls.ToTheTopButton, isShowable && cls._active)}>
      <MyButton onClick={scrollToTheTop}>
        <AiOutlineArrowUp />
      </MyButton>
    </div>
  );
}

export default ToTheTopButton;
