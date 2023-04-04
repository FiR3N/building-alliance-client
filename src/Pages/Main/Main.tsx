import { FC } from "react";
import cls from "./Main.module.scss";
import slider2 from "../../assets/img/slider2.jpg";
import classNames from "classnames";
interface MainProps {}

const Main: FC<MainProps> = () => {
  return (
    <div className={classNames(cls.main)}>
      <img src={slider2} />
    </div>
  );
};

export default Main;
