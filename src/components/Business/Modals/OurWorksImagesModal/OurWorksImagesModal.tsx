import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import { IImages } from "../../../../models/Entity/IImages";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import cls from "./OurWorksImagesModal.module.scss";
import Modal from "../../../UI/Modal/Modal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface OurWorkImagesModalProps {
  id: number;
  imageList: IImages[];
  soloImage: string;
  closeMethod: Dispatch<SetStateAction<boolean>>;
}

const OurWorkImagesModal: FC<OurWorkImagesModalProps> = ({
  id,
  imageList,
  soloImage,
  closeMethod,
}) => {
  const [swiper, setSwiper] = useState<any>();

  useEffect(() => {
    swiper?.slideTo(id, 0);
  }, [id, swiper]);

  return (
    <Modal closeMethod={closeMethod} isSmall>
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
            src={import.meta.env.VITE_API_URL + "/images/works/" + soloImage}
            alt={"Изображение"}
          />
        </SwiperSlide>
        {imageList?.map((image) => (
          <SwiperSlide className={cls.swiperItem} key={image.id}>
            <img
              src={
                import.meta.env.VITE_API_URL + "/images/works/" + image.image
              }
              alt={"Изображение"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Modal>
  );
};

export default OurWorkImagesModal;
