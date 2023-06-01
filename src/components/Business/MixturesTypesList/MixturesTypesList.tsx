import { FC } from "react";
import cls from "./MixturesTypesList.module.scss";
import MixturesList from "../MixturesList/MixturesList.";
import classNames from "classnames";
import { mixturesTypesAPI } from "../../../api/MixturesTypesAPI";
import sadSmile from "../../../assets/img/sad-smile.png";

interface MixturesTypesListProps {
  isAdmin?: boolean;
}

const MixturesTypesList: FC<MixturesTypesListProps> = ({ isAdmin }) => {
  let { error, data: types } = mixturesTypesAPI.useGetMixturesTypesQuery({});

  if (error || types?.length === 0) {
    return (
      <div className={classNames(cls.ourWorksList, "container")}>
        <h2 className="error-block">
          Ошибка получения информации об растворах
          <img className="smile-image" src={sadSmile} alt="sad-smile" />
        </h2>
      </div>
    );
  }

  return (
    <div className={classNames(cls.mixtures, "container")}>
      {types?.map((type) => (
        <MixturesList type={type} isAdmin key={type.id} />
      ))}
    </div>
  );
};

export default MixturesTypesList;
