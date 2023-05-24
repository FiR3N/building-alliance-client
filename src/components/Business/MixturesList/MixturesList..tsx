import { FC } from "react";
import cls from "./MixturesList.module.scss";
import useFetch from "../../../hooks/useFetch";
import { IMixture } from "../../../models/Entity/IMixture";
import { IMixtureTypes } from "../../../models/Entity/IMixtureTypes";

interface MixturesListProps {
  type: IMixtureTypes;
}

const MixturesList: FC<MixturesListProps> = ({ type }) => {
  const { data: mixtures } = useFetch<IMixture[]>(
    import.meta.env.VITE_API_URL + `/mixtures/${type?.id}`
  );
  return (
    <div className={cls.mixturesList}>
      <h2 className={cls.mixturesListTitle}>{type.name}</h2>
      <div className={cls.mixturesListTable}>
        <div className={cls.mixturesListTableHeaders}>
          <h5 className={cls.mixturesListTableHeadersItem}>Название</h5>
          <h5 className={cls.mixturesListTableHeadersItem}>
            Единицы измерения
          </h5>
          <h5 className={cls.mixturesListTableHeadersItem}>Цена без НДС</h5>
          <h5 className={cls.mixturesListTableHeadersItem}>Цена с НДС</h5>
        </div>
        {mixtures?.map((mixture) => {
          return (
            <div className={cls.mixturesListTableContent}>
              <p className={cls.mixturesListTableContentItem}>{mixture.name}</p>
              <p className={cls.mixturesListTableContentItem}>
                {mixture.unitOfMeasurement}
              </p>
              <p className={cls.mixturesListTableContentItem}>
                {mixture.priceWithoutVAT}
              </p>
              <p className={cls.mixturesListTableContentItem}>
                {mixture.priceWithVAT}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MixturesList;
