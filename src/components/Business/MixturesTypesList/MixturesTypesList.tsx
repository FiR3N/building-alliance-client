import { FC } from "react";
import cls from "./MixturesTypesList.module.scss";
import MixturesList from "../MixturesList/MixturesList.";
import classNames from "classnames";
import { mixturesTypesAPI } from "../../../api/MixturesTypesAPI";
import sadSmile from "../../../assets/img/sad-smile.png";

const MixturesTypesList: FC = () => {
  let { error, data: types } = mixturesTypesAPI.useGetMixturesTypesQuery({});

  if (error) {
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
        <MixturesList type={type} key={type.id} />
      ))}
    </div>
  );
};

export default MixturesTypesList;
