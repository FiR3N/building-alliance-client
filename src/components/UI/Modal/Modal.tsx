import React, {
  FC,
  SetStateAction,
  Dispatch,
  ReactNode,
  useLayoutEffect,
} from "react";
import ReactDOM from "react-dom";
import cls from "./Modal.module.scss";

interface ModalProps {
  children: ReactNode;
  state: boolean;
  closeMethod: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ children, state, closeMethod }) => {
  const modalRoot = document.getElementById("modal-root") as Element;

  useLayoutEffect(() => {
    document.querySelector("body")?.classList.add("_noscroll");

    return () => document.querySelector("body")?.classList.remove("_noscroll");
  }, []);

  const closeOnBgHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget != e.target) return;
    closeMethod(false);
  };
  const closeOnButHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    closeMethod(false);
  };

  return ReactDOM.createPortal(
    <div className={cls.myModal} onClick={closeOnBgHandler}>
      <div className={cls.myModalContent}>
        <div className={cls.myModalCloseBut} onClick={closeOnButHandler}>
          <span className={cls.bar}></span>
          <span className={cls.bar}></span>
        </div>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
