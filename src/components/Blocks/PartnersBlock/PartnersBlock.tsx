import { FC } from "react";
import cls from "./PartnersBlock.module.scss";
import partner1 from "../../../assets/img/partners_1.png";
import partner2 from "../../../assets/img/parters-2.png";
import partner3 from "../../../assets/img/partners-3.jpg";
import partner4 from "../../../assets/img/partners-4.jpg";
import classNames from "classnames";

const PartnersBlock: FC = () => {
  return (
    <div className={classNames(cls.partnersBlock, "container")}>
      <a
        className={cls.partnersBlockItem}
        href="https://president.gov.by/ru"
        target="_blank"
      >
        <img src={partner1} alt="Партнет" />
      </a>
      <a
        className={cls.partnersBlockItem}
        href="https://pravo.by/"
        target="_blank"
      >
        <img src={partner2} alt="Партнет" />
      </a>
      <a
        className={cls.partnersBlockItem}
        href="http://mas.gov.by/ru"
        target="_blank"
      >
        <img src={partner3} alt="Партнет" />
      </a>
      <a
        className={cls.partnersBlockItem}
        href="https://www.minsk-region.gov.by/"
        target="_blank"
      >
        <img src={partner4} alt="Партнет" />
      </a>
    </div>
  );
};

export default PartnersBlock;
