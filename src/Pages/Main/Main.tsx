import { FC } from "react";
import cls from "./Main.module.scss";
import slider1 from "../../assets/img/slider1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/effect-fade";
import classNames from "classnames";
interface MainProps {}

const Main: FC<MainProps> = () => {
  return (
    <div className={classNames(cls.main)}>
      <img src={slider1} />
    </div>
  );
};

export default Main;
