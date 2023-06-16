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
import WorksCountBlock from "../../components/Blocks/WorksCountBlock/WorksCountBlock";
import PartnersBlock from "../../components/Blocks/PartnersBlock/PartnersBlock";
import AnimatedBlock from "../../components/UI/AnimatedBlock/AnimatedBlock";

import cls from "./Main.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import slider1 from "../../assets/img/slider1.jpg";
import slider2 from "../../assets/img/p-106-img2.jpg";
import slider3 from "../../assets/img/duw4-img4.jpg";
import office from "../../assets/img/office.jpg";
import aboveServiceImage_1 from "../../assets/img/aboveServiceImage-1.jpg";
import aboveServiceImage_2 from "../../assets/img/aboveService-2.webp";
import experts from "../../assets/img/experts.png";
import emergency from "../../assets/img/emergency.png";
import analytics from "../../assets/img/analytics.png";
import mainInfoAboutBg from "../../assets/img/main-about-bg.webp";

const Main: FC = () => {
  return (
    <div className={classNames(cls.main)}>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
        allowTouchMove={false}
        pagination={{ el: cls.swiperPagination, clickable: true }}
        effect="fade"
        speed={1500}
        className={cls.swiperContainer}
      >
        <SwiperSlide className={cls.swiperItem}>
          <img src={slider1} />
          <div className={classNames(cls.mainTitle)}>
            <h2>Строим будущее</h2>
            <h1>Создаем комфорт</h1>
            <p className="default-text">
              Доверьте свой проект опытным профессионалам: гарантированное
              качество и соблюдение сроков строительства!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={cls.swiperItem}>
          <img src={slider2} />
          <div className={classNames(cls.mainTitle)}>
            <h2>Качество превыше всего</h2>
            <h1>Доверие в каждом кирпиче</h1>
            <p className="default-text">
              Доверьте свой проект опытным профессионалам: гарантированное
              качество и соблюдение сроков строительства!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={cls.swiperItem}>
          <img src={slider3} />
          <div className={classNames(cls.mainTitle)}>
            <h2>Точность и скорость</h2>
            <h1>Строим с умом</h1>

            <p className="default-text">
              Доверьте свой проект опытным профессионалам: гарантированное
              качество и соблюдение сроков строительства!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <AnimatedBlock>
        <AdvantagesBlock />
      </AnimatedBlock>
      <AnimatedBlock>
        <div className={classNames(cls.mainLeaders, "container")}>
          <div className={cls.mainLeadersText}>
            <h2>Лидерство и качество в строительстве</h2>
            <p className="default-text">
              Наша организация неоднократно признавалась победителем в конкурсе
              на лучшее достижение в строительной отрасли Республики Беларусь в
              номинации «Предприятие года» в категории Субподрядные организации,
              а руководитель организации неоднократно признавался победителем в
              номинации «Руководитель года» в категории Субподрядные организации
              численностью более 300 человек.
            </p>
            <p className="default-text">
              {" "}
              Производство работ на всех объектах отмечено хорошей организацией
              и четким взаимодействием всех участников строительства. Все
              выполняемые работы соответствуют требованиям проектно-сметной
              документации и требованиям технических нормативно-правовых актов в
              строительстве.{" "}
            </p>
            <p className="default-text">
              Качество выполняемых работ не вызывает претензий со стороны
              Заказчиков и инспекции Департамента контроля и надзора за
              строительством.
            </p>
          </div>
          <img
            src={office}
            alt="ОАО Спецстроймеханизация"
            className={cls.mainLeadersImage}
          />
        </div>
      </AnimatedBlock>
      <AnimatedBlock>
        <div className={cls.mainServices}>
          <h2>Усгуги организации</h2>
          <ServiceList limitProp={3} />
          <Link to={"/services"}>
            <MyButton>Больше услуг</MyButton>
          </Link>
        </div>
      </AnimatedBlock>
      <div className={cls.mainAboveServices}>
        <div className={cls.mainAboveServicesItem}>
          <img
            src={aboveServiceImage_1}
            alt="building-1"
            className={cls.mainAboveServicesItemImage}
          />
          <AnimatedBlock startTranslateFrom={20}>
            <div className={cls.mainAboveServicesItemText}>
              <p className="default-big-text">
                Спецстроймеханизация готова реализовать
              </p>
              <h2>Ваш проект</h2>
              <p className="default-text">
                Благодаря нашим организаторским способностям реализованы многие
                масштабные проекты, а правильно выстроенные производственные
                доверительные отношения позволяют эффективно выполнять новые
                задачи.
              </p>
            </div>
          </AnimatedBlock>
        </div>
        <div className={cls.mainAboveServicesItem}>
          <img
            src={aboveServiceImage_2}
            alt="building-2"
            className={cls.mainAboveServicesItemImage}
          />
          <AnimatedBlock startTranslateFrom={20}>
            <div className={cls.mainAboveServicesItemText}>
              <p className="default-big-text">Спецстроймеханизация лидер по</p>
              <h2>Постройкам</h2>
              <p className="default-text">
                Сегодня ОАО «Спецстроймеханизация» - одно из ведущих
                строительных предприятий города Молодечно, чей вклад в развитие
                строительной отрасли страны неоспорим уже многие десятилетия.
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </div>

      <AnimatedBlock>
        <div className={cls.mainWorks}>
          <h2>Последние работы</h2>
          <OurWorksList limitProp={3} />
          <Link to={"/our-works"}>
            <MyButton>Больше работ</MyButton>
          </Link>
        </div>
      </AnimatedBlock>
      <AnimatedBlock isAbove>
        <div className={classNames(cls.mainAboveInfoAbout, "container")}>
          <div className={cls.mainAboveInfoAboutItem}>
            <img
              src={experts}
              alt="эксперты"
              className={cls.mainAboveInfoAboutItemImage}
            />
            <div className={cls.mainAboveInfoAboutItemText}>
              <h5>Профессионализм</h5>
              <p className="default-text">
                Мы команда специалистов, готовых реализовать любые строительные
                задачи.
              </p>
            </div>
          </div>
          <div className={classNames(cls.mainAboveInfoAboutItem, cls.orange)}>
            <img
              src={analytics}
              alt="качество"
              className={cls.mainAboveInfoAboutItemImage}
            />
            <div className={cls.mainAboveInfoAboutItemText}>
              <h5>Качество работы</h5>
              <p className="default-text">
                Мы стремимся к безупречности в каждой детали и всегда
                гарантируем высокое качество наших работ
              </p>
            </div>
          </div>
          <div className={classNames(cls.mainAboveInfoAboutItem, cls.black)}>
            <img
              src={emergency}
              alt="стройка"
              className={cls.mainAboveInfoAboutItemImage}
            />
            <div className={cls.mainAboveInfoAboutItemText}>
              <h5>Сотрудничество</h5>
              <p className="default-text">
                Благодаря тесном сотрудничестве с клиентами мы легко воплащаем
                постовленные идеи в реальность.
              </p>
            </div>
          </div>
        </div>
      </AnimatedBlock>

      <div className={cls.mainInfoAbout}>
        <img src={mainInfoAboutBg} alt="maininfobg" />
        <div className={classNames(cls.mainInfoAboutContent, "container")}>
          <AnimatedBlock>
            <p className="big-default-text">Большой опыт для</p>
            <h2>Строительства и Реконструкций</h2>
            <Link to={"/history"}>
              <MyButton>Наша история</MyButton>
            </Link>
          </AnimatedBlock>
        </div>
      </div>

      <AnimatedBlock>
        <WorksCountBlock />
      </AnimatedBlock>
      <AnimatedBlock>
        <div className={cls.mainNews}>
          <h2>Новости организации</h2>
          <NewsList limitProp={3} isFull={false} />
          <Link to={"/news"}>
            <MyButton>Больше новостей</MyButton>
          </Link>
        </div>
      </AnimatedBlock>
      <AnimatedBlock>
        <PartnersBlock />
      </AnimatedBlock>
      <AboutOurWork />
    </div>
  );
};

export default Main;
