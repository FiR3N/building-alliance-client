import { FC, useState } from "react";
import cls from "./MixturesList.module.scss";
import { IMixtureTypes } from "../../../models/Entity/IMixtureTypes";
import classNames from "classnames";
import { mixturesAPI } from "../../../api/MixturesAPI";
import MyButton from "../../UI/MyButton/MyButton";
import MixtureOrderModal from "../Modals/MixtureOrderModal/MixtureOrderModal";

import sadSmile from "../../../assets/img/sad-smile.png";
import editImage from "../../../assets/img/edit.svg";
import deleteImage from "../../../assets/img/delete.svg";
import { IMixture } from "../../../models/Entity/IMixture";
import MixtureModal from "../Modals/MixtureModal/MixtureModal";
import MixtureDeleteModal from "../Modals/MixtureDeleteModal/MixtureDeleteModal";

interface MixturesListProps {
  type: IMixtureTypes;
  isAdmin?: boolean;
}

const MixturesList: FC<MixturesListProps> = ({ type, isAdmin }) => {
  const [isMixtureOrderModalOpen, setIsMixtureOrderModalOpen] =
    useState<boolean>(false);
  const [isMixtureEditModalOpen, setIsMixtureEditModalOpen] =
    useState<boolean>(false);
  const [isMixtureDeleteModalOpen, setIsMixtureDeleteModalOpen] =
    useState<boolean>(false);
  const [mixture, setMixture] = useState<IMixture>({} as IMixture);

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

  if (mixtures?.length === 0) {
    return (
      <div className={classNames(cls.ourWorksList, "container")}>
        <h2 className="error-block">
          Растворов данного типа не найдено
          <img className="smile-image" src={sadSmile} alt="sad-smile" />
        </h2>
      </div>
    );
  }

  const mixtureOrderButtonClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setIsMixtureOrderModalOpen(true);
  };

  const mixtureEditButtonClickHandler = (mixture: IMixture) => {
    setIsMixtureEditModalOpen(true);
    setMixture(mixture);
  };

  const mixtureDeleteButtonClickHandler = (mixture: IMixture) => {
    setIsMixtureDeleteModalOpen(true);
    setMixture(mixture);
  };

  return (
    <>
      {isMixtureOrderModalOpen && (
        <MixtureOrderModal
          closeMethod={setIsMixtureOrderModalOpen}
          typeId={type.id}
        />
      )}
      {isMixtureDeleteModalOpen && (
        <MixtureDeleteModal
          closeMethod={setIsMixtureDeleteModalOpen}
          mixture={mixture}
        />
      )}
      {isMixtureEditModalOpen && (
        <MixtureModal
          closeMethod={setIsMixtureEditModalOpen}
          mixture={mixture}
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
                {isAdmin && (
                  <div className={cls.mixturesListAdminPanel}>
                    <img
                      src={editImage}
                      alt="изменить"
                      onClick={(e) => mixtureEditButtonClickHandler(mixture)}
                    />
                    <img
                      src={deleteImage}
                      alt="удалить"
                      onClick={(e) => mixtureDeleteButtonClickHandler(mixture)}
                    />
                  </div>
                )}
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
        {!isAdmin && (
          <MyButton onClick={mixtureOrderButtonClickHandler}>
            Оформить заказ
          </MyButton>
        )}
      </div>
    </>
  );
};

export default MixturesList;
