import { FC, useState } from "react";
import cls from "./VehicleList.module.scss";
import { vehicleAPI } from "../../../api/VehicleAPI";
import classNames from "classnames";

import sadSmile from "../../../assets/img/sad-smile.png";
import MyButton from "../../UI/MyButton/MyButton";
import VehicleOrderModal from "../Modals/VehicleOrderModal/VehicleOrderModal";

interface VehicleListProps {}

const VehicleList: FC<VehicleListProps> = () => {
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState<boolean>(false);
  let { error, data: vehicles } = vehicleAPI.useGetVehiclesQuery({});

  if (error) {
    return (
      <div className={classNames(cls.vehicleList, "container")}>
        <h2 className="error-block">
          Ошибка получения техники
          <img className="smile-image" src={sadSmile} alt="sad-smile" />
        </h2>
      </div>
    );
  }

  const vehicleButtonClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setIsVehicleModalOpen(true);
  };

  return (
    <>
      {isVehicleModalOpen && (
        <VehicleOrderModal closeMethod={setIsVehicleModalOpen} />
      )}
      <div className={classNames(cls.vehicleList, "container")}>
        <h2 className={cls.vehicleListTitle}>Наша техника</h2>
        <div className={cls.vehicleListTable}>
          <div className={classNames(cls.vehicleListTableHeaders, cls.gray)}>
            <h5 className={cls.vehicleListTableHeadersItem}>Название</h5>
            <h5 className={cls.vehicleListTableHeadersItem}>
              Полнцая цена за 1 м/час без НДС
            </h5>
            <h5 className={cls.vehicleListTableHeadersItem}>
              Полнцая цена за 1 м/час с НДС
            </h5>
          </div>
          {vehicles?.map((vehicle, index) => {
            return (
              <div
                className={classNames(
                  cls.vehicleListTableContent,
                  index % 2 !== 0 && cls.gray
                )}
                key={vehicle.id}
              >
                <p
                  className={classNames(
                    cls.vehicleListTableContentItem,
                    "default-text"
                  )}
                >
                  {vehicle.name}
                </p>

                <p
                  className={classNames(
                    cls.vehicleListTableContentItem,
                    "default-text"
                  )}
                >
                  {vehicle.priceWithoutVAT}
                </p>
                <p
                  className={classNames(
                    cls.vehicleListTableContentItem,
                    "default-text"
                  )}
                >
                  {vehicle.priceWithVAT}
                </p>
              </div>
            );
          })}
        </div>
        <MyButton onClick={vehicleButtonClickHandler}>Оформить заказ</MyButton>
      </div>
    </>
  );
};

export default VehicleList;
