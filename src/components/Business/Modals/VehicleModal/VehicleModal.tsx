import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import cls from "./VehicleModal.module.scss";
import { IVehicle } from "../../../../models/Entity/IVehicle";
import { IVehicleForm } from "../../../../models/Forms/IVehicleForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { vehicleAPI } from "../../../../api/VehicleAPI";
import Modal from "../../../UI/Modal/Modal";
import InfoBlock from "../../../Blocks/InfoBlock/InfoBlock";
import MyInput from "../../../UI/MyInput/MyInput";
import MyButton from "../../../UI/MyButton/MyButton";

interface VehicleModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  vehicle?: IVehicle;
}

const VehicleModal: FC<VehicleModalProps> = ({ closeMethod, vehicle }) => {
  const [name, setName] = useState<string>(vehicle ? vehicle.name : "");
  const [priceWithoutVAT, setPriceWithoutVAT] = useState<string>(
    vehicle ? String(vehicle.priceWithoutVAT) : "0"
  );
  const [priceWithVAT, setPriceWithVAT] = useState<string>(
    vehicle ? String(vehicle.priceWithVAT) : "0"
  );

  const [putVehicle, { error: putError }] = vehicleAPI.usePutMixtureMutation();
  const [createVehicle, { error: createError }] =
    vehicleAPI.usePostMixtureMutation();

  const {
    register,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
  } = useForm<IVehicleForm>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IVehicleForm> = async (data) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("priceWithVAT", String(priceWithVAT));
    formData.append("priceWithoutVAT", String(priceWithoutVAT));

    if (vehicle) {
      await putVehicle({ id: vehicle.id, formData: formData }).unwrap();
    } else {
      await createVehicle({ formData: formData }).unwrap();
    }
  };

  const handleInputPriceWithoutVATChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    const regex = /^-?\d*([.,]\d+)?$/;
    if (regex.test(inputValue)) {
      setPriceWithoutVAT(inputValue);
    }
  };

  const handleInputPriceWithVATChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    const regex = /^\d*([.]\d{0,2})?$/;
    if (regex.test(inputValue)) {
      setPriceWithVAT(inputValue);
    }
  };

  useEffect(() => {
    const modalRoot = document.querySelector("#modal-root");
    const firstDiv = modalRoot?.querySelector("div");
    firstDiv?.scrollTo({ top: 0 });
  }, [isSubmitSuccessful]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.vehicleModal}>
        {vehicle ? (
          <h2 className={cls.vehicleModalTitle}>Редактирование</h2>
        ) : (
          <h2 className={cls.vehicleModalTitle}>Создание</h2>
        )}

        {isSubmitSuccessful && (
          <InfoBlock blockType={1}>
            {vehicle
              ? `Техника ${vehicle?.id} успешно отредактирована`
              : `Техника успешно добавлена`}
          </InfoBlock>
        )}
        {putError && (
          <InfoBlock blockType={-1}>Ошибка редактирования!</InfoBlock>
        )}
        {createError && <InfoBlock blockType={-1}>Ошибка создания!</InfoBlock>}
        <form
          className={cls.vehicleModalForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <MyInput
            labelTitle="Название"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Введите название техники..."
            required
            maxLength={100}
            register={register("name", {
              required: "Название не может быть пустым!",
            })}
            error={errors.name}
          />
          <MyInput
            labelTitle={`Цена без НДС`}
            value={priceWithoutVAT}
            onChange={handleInputPriceWithoutVATChange}
            type="text"
            placeholder="Введите цену без НДС"
            required
            register={register("priceWithoutVAT", {
              required: "Цена не может быть пустой!",
              pattern: {
                value: /^(?!0$)/,
                message: "Цена не может быть нулевой!",
              },
            })}
            error={errors.priceWithoutVAT}
          />
          <MyInput
            labelTitle={`Цена с НДС`}
            value={priceWithVAT}
            onChange={handleInputPriceWithVATChange}
            type="text"
            placeholder="Введите цену с НДС"
            required
            register={register("priceWithVAT", {
              required: "Цена не может быть пустой!",
              pattern: {
                value: /^(?!0$)/,
                message: "Цена не может быть нулевой!",
              },
            })}
            error={errors.priceWithVAT}
          />

          <MyButton disabled={isSubmitting} type="submit">
            Сохранить
          </MyButton>
        </form>
      </div>
    </Modal>
  );
};

export default VehicleModal;
