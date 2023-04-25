import { FC } from "react";
import cls from "./OurWorksItem.module.scss";
import { IWork } from "../../../models/IWorks";
import StringToUrl from "../../../utils/StringToUrl";
import { rusToLatin } from "../../../utils/Transliterate";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../router/Routes";

interface OurWorksItemProps {
  work: IWork;
}

const OurWorksItem: FC<OurWorksItemProps> = ({ work }) => {
  return (
    <Link
      to={`${ROUTES.OURWORKS.en}/${StringToUrl(rusToLatin(work.name))}/${
        work.id
      }`}
      state={work}
      className={cls.ourWorksItem}
    >
      <img
        className={cls.ourWorksItemImage}
        src={import.meta.env.VITE_API_URL + "/images/works/" + work.image}
      />
      <p className={cls.ourWorksItemName}>{work.name}</p>
    </Link>
  );
};

export default OurWorksItem;
