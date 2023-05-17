import { FC, useState } from "react";
import cls from "./OurWorksItem.module.scss";
import { rusToLatin } from "../../../utils/Transliterate";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../router/Routes";
import { IWork } from "../../../models/Entity/IWorks";

import editImage from "../../../assets/img/edit.svg";
import deleteImage from "../../../assets/img/delete.svg";
import OurWorksDeleteModal from "../Modals/OurWorksDeleteModal/OurWorksDeleteModal";
import OurWorkModal from "../Modals/OurWorksModal/OurWorksModal";
import classNames from "classnames";

interface OurWorksItemProps {
  work: IWork;
  isAdmin?: boolean;
}

const OurWorksItem: FC<OurWorksItemProps> = ({ work, isAdmin }) => {
  const [isWorkChangeModalOpen, setIsWorkChangeModalOpen] =
    useState<boolean>(false);
  const [isWorkDeleteModalOpen, setIsWorkDeleteModalOpen] =
    useState<boolean>(false);

  return (
    <>
      {isWorkChangeModalOpen && (
        <OurWorkModal closeMethod={setIsWorkChangeModalOpen} work={work} />
      )}
      {isWorkDeleteModalOpen && (
        <OurWorksDeleteModal
          closeMethod={setIsWorkDeleteModalOpen}
          work={work}
        />
      )}
      <div className={classNames(cls.ourWorksItem, isAdmin && cls.withMargins)}>
        {isAdmin && (
          <div className={cls.ourWorksItemAdminPanel}>
            <img
              src={editImage}
              alt="изменить"
              onClick={() => setIsWorkChangeModalOpen(true)}
            />
            <img
              src={deleteImage}
              alt="удалить"
              onClick={() => setIsWorkDeleteModalOpen(true)}
            />
          </div>
        )}
        <Link
          to={`${ROUTES.OURWORKS.en}/${rusToLatin(work.name)}/${work.id}`}
          state={work}
          className={cls.ourWorksItemContent}
        >
          <div className={cls.ourWorksItemImage}>
            <img
              src={import.meta.env.VITE_API_URL + "/images/works/" + work.image}
              alt={work.name}
            />
          </div>

          <p className={cls.ourWorksItemName}>{work.name}</p>
        </Link>
      </div>
    </>
  );
};

export default OurWorksItem;
