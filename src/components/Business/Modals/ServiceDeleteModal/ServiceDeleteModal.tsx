import { Dispatch, FC, SetStateAction, useEffect } from "react";
import cls from "./ServiceDeleteModal.module.scss";
import Modal from "../../../UI/Modal/Modal";
import MyButton from "../../../UI/MyButton/MyButton";
import classNames from "classnames";
import { IService } from "../../../../models/Entity/IService";
import { servicesAPI } from "../../../../api/ServicesAPI";

interface ServiceDeleteModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  service: IService;
}

const ServiceDeleteModal: FC<ServiceDeleteModalProps> = ({
  closeMethod,
  service,
}) => {
  const [deleteService, { isSuccess, isError }] =
    servicesAPI.useDeleteServiceMutation();

  const deleteServiceHandler = async () => {
    await deleteService({ id: service.id });
  };

  useEffect(() => {
    if (isSuccess) {
      closeMethod(false);
    }
  }, [isSuccess]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.serviceDeleteModal}>
        <h2 className={cls.serviceModalTitle}>
          Вы точно уверенны, что хотите удалить данную услугу?
        </h2>
        {isError && (
          <p className={classNames(cls.serviceDeleteError, "error-text")}>
            Ошибка при удалении!
          </p>
        )}
        <p className="default-text">
          <span className="bold-text">Номер услугу:</span> {service.id}
        </p>
        <p className="default-text">
          <span className="bold-text">Название услуги:</span> {service.name}
        </p>
        <img
          src={
            import.meta.env.VITE_API_URL + "/images/services/" + service.image
          }
          alt={`service-${service.id}`}
        />
        <MyButton onClick={deleteServiceHandler}>Да</MyButton>
      </div>
    </Modal>
  );
};

export default ServiceDeleteModal;
