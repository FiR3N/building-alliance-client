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

import classNames from "classnames";
import RedirectToContactBlock from "../../../components/UI/RedirectToContactBlock/RedirectToContactBlock";

interface HistoryContentProps {}

const HistoryContent: FC<HistoryContentProps> = () => {
  return (
    <div className={cls.history}>
      <div className={cls.historyTitle}>
        <div className={cls.historyTitleText}>
          <h2>Мы Building Alliance</h2>
          <p className="default-text">
            Building Alliance - это профессиональная строительная компания,
            специализирующаяся на предоставлении качественных услуг по
            строительству, ремонту и реконструкции зданий и сооружений.
          </p>
          <p className="default-text">
            Компания имеет широкий спектр экспертизы в области проектирования,
            строительства и управления проектами любой сложности. Она работает в
            тесном сотрудничестве с заказчиком, чтобы понять его потребности и
            достичь его целей, предоставляя индивидуальные решения и
            качественное обслуживание.
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
              <p className={cls.historyDateTextTitle}>Идея зарождения</p>
              <p className="default-text">
                Группа молодых амбициозных людей, работавших в сфере
                строительства, начали обсуждать идею создания собственной
                компании, которая бы предоставляла качественные и
                профессиональные услуги в области строительства.
              </p>
            </div>
            <div className={cls.historyDateImg}>
              <span className={cls.cirlce}>
                <img src={lightBulb} alt="Идея" />
              </span>
            </div>
            <div className={cls.historyDateWhen}>
              <p className={cls.historyDateWhenTitle}>Март</p>
              <p className={cls.historyDateWhenNumber}>1990</p>
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
              <p className={cls.historyDateWhenTitle}>Апрель</p>
              <p className={cls.historyDateWhenNumber}>1994</p>
            </div>
            <div className={cls.historyDateImg}>
              <span className={cls.cirlce}>
                <img src={analytics} alt="Концепции" />
              </span>
            </div>

            <div className={cls.historyDateText}>
              <p className={cls.historyDateTextTitle}>Бизнец концепция</p>
              <p className="default-text">
                Разработана бизнес-концепция компании, которая включала в себя
                широкий спектр услуг, начиная от проектирования и строительства
                до ремонта и реконструкции зданий и сооружений.
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
              <p className={cls.historyDateTextTitle}>Официальное создание</p>
              <p className="default-text">
                Компания Building Alliance была официально создана и начала свою
                деятельность в небольшом офисе, но благодаря высокому качеству
                услуг и профессионализму команды, компания быстро развивалась и
                получала доверие клиентов.
              </p>
            </div>
            <div className={cls.historyDateImg}>
              <span className={cls.cirlce}>
                <img src={courthouse} alt="Мэрия" />
              </span>
            </div>
            <div className={cls.historyDateWhen}>
              <p className={cls.historyDateWhenTitle}>Июль</p>
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
              <p className={cls.historyDateWhenTitle}>Февраль</p>
              <p className={cls.historyDateWhenNumber}>2000</p>
            </div>
            <div className={cls.historyDateImg}>
              <span className={cls.cirlce}>
                <img src={infrastructureDesign} alt="Расширение" />
              </span>
            </div>

            <div className={cls.historyDateText}>
              <p className={cls.historyDateTextTitle}>Расширение</p>
              <p className="default-text">
                Building Alliance создала свой второй филиал, чтобы расширить
                свои возможности и обслуживать большее количество клиентов.
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
              <p className={cls.historyDateTextTitle}>Популярность</p>
              <p className="default-text">
                Компания обрела массовую популярность и стала одной из наиболее
                востребованных строительных компаний в регионе. Она продолжала
                развиваться и расширять свои услуги, привлекая все больше и
                больше клиентов.
              </p>
            </div>
            <div className={cls.historyDateImg}>
              <span className={cls.cirlce}>
                <img src={companyEstablishment} alt="Популярность" />
              </span>
            </div>
            <div className={cls.historyDateWhen}>
              <p className={cls.historyDateWhenTitle}>Май</p>
              <p className={cls.historyDateWhenNumber}>2010</p>
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
              <p className={cls.historyDateWhenTitle}>Весна</p>
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
                Сегодня Building Alliance продолжает свою деятельность,
                предоставляя высококачественные услуги и успешно конкурируя на
                рынке строительных услуг. Она остается лидером в своей отрасли и
                продолжает работать над улучшением и расширением своих услуг для
                удовлетворения потребностей своих клиентов.
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
