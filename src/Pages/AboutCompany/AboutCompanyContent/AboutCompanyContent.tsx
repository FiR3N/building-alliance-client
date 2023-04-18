import { FC } from "react";
import cls from "../AboutCompany.module.scss";
import classNames from "classnames";
import aboutIcon1 from "../../../assets/img/about-icon1.png";
import aboutIcon2 from "../../../assets/img/about-icon2.png";
import aboutNewSolution from "../../../assets/img/about-new-solution.webp";
import aboutReasons from "../../../assets/img/about-reasons.jpg";
import quality from "../../../assets/img/reason-quality.png";
import abilities from "../../../assets/img/reason-abilities.png";
import relation from "../../../assets/img/reason-relation.png";

const AboutCompanyContent: FC = () => {
  return (
    <div className={cls.aboutCompany}>
      <div className={classNames(cls.aboutCompanyContent, "container")}>
        <div className={cls.aboutCompanyUnderstandingBlock}>
          <div className={cls.aboutCompanyUnderstandingBlockLeft}>
            <h2>Общество там, где есть Понимание</h2>
            <p className="default-text">
              {`Мы - строительная организация, которая понимает, что для успешного
              выполнения проектов необходимо стремление к планированию и
              стратегическому подходу. Мы постоянно исследуем новые технологии и
              находим инновационные решения, чтобы наши клиенты получили
              наилучший результат.`}
            </p>
          </div>
          <div className={cls.aboutCompanyUnderstandingBlockRight}>
            <div className={cls.aboutCompanyUnderstandingBlockItem}>
              <img
                className={cls.aboutCompanyUnderstandingBlockItemImage}
                src={aboutIcon1}
                alt="aboitIcon1"
              />
              <strong className={cls.boldText}>
                1. Планирование и стратегия
              </strong>
              <p className="default-text">
                Мы тщательно обсуждаем желания клиента и выстраиваем идеальную
                стратегию
              </p>
            </div>
            <div className={cls.aboutCompanyUnderstandingBlockItem}>
              <img
                className={cls.aboutCompanyUnderstandingBlockItemImage}
                src={aboutIcon2}
                alt="aboitIcon2"
              />
              <strong className={cls.boldText}>
                2. Удовлетворение клиента
              </strong>
              <p className="default-text">
                Наша главная цель - удовлетворенность клиентов, и мы делаем все
                возможное, чтобы превзойти их ожидания.
              </p>
            </div>
          </div>
        </div>
        <div className={cls.aboutCompanyOurBrand}>
          <img
            className={cls.aboutCompanyOurBrandImage}
            src={aboutNewSolution}
            alt="Новое решение"
          />
          <div className={cls.aboutCompanyOurBrandText}>
            <h2>Познакомьтесь с нашими новыми разработками </h2>
            <p className="default-text">
              Познакомьтесь с нашим новым решением для строительных проектов! Мы
              предлагаем уникальный подход, который позволяет нам достигать
              максимальной эффективности и экономии времени и ресурсов. Кроме
              того, наши клиенты уже ощутили разницу и оставили свои
              положительные отзывы о нашей работе. Присоединяйтесь к ним и
              узнайте больше о нашем новом решении!
            </p>
          </div>
        </div>
        <div className={cls.aboutCompanyReasons}>
          <div className={cls.aboutCompanyReasonsText}>
            <h2>Почему стоит работать с нами</h2>
            <div className={cls.aboutCompanyReasonsList}>
              <div className={cls.aboutCompanyReasonsItem}>
                <img
                  className={cls.aboutCompanyReasonsItemImage}
                  src={quality}
                  alt="Качество"
                />
                <div className={cls.aboutCompanyReasonsItemText}>
                  <strong className={cls.boldText}>Наше качество</strong>
                  <p className="default-text">
                    Мы уделяем большое внимание качеству наших услуг, используя
                    только лучшие материалы и современное оборудование. Мы
                    стремимся к тому, чтобы наши проекты были долговечными и
                    отвечали всем требованиям и ожиданиям наших клиентов.
                  </p>
                </div>
              </div>
              <div className={cls.aboutCompanyReasonsItem}>
                <img
                  className={cls.aboutCompanyReasonsItemImage}
                  src={relation}
                  alt="Отношение"
                />
                <div className={cls.aboutCompanyReasonsItemText}>
                  <strong className={cls.boldText}>Наше отношение</strong>
                  <p className="default-text">
                    Мы ценим каждого нашего клиента и стараемся создать
                    доверительные и долговременные отношения. Мы всегда готовы
                    выслушать ваши пожелания и потребности и принимать во
                    внимание каждую деталь проекта.
                  </p>
                </div>
              </div>
              <div className={cls.aboutCompanyReasonsItem}>
                <img
                  className={cls.aboutCompanyReasonsItemImage}
                  src={abilities}
                  alt="Способности"
                />
                <div className={cls.aboutCompanyReasonsItemText}>
                  <strong className={cls.boldText}>Наши способности</strong>
                  <p className="default-text">
                    аша команда состоит из профессионалов высокого уровня,
                    которые имеют многолетний опыт работы в сфере строительства.
                    Мы обладаем всеми необходимыми знаниями и навыками, чтобы
                    решить самые сложные задачи и выполнить проекты любой
                    сложности.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className={cls.aboutCompanyReasonsImage}
            src={aboutReasons}
            alt="Причины"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCompanyContent;
