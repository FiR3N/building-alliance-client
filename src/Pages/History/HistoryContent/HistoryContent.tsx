import { FC } from "react";
import cls from "../History.module.scss";
import ourHistoryBg from "../../../assets/img/our-history.webp";
import lightBulb from "../../../assets/img/light-bulb.png";
import separator from "../../../assets/img/separator.png";
import analytics from "../../../assets/img/analytics.png";
import courthouse from "../../../assets/img/courthouse.png";
import infrastructureDesign from "../../../assets/img/infrastructure-design.png";
import companyEstablishment from "../../../assets/img/company-establishment.png";
import stonks from "../../../assets/img/stonks.png";
import award from "../../../assets/img/award.png";

import classNames from "classnames";
import RedirectToContactBlock from "../../../components/UI/RedirectToContactBlock/RedirectToContactBlock";

interface HistoryContentProps {}

const HistoryContent: FC<HistoryContentProps> = () => {
  return (
    <div className={cls.history}>
      <div className={cls.historyTitle}>
        <div className={cls.historyTitleText}>
          <h2>Мы Спецстроймеханизация</h2>
          <p className="default-text">
            "Спецстроймеханизация" - это профессиональная строительная
            организациям, специализирующаяся на предоставлении качественных
            услуг по строительству, ремонту и реконструкции зданий и сооружений.
          </p>
          <p className="default-text">
            Основными видами деятельности предприятия являются выполнение
            строительно-монтажных и отделочных работ, производство
            асфальтобетонных смесей, гравия и щебня, произ-водство бетонных и
            растворных смесей, разработка карьеров по добыче песка, ПГС и
            гравия, ока-зание услуг строительными машинами и механизмами
            сторонним организациям, контроль качества строительных материалов
            аккредитованной строительной лабораторией, понижение уровня
            грунтовых вод при строительстве объектов.
          </p>
        </div>
        <img
          className={cls.historyTitleImg}
          src={ourHistoryBg}
          alt="out-company"
        />
      </div>
      <div className={cls.histotyDates}>
        <div className={cls.historyDatesTitle}>
          <h2>Как это все начиналось</h2>
          <p className="default-text">
            Мы постарались кратко представить все наши знаменательные события
          </p>
        </div>
        <div className={classNames(cls.historyDatesContent, "container")}>
          <div className={cls.historyDate}>
            <div className={cls.historyDateText}>
              <p className={cls.historyDateTextTitle}>Зарождение</p>
              <p className="default-text">
                История ОАО «Спецстроймеханизация» г. Молодечно началась с
                создания в июле месяце 1973 года хозрасчетного участка
                механизации строительно-монтажного треста № 23.
              </p>
            </div>
            <div className={cls.historyDateImg}>
              <span className={cls.cirlce}>
                <img src={lightBulb} alt="Идея" />
              </span>
            </div>
            <div className={cls.historyDateWhen}>
              <p className={cls.historyDateWhenNumber}>1973</p>
            </div>
            <div className={cls.separators}>
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
            </div>
          </div>
          <div className={cls.historyDate}>
            <div
              className={classNames(
                cls.historyDateWhen,
                cls.historyDateWhenAlt
              )}
            >
              <p className={cls.historyDateWhenNumber}>1974</p>
            </div>
            <div className={cls.historyDateImg}>
              <span className={cls.cirlce}>
                <img src={analytics} alt="Переорганизация" />
              </span>
            </div>

            <div className={cls.historyDateText}>
              <p className={cls.historyDateTextTitle}>Переорганизация</p>
              <p className="default-text">
                С 1974 года на базе участка механизации, как структурное
                подразделение треста № 23 Мини-стерства промышленного
                строительства БССР, создано государственное управление
                механизации и специальных работ № 196.
              </p>
            </div>
            <div className={cls.separators}>
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
            </div>
          </div>
          <div className={cls.historyDate}>
            <div className={cls.historyDateText}>
              <p className={cls.historyDateTextTitle}>Переименование</p>
              <p className="default-text">
                В 1995 году управление переименовано в государственное
                предприятие механизации и специальных работ Министерства
                архитектуры и строительства Республики Беларусь.
              </p>
            </div>
            <div className={cls.historyDateImg}>
              <span className={cls.cirlce}>
                <img src={courthouse} alt="Переименование" />
              </span>
            </div>
            <div className={cls.historyDateWhen}>
              <p className={cls.historyDateWhenNumber}>1995</p>
            </div>
            <div className={cls.separators}>
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
            </div>
          </div>
          <div className={cls.historyDate}>
            <div
              className={classNames(
                cls.historyDateWhen,
                cls.historyDateWhenAlt
              )}
            >
              <p className={cls.historyDateWhenNumber}>1999</p>
            </div>
            <div className={cls.historyDateImg}>
              <span className={cls.cirlce}>
                <img src={infrastructureDesign} alt="Преобразования" />
              </span>
            </div>

            <div className={cls.historyDateText}>
              <p className={cls.historyDateTextTitle}>Преобразования</p>
              <p className="default-text">
                В 1999 году предприятие преобразовано в открытое акционерное
                общество «Спецстроймеханиза-ция» г. Молодечно.
              </p>
            </div>
            <div className={cls.separators}>
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
            </div>
          </div>
          <div className={cls.historyDate}>
            <div className={cls.historyDateText}>
              <p className={cls.historyDateTextTitle}>Награждения</p>
              <p className="default-text">
                В 2004 году директору Манюку К.К. объявлена благодарность
                Президента Республики Беларусь за большой личный вклад в
                выполнении реконструкции и капитального ремонта
                «Государственного мемориального комплекса «Хатынь».
              </p>
            </div>
            <div className={cls.historyDateImg}>
              <span className={cls.cirlce}>
                <img src={award} alt="Награда" />
              </span>
            </div>
            <div className={cls.historyDateWhen}>
              <p className={cls.historyDateWhenNumber}>2004</p>
            </div>
            <div className={cls.separators}>
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
            </div>
          </div>
          <div className={cls.historyDate}>
            <div
              className={classNames(
                cls.historyDateWhen,
                cls.historyDateWhenAlt
              )}
            >
              <p className={cls.historyDateWhenNumber}>2008</p>
            </div>
            <div className={cls.historyDateImg}>
              <span className={cls.cirlce}>
                <img src={award} alt="Награждения" />
              </span>
            </div>
            <div className={cls.historyDateText}>
              <p className={cls.historyDateTextTitle}>Награждения</p>
              <p className="default-text">
                В 2008 году директор ОАО «Спецстроймеханизация» был награжден
                Почетными грамотами Молодечненского райисполкома и Национального
                собрания Республики Беларусь за многолетний добросовестный труд,
                большой личный вклад в развитие страны.
              </p>
            </div>

            <div className={cls.separators}>
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
            </div>
          </div>
          <div className={cls.historyDate}>
            <div className={cls.historyDateText}>
              <p className={cls.historyDateTextTitle}>«Дожинки» г. Молодечно</p>
              <p className="default-text">
                По итогам работы за 2011 год ОАО «Спецстроймеханизация» признано
                лучшей строительной организацией с численностью более 100
                человек по Молодечненскому району и занесена на район-ную Доску
                Почета.
              </p>
            </div>
            <div className={cls.historyDateImg}>
              <span className={cls.cirlce}>
                <img src={companyEstablishment} alt="Популярность" />
              </span>
            </div>
            <div className={classNames(cls.historyDateWhen)}>
              <p className={cls.historyDateWhenNumber}>2011</p>
            </div>

            <div className={cls.separators}>
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
            </div>
          </div>
          <div className={cls.historyDate}>
            <div
              className={classNames(
                cls.historyDateWhen,
                cls.historyDateWhenAlt
              )}
            >
              <p className={cls.historyDateWhenNumber}>2014</p>
            </div>
            <div className={cls.historyDateImg}>
              <span className={cls.cirlce}>
                <img src={award} alt="Награждения" />
              </span>
            </div>
            <div className={cls.historyDateText}>
              <p className={cls.historyDateTextTitle}>Награждения</p>
              <p className="default-text">
                Коллективу в 2014 году объявлена Благодарность Минского
                областного исполнительного комитета за большой вклад в
                строительство жилья и объектов социальной инфраструктуры Минской
                области.
              </p>
            </div>

            <div className={cls.separators}>
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
            </div>
          </div>
          <div className={cls.historyDate}>
            <div className={cls.historyDateText}>
              <p className={cls.historyDateTextTitle}>Награждения</p>
              <p className="default-text">
                В 2021 году Манюк Константин Константинович признан победителем
                республиканского про-фессионального конкурса «На лучшее
                достижение в строительной отрасли Республики Беларусь за 2020
                год» в номинации «Руководитель года»
              </p>
            </div>
            <div className={cls.historyDateImg}>
              <span className={cls.cirlce}>
                <img src={award} alt="Награждения" />
              </span>
            </div>
            <div className={classNames(cls.historyDateWhen)}>
              <p className={cls.historyDateWhenNumber}>2021</p>
            </div>

            <div className={cls.separators}>
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
              <img src={separator} />
            </div>
          </div>
          <div className={cls.historyDate}>
            <div
              className={classNames(
                cls.historyDateWhen,
                cls.historyDateWhenAlt
              )}
            >
              <p className={cls.historyDateWhenNumber}>2023</p>
            </div>
            <div className={cls.historyDateImg}>
              <span className={cls.cirlce}>
                <img src={stonks} alt="Наши дни" />
              </span>
            </div>
            <div className={cls.historyDateText}>
              <p className={cls.historyDateTextTitle}>Наши дни</p>
              <p className="default-text">
                По сей день наша организация активно развивается и вносит
                существенный вклад в развитие строительной отрасли нашей страны.
              </p>
            </div>
          </div>
        </div>
      </div>
      <RedirectToContactBlock />
    </div>
  );
};

export default HistoryContent;
