import { FC } from "react";
import cls from "./MixturesTypesList.module.scss";
import { IMixtureTypes } from "../../../models/Entity/IMixtureTypes";
import useFetch from "../../../hooks/useFetch";
import MixturesList from "../MixturesList/MixturesList.";
import classNames from "classnames";

const MixturesTypesList: FC = () => {
  const { data: types } = useFetch<IMixtureTypes[]>(
    import.meta.env.VITE_API_URL + "/mixture-types"
  );

  return (
    <div className={classNames(cls.mixtures, "container")}>
      {types?.map((type) => (
        <MixturesList type={type} />
      ))}
    </div>
  );
};

export default MixturesTypesList;
