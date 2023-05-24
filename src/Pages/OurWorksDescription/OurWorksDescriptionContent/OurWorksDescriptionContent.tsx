import { FC, useState } from "react";
import cls from "../OurWorksDescription.module.scss";
import classNames from "classnames";
import sadSmile from "../../../assets/img/sad-smile.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "../../../components/UI/Modal/Modal";
import { IWork } from "../../../models/Entity/IWorks";
import OurWorkImagesModal from "../../../components/Business/Modals/OurWorksImagesModal/OurWorksImagesModal";

interface OurWorksDescriptionContentProps {
  work: IWork | null;
}

const OurWorksDescriptionContent: FC<OurWorksDescriptionContentProps> = ({
  work,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const [imageId, setImageId] = useState<number>(0);

  const setImageAndModalState = (image: string, id: number) => {
    setImage(image);
    setImageId(id);
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && (
        // <Modal isSmall closeMethod={setIsModalOpen}>
        //   <div className={cls.ourWorksDescriptionInModal}>
        //     <LazyLoadImage src={image} alt={work?.name} effect="blur" />
        //   </div>
        // </Modal>
        <OurWorkImagesModal
          closeMethod={setIsModalOpen}
          imageList={work ? work?.images : []}
          soloImage={work ? work?.image : ""}
          id={imageId}
        />
      )}
      <div className={cls.ourWorksDescription}>
        <div
          className={classNames(cls.ourWorksDescriptionContent, "container")}
        >
          {work ? (
            <>
              <h2 className={cls.ourWorksDescriptionTitle}>{work.name}</h2>
              <div className={cls.ourWorksDescriptionMain}>
                <div className={cls.ourWorksDescriptionText}>
                  {work.infos?.map((item) => (
                    <p key={item.id} className="default-text">
                      {item.description}
                    </p>
                  ))}
                </div>
                <div className={cls.ourWorksDescriptionImages}>
                  <img
                    src={
                      import.meta.env.VITE_API_URL +
                      `/images/works/` +
                      work.image
                    }
                    alt={work.name}
                    onClick={() =>
                      setImageAndModalState(
                        import.meta.env.VITE_API_URL +
                          `/images/works/` +
                          work.image,
                        0
                      )
                    }
                    className={cls.ourWorksDescriptionMainImage}
                  />
                  <div className={cls.ourWorksDescriptionAdditionalImages}>
                    {work.images.map((item, index) => (
                      <img
                        key={item.id}
                        src={
                          import.meta.env.VITE_API_URL +
                          `/images/works/` +
                          item.image
                        }
                        alt={work.name}
                        onClick={() =>
                          setImageAndModalState(
                            import.meta.env.VITE_API_URL +
                              `/images/works/` +
                              item.image,
                            index + 1
                          )
                        }
                        className={cls.ourWorksDescriptionAdditionalImage}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <h2 className={cls.ourWorksDescriptionError}>
              Упс. Что пошло не так
              <img className="smile-image" src={sadSmile} alt="sad-smile" />
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default OurWorksDescriptionContent;
