import { FC } from "react";
import classNames from "classnames";
import { Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import NewsList from "../../components/Business/NewsList/NewsList";
import MyButton from "../../components/UI/MyButton/MyButton";
import { Link } from "react-router-dom";
import OurWorksList from "../../components/Business/OurWorksList/OurWorksList";
import ServiceList from "../../components/Business/ServiceList/ServiceList";
import AboutOurWork from "../../components/Blocks/AboutOurWork/AboutOurWork";
import AdvantagesBlock from "../../components/Blocks/AdvantagesBlock/AdvantagesBlock";

import cls from "./Main.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import slider1 from "../../assets/img/slider1.jpg";
import slider2 from "../../assets/img/slider2.jpg";
import recon from "../../assets/img/recon.jpg";
import mainInfoAboutBg from "../../assets/img/main-about-bg.webp";
import WorksCountBlock from "../../components/Blocks/WorksCountBlock/WorksCountBlock";

const Main: FC = () => {
  return (
    <div className={classNames(cls.main)}>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
        navigation
        pagination={{ el: cls.swiperPagination, clickable: true }}
        effect="fade"
        speed={1500}
        className={cls.swiperContainer}
      >
        <SwiperSlide className={cls.swiperItem}>
          <img src={slider1} />
        </SwiperSlide>
        <SwiperSlide className={cls.swiperItem}>
          <img src={slider2} />
        </SwiperSlide>
        <SwiperSlide className={cls.swiperItem}>
          <img src={recon} />
        </SwiperSlide>
      </Swiper>
      <div className={classNames(cls.mainTitle, "container")}>
        <h2>Желаете профессиональную и качественную работу в срок?</h2>
        <p className="default-text">
          Доверьте свой проект опытным профессионалам: гарантированное качество
          и соблюдение сроков строительства!
        </p>
      </div>
      <AdvantagesBlock />
      <div className={cls.mainServices}>
        <h2>Усгуги организации</h2>
        <ServiceList limitProp={3} />
        <Link to={"/services"}>
          <MyButton>Больше услуг</MyButton>
        </Link>
      </div>
      <div className={cls.mainInfoAbout}>
        <img src={mainInfoAboutBg} alt="maininfobg" />
        <div className={classNames(cls.mainInfoAboutContent, "container")}>
          <p className="big-default-text">Большой опыт для</p>
          <h2>Строительства и Реконструкций</h2>
          <Link to={"/about-us"}>
            <MyButton>Больше о нас</MyButton>
          </Link>
        </div>
      </div>
      <div className={cls.mainWorks}>
        <h2>Последние работы</h2>
        <OurWorksList limitProp={3} />
        <Link to={"/our-works"}>
          <MyButton>Больше работ</MyButton>
        </Link>
      </div>
      <WorksCountBlock />
      <div className={cls.mainNews}>
        <h2>Новости организации</h2>
        <NewsList limitProp={3} isFull={false} />
        <Link to={"/news"}>
          <MyButton>Больше новостей</MyButton>
        </Link>
      </div>
      <AboutOurWork />
    </div>
  );
};

export default Main;
