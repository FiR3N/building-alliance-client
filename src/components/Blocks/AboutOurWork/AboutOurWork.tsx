import { FC } from "react";
import cls from "./AboutOurWork.module.scss";
import aboutOurWorkBg from "../../../assets/img/about-our-work-bg.jpg";
import classNames from "classnames";

const AboutOurWork: FC = () => {
  return (
    <div className={cls.aboutOurWork}>
      <img className={cls.aboutOurWorkBg} src={aboutOurWorkBg} alt="bg" />
      <div className={classNames(cls.aboutOurWorkContent, "container")}>
        <p className={"default-text"}>
          Наша организация с ответственностью подходит к каждому проекту.
          Благодаря совершенствованию и контролю каждого отдельного шага мы
          обеспечиваем наивысшее качество работ.
        </p>
      </div>
    </div>
  );
};

export default AboutOurWork;
