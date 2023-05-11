import { FC } from "react";
import cls from "./Loader.module.scss";
import { ClimbingBoxLoader } from "react-spinners";
import classNames from "classnames";

interface LoaderProps {
  withMargins?: boolean;
  absolute?: boolean;
}

const Loader: FC<LoaderProps> = ({ withMargins, absolute }) => {
  return (
    <ClimbingBoxLoader
      size={20}
      color="#f7c24d"
      className={classNames(
        cls.loader,
        absolute && cls.loaderAbsolute,
        withMargins && cls.loaderWithMargins
      )}
    />
  );
};

export default Loader;
