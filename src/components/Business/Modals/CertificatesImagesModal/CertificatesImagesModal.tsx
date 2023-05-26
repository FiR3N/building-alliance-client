import { FC, Dispatch, SetStateAction, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import { ICertificateImages } from "../../../../models/Entity/ICertificate";
import cls from "./CertificatesImagesModal.module.scss";
import Modal from "../../../UI/Modal/Modal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface CertificatesImagesModalProps {
  name: string;
  imageList: ICertificateImages[];
  soloImage: string;
  closeMethod: Dispatch<SetStateAction<boolean>>;
}

const CertificatesImagesModal: FC<CertificatesImagesModalProps> = ({
  name,
  imageList,
  soloImage,
  closeMethod,
}) => {
  const [swiper, setSwiper] = useState<any>();

  return (
    <Modal closeMethod={closeMethod}>
      <h2 className={cls.title}>{name}</h2>
      <Swiper
        modules={[Navigation, EffectFade]}
        slidesPerView={1}
        navigation
        allowTouchMove={false}
        speed={1000}
        spaceBetween={30}
        onSwiper={(swiper: any) => {
          setSwiper(swiper);
        }}
        className={cls.swiperContainer}
      >
        <SwiperSlide className={cls.swiperItem}>
          <img
            src={
              import.meta.env.VITE_API_URL + "/images/certificates/" + soloImage
            }
            alt={"Изображение"}
          />
        </SwiperSlide>
        {imageList?.map((image) => (
          <SwiperSlide className={cls.swiperItem} key={image.id}>
            <img
              src={
                import.meta.env.VITE_API_URL +
                "/images/certificates/" +
                image.image
              }
              alt={"Изображение"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Modal>
  );
};

export default CertificatesImagesModal;
