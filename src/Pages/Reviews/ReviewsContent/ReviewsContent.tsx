import { FC } from "react";
import cls from "../Reviews.module.scss";
import classNames from "classnames";
import review1 from "../../../assets/img/review-1.gif";
import review2 from "../../../assets/img/review-2.png";
import review3 from "../../../assets/img/review-3.png";
import review4 from "../../../assets/img/review-4.png";
import reviewPligImage from "../../../assets/img/review-plug-img.jpg";
import stars from "../../../assets/img/stars.png";

interface ReviewsContentProps {}

const ReviewsContent: FC<ReviewsContentProps> = () => {
  return (
    <div className={cls.reviews}>
      <div className={classNames(cls.reviewsContent, "container")}>
        <div className={cls.reviewsTitle}>
          <h2>Отзывы наших клиентов</h2>
          <p className="default-text">
            Здесь вы можете ознакомиться с отзывами, оставленными нашими
            клиентами, которые доверили нам свои проекты и были довольны
            результатами. Мы гордимся нашей репутацией и стараемся предоставлять
            высококачественные услуги, а отзывы наших клиентов помогают нам
            улучшать и развивать нашу деятельность.{" "}
          </p>
        </div>

        <div className={cls.reviewsItems}>
          <div className={cls.reviewsItem}>
            <img className={cls.reviewsItemImage} src={review1} alt="отзыв" />
            <div className={cls.reviewsItemText}>
              <blockquote className="default-text">
                Мы сотдруничали с ОАО "Спецстроймеханизация" по строительству
                жилого дома по генплану №36 в микрорайоне №6 г. Молодечно. Все
                строительно-монтажные работы выполнены в соответствии с
                условиями договора, и на высоком профессиональном уровне.
                Особенно хочется отметить качество и оперативность в разрешении
                различных вопросов, возникавших в процессе работ. ОАО
                "Светлогорский домостроительный комбинат" рекомендует
                организацию ОАО "Спецстроймеханизация", как надежного подрячика.
              </blockquote>
              <div className={cls.reviewsItemTextLowerContent}>
                <p className={cls.reviewsItemTextName}>
                  - ОАО "Светлогорский домостроительный комбинат".
                </p>
                <img src={stars} alt="5 звезд" />
              </div>
            </div>
          </div>
          <div className={cls.reviewsItem}>
            <img className={cls.reviewsItemImage} src={review2} alt="отзыв" />
            <div className={cls.reviewsItemText}>
              <blockquote className="default-text">
                По нашему заказу ОАО "Спецстроймеханизация" выполняла
                строительно-мотнажные работы по объекту "Строительство
                водопроводных сетей по улицам: Октябрьская, Дружбы, Заречная,
                Первомайская, Юбилейная, Советская, и пер. Гагарина в д.
                Буденовка". Все работы выполнены в соответствии с условиями
                договора, требованиями нормативно-правовых актов в
                строительстве, требованиями проектно-сметной документации и на
                высоком профессиональном уровне.
              </blockquote>
              <div className={cls.reviewsItemTextLowerContent}>
                <p className={cls.reviewsItemTextName}>
                  - Ошмянское жилищно-коммунальное хозяйство.
                </p>
                <img src={stars} alt="5 звезд" />
              </div>
            </div>
          </div>
          <div className={cls.reviewsItem}>
            <img
              className={cls.reviewsItemImage}
              src={reviewPligImage}
              alt="отзыв"
            />
            <div className={cls.reviewsItemText}>
              <blockquote className="default-text">
                Строительная организация ОАО "Спецстроймеханизация" г. Молодечно
                выполняет значительный объем работ по строительству объектов г.
                Молодечно и Молодечненского района и явялется основным
                подрядчиком по благоустройству территории и прокладке наружных
                инженерных сетей. С участием ОАО "Спецстроймеханизация" были
                построены следующие объекты: ТИЗ-1, ТИЗ-2,
                пешеходно-транспортная связь, соединяющая автодорогу P-106
                "Молодечно - Сморгонь", а также РИЗ в п. Чисть и РИЗ в д.
                Слободка. Все работы были выполнены качественно и четко. Мы
                рекомендуем организацию ОАО "Спецстроймеханизация", как
                надежного подрячика.
              </blockquote>
              <div className={cls.reviewsItemTextLowerContent}>
                <p className={cls.reviewsItemTextName}>
                  - Управление капитального строительства Молодечненского
                  района.
                </p>
                <img src={stars} alt="5 звезд" />
              </div>
            </div>
          </div>
          <div className={cls.reviewsItem}>
            <img
              className={cls.reviewsItemImage}
              src={review4}
              alt="review  "
            />
            <div className={cls.reviewsItemText}>
              <blockquote className="default-text">
                В 2022 году наша организация сотдруничала с ОАО
                "Спецстроймеханизация" по строительству объекта "Разработка и
                рекультивация карьера по добыче песка на месторождении песков
                "Мясота", строительство промышленной площадки, подъездной
                дороги, съезда, кабельной линии электропередачи 10 кВ, опоры
                ВЛ10кВ". Все строительно-монтажные работы выполнены в
                соответствии с условиями договора, соответствуют требованиям
                проектно-сметной документации. Мы рекомендуем организацию ОАО
                "Спецстроймеханизация", как надежного подрячика.
              </blockquote>
              <div className={cls.reviewsItemTextLowerContent}>
                <p className={cls.reviewsItemTextName}>- ОАО "Забудова".</p>

                <img src={stars} alt="5 звезд" />
              </div>
            </div>
          </div>
          <div className={cls.reviewsItem}>
            <img className={cls.reviewsItemImage} src={review3} alt="отзыв" />
            <div className={cls.reviewsItemText}>
              <blockquote className="default-text">
                Благодаря ОАО "Спецстроймеханизация" были проведены следующие
                работы: реконструкция улицы Чкалова в г. Молодечно, построено
                здание коровника со встроенным доильно-молочным блоком на МТФ
                "Мачиновщина", проведен капитальный ремонт сетей водоснабжения
                по ул. Протасово в г. Дзержинске. На всех объектах ОАО
                "Спецстроймеханизация" использовала новейшие достижения
                строительной технологии, прогрессивные материалы и изделия,
                эффективные строительные машины и механизмы.
              </blockquote>
              <div className={cls.reviewsItemTextLowerContent}>
                <p className={cls.reviewsItemTextName}>- Союз строителей.</p>
                <img src={stars} alt="5 звезд" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsContent;
