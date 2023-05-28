import { FC, useState } from "react";
import cls from "./MixturesList.module.scss";
import { IMixtureTypes } from "../../../models/Entity/IMixtureTypes";
import classNames from "classnames";
import { mixturesAPI } from "../../../api/MixturesAPI";
import sadSmile from "../../../assets/img/sad-smile.png";
import MyButton from "../../UI/MyButton/MyButton";
import MixtureOrderModal from "../Modals/MixtureOrderModal/MixtureOrderModal";

interface MixturesListProps {
  type: IMixtureTypes;
}

const MixturesList: FC<MixturesListProps> = ({ type }) => {
  const [isMixtureModalOpen, setIsMixtureModalOpen] = useState<boolean>(false);
  let { error, data: mixtures } = mixturesAPI.useGetMixturesByTypeIdQuery({
    typeId: type.id,
  });

  if (error) {
    return (
      <div className={classNames(cls.ourWorksList, "container")}>
        <h2 className="error-block">
          Ошибка получения "{type.name}"
          <img className="smile-image" src={sadSmile} alt="sad-smile" />
        </h2>
      </div>
    );
  }

  const mixtureButtonClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setIsMixtureModalOpen(true);
  };

  return (
    <>
      {isMixtureModalOpen && (
        <MixtureOrderModal
          closeMethod={setIsMixtureModalOpen}
          typeId={type.id}
        />
      )}
      <div className={cls.mixturesList}>
        <h2 className={cls.mixturesListTitle}>{type.name}</h2>
        <div className={cls.mixturesListTable}>
          <div className={classNames(cls.mixturesListTableHeaders, cls.gray)}>
            <h5 className={cls.mixturesListTableHeadersItem}>Название</h5>
            <h5 className={cls.mixturesListTableHeadersItem}>
              Единицы измерения
            </h5>
            <h5 className={cls.mixturesListTableHeadersItem}>Цена без НДС</h5>
            <h5 className={cls.mixturesListTableHeadersItem}>Цена с НДС</h5>
          </div>
          {mixtures?.map((mixture, index) => {
            return (
              <div
                className={classNames(
                  cls.mixturesListTableContent,
                  index % 2 !== 0 && cls.gray
                )}
                key={mixture.id}
              >
                <p
                  className={classNames(
                    cls.mixturesListTableContentItem,
                    "default-text"
                  )}
                >
                  {mixture.name}
                </p>
                <p
                  className={classNames(
                    cls.mixturesListTableContentItem,
                    "default-text"
                  )}
                >
                  {mixture.unitOfMeasurement}
                </p>
                <p
                  className={classNames(
                    cls.mixturesListTableContentItem,
                    "default-text"
                  )}
                >
                  {mixture.priceWithoutVAT}
                </p>
                <p
                  className={classNames(
                    cls.mixturesListTableContentItem,
                    "default-text"
                  )}
                >
                  {mixture.priceWithVAT}
                </p>
              </div>
            );
          })}
        </div>
        <MyButton onClick={mixtureButtonClickHandler}>Оформить заказ</MyButton>
      </div>
    </>
  );
};

export default MixturesList;
