import { FC } from "react";
import cls from "./AdvantagesBlock.module.scss";
import adv1 from "../../../assets/img/adv1.png";
import adv2 from "../../../assets/img/adv2.png";
import adv3 from "../../../assets/img/adv3.png";
import adv4 from "../../../assets/img/adv4.png";
import classNames from "classnames";

const AdvantagesBlock: FC = () => {
  return (
    <div className={classNames(cls.advantagesBlock, "container")}>
      <div className={cls.advantagesBlockItem}>
        <img src={adv1} alt="adv1" />
        <p className="bold-title-text">Работы</p>
        <p className="default-text">
          Качественно выполняем работы по строительству объектов
          первого-четвертого классов сложности
        </p>
      </div>
      <div className={cls.advantagesBlockItem}>
        <img src={adv2} alt="adv2" />
        <p className="bold-title-text">Конструкции</p>
        <p className="default-text">
          Качество выполняемых работ не вызывает претензий со стороны заказчиков
          и инспекций
        </p>
      </div>
      <div className={cls.advantagesBlockItem}>
        <img src={adv3} alt="adv3" />
        <p className="bold-title-text">Процесс</p>
        <p className="default-text">
          Все участники строительства работают организовано и четко
        </p>
      </div>
      <div className={cls.advantagesBlockItem}>
        <img src={adv4} alt="adv4" />
        <p className="bold-title-text">Технологии</p>
        <p className="default-text">
          Используем эффективные технологии, строительные машины и механизмы
        </p>
      </div>
    </div>
  );
};

export default AdvantagesBlock;
