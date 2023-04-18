import { FC } from "react";
import cls from "../WorkProcess.module.scss";
import RedirectToContactBlock from "../../../components/UI/RedirectToContactBlock/RedirectToContactBlock";
import ourApproch from "../../../assets/img/our-approach.webp";
import research from "../../../assets/img/research.webp";
import environment from "../../../assets/img/environment.webp";
import modeling from "../../../assets/img/modelling.webp";
import collaboration from "../../../assets/img/collaboration.webp";
import technology from "../../../assets/img/technology.webp";
import classNames from "classnames";

interface WorkProcessContentProps {}

const WorkProcessContent: FC<WorkProcessContentProps> = () => {
  return (
    <div className={cls.workProcess}>
      <div className={cls.workProcessContent}>
        <div className={cls.workProcessItem}>
          <img
            className={cls.workProcessItemImage}
            src={ourApproch}
            alt="Наш подход"
          />
          <div className={cls.workProcessItemText}>
            <p className={cls.number}>01.</p>
            <h2>Наш подход</h2>
            <p className="default-text">
              Мы всегда начинаем с того, чтобы понять потребности и ожидания
              наших клиентов, а также определить их бюджетные и временные
              ограничения.
            </p>
            <p className="default-text">
              Наш подход к работе базируется на тесном взаимодействии с
              клиентом, чтобы обеспечить удовлетворение их потребностей и
              достижение их целей.
            </p>
          </div>
        </div>
        <div className={cls.workProcessItem}>
          <img
            className={cls.workProcessItemImage}
            src={research}
            alt="Исследование"
          />
          <div className={cls.workProcessItemText}>
            <p className={cls.number}>02.</p>
            <h2>Исследование</h2>
            <p className="default-text">
              Мы проводим тщательный анализ и исследование проекта, включая
              анализ местоположения, согласование документации, оценку рисков и
              другие необходимые шаги, чтобы обеспечить успешную реализацию
              проекта.
            </p>
          </div>
        </div>
        <div className={classNames(cls.workProcessItem, cls.reverse)}>
          <img
            className={cls.workProcessItemImage}
            src={environment}
            alt="Окружение"
          />
          <div className={cls.workProcessItemText}>
            <p className={cls.number}>03.</p>
            <h2>Окружение</h2>
            <p className="default-text">
              Мы учитываем факторы окружающей среды, такие как географическое
              расположение, климатические условия, экологические и социальные
              вопросы, чтобы обеспечить устойчивость и эффективность проекта.
            </p>
          </div>
        </div>
        <div className={classNames(cls.workProcessItem, cls.reverse)}>
          <img
            className={cls.workProcessItemImage}
            src={modeling}
            alt="Моделирование"
          />
          <div className={cls.workProcessItemText}>
            <p className={cls.number}>04.</p>
            <h2>Моделирование</h2>
            <p className="default-text">
              Мы используем передовые технологии и программное обеспечение для
              создания 3D-моделей и визуализации проекта, что позволяет нашим
              клиентам получить более полное представление о том, как будет
              выглядеть их будущий объект.
            </p>
          </div>
        </div>
        <div className={cls.workProcessItem}>
          <img
            className={cls.workProcessItemImage}
            src={collaboration}
            alt="Коллаборации"
          />
          <div className={cls.workProcessItemText}>
            <p className={cls.number}>05.</p>
            <h2>Сотрудничество</h2>
            <p className="default-text">
              Мы взаимодействуем с нашими клиентами на каждом этапе проекта,
              обеспечивая прозрачность и открытость в общении, а также учитывая
              их мнения и предпочтения.
            </p>
            <p className="default-text">
              Мы также сотрудничаем с другими специалистами в области
              строительства, чтобы обеспечить наилучший результат.
            </p>
          </div>
        </div>
        <div className={cls.workProcessItem}>
          <img
            className={cls.workProcessItemImage}
            src={technology}
            alt="Технологии"
          />
          <div className={cls.workProcessItemText}>
            <p className={cls.number}>06.</p>
            <h2>Технологии</h2>
            <p className="default-text">
              Мы используем передовые технологии и инструменты для оптимизации и
              улучшения процесса строительства, включая системы автоматизации и
              управления проектами, дистанционное управление и мониторинг, а
              также современное оборудование и материалы.
            </p>
          </div>
        </div>
      </div>
      <RedirectToContactBlock />
    </div>
  );
};

export default WorkProcessContent;
