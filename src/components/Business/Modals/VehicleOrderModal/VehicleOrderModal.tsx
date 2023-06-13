import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import cls from "./VehicleOrderModal.module.scss";
import Modal from "../../../UI/Modal/Modal";
import { SubmitHandler, useForm } from "react-hook-form";
import { IVehicleOrderForm } from "../../../../models/Forms/IVehicleOrderForm";
import InfoBlock from "../../../Blocks/InfoBlock/InfoBlock";
import MyInput from "../../../UI/MyInput/MyInput";
import MyTextArea from "../../../UI/MyTextArea/MyTextArea";
import MyButton from "../../../UI/MyButton/MyButton";
import { vehicleAPI } from "../../../../api/VehicleAPI";
import MySelect from "../../../UI/MySelect/MySelect";
import classNames from "classnames";
import EmailService from "../../../../api/EmailService";

interface VehicleOrderModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
}

const VehicleOrderModal: FC<VehicleOrderModalProps> = ({ closeMethod }) => {
  const { data: vehicles } = vehicleAPI.useGetVehiclesQuery({});
  const newVehicles =
    vehicles?.map(({ id, name }) => ({ id: id, content: name })) || [];
  const [selectedVehicle, setSelectedVehicle] = useState<{
    id: number;
    content: string;
  } | null>(null);

  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const [isPriceWithVAT, setIsPriceWithVAT] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<IVehicleOrderForm>({ mode: "onChange" });

  const countChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(e.target.value);

    if (inputValue <= 0) {
      setCount(1);
    } else {
      setCount(inputValue);
    }
  };

  const onSubmit: SubmitHandler<IVehicleOrderForm> = async (data) => {
    EmailService.sendVehicleOrder(
      data.name,
      data.phone,
      data.address,
      data.email,
      data.hoursCount,
      price + (isPriceWithVAT ? "c НДС" : "без НДС"),
      selectedVehicle?.content as string,
      data.date,
      data.text ? data.text : "пусто"
    );

    reset({
      address: "",
      email: "",
      name: "",
      phone: "",
      price: 0,
      text: "",
      date: "",
      hoursCount: 0,
    });

    setSelectedVehicle(null);
  };

  useEffect(() => {
    if (selectedVehicle) {
      setPrice(
        Number(
          (
            count *
            Number(
              isPriceWithVAT
                ? vehicles?.find((item) => item.id === selectedVehicle?.id)
                    ?.priceWithVAT
                : vehicles?.find((item) => item.id === selectedVehicle?.id)
                    ?.priceWithoutVAT
            )
          ).toFixed(2)
        )
      );
    }
  }, [count, vehicles, selectedVehicle, isPriceWithVAT]);

  useEffect(() => {
    const modalRoot = document.querySelector("#modal-root");
    const firstDiv = modalRoot?.querySelector("div");
    firstDiv?.scrollTo({ top: 0 });
  }, [isSubmitSuccessful]);

  useEffect(() => {
    if (selectedVehicle?.content) setValue("vehicle", selectedVehicle?.content);
  }, [selectedVehicle]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.vehicleOrderModal}>
        <h2 className={cls.vehicleOrderModalTitle}>Оформление заказа</h2>
        {isSubmitSuccessful && (
          <InfoBlock blockType={1}>
            <p>Ваш заказ успешно отправлен!</p>
          </InfoBlock>
        )}
        <div className={cls.vehicleOrderModalContent}>
          <form
            className={cls.vehicleOrderModalForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <MySelect
              name="Техника"
              array={newVehicles}
              selectedItem={selectedVehicle}
              setSelectedItem={setSelectedVehicle}
              labelTitle="Список техники"
              formName="vehicle"
              control={control}
              rules={{ required: "Техника должна быть выбрана!" }}
              error={errors.vehicle}
            />
            {selectedVehicle && (
              <>
                <MyInput
                  labelTitle={`Количество часов`}
                  value={count}
                  onChange={countChangeHandler}
                  type="number"
                  placeholder="Введите время аренды..."
                  required
                  min={0}
                  step={1}
                  max={999}
                  register={register("hoursCount", {
                    required: "Время не может быть пустым!",
                  })}
                  error={errors.hoursCount}
                />
                <label
                  className={classNames(
                    cls.vehicleOrderModalFormPrice,
                    "bold-title-text"
                  )}
                >
                  Предварительная цена: <span>{price} BYN</span>
                </label>
                <div className={cls.vehicleOrderModalFormCheckBox}>
                  <MyInput
                    labelTitle="Цена без НДС"
                    type="checkbox"
                    onChange={() => setIsPriceWithVAT((prev) => !prev)}
                  />
                </div>
              </>
            )}
            <MyInput
              labelTitle="Название"
              placeholder="Введите имя организации либо ФИО..."
              maxLength={100}
              required
              register={register("name", {
                required: "Имя не может быть пустым!",
              })}
              error={errors.name}
            />
            <MyInput
              labelTitle="Телефон"
              type="tel"
              name="phone"
              placeholder="Введите телефон..."
              maxLength={19}
              required
              register={register("phone", {
                required: "Телефон не может быть пустым!",
                pattern: {
                  value: /^[+\-\(\)\d\s]{6,}$/,
                  message: "Неверный формат телефона!",
                },
              })}
              error={errors.phone}
            />
            <MyInput
              labelTitle="Почта"
              placeholder="Введите почту..."
              required
              register={register("email", {
                required: "Почта не может быть пустой!",
                pattern: {
                  value:
                    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                  message: "Неверный формат почты",
                },
              })}
              error={errors.email}
            />
            <MyInput
              labelTitle="Дата"
              type="date"
              required
              register={register("date", {
                required: "Дата не может быть пустой!",
              })}
              error={errors.date}
            />
            <MyInput
              labelTitle="Адрес"
              placeholder="Введите адрес..."
              required
              register={register("address", {
                required: "Адрес не может быть пустым!",
              })}
              error={errors.address}
            />
            <MyTextArea
              labelTitle="Дополнительная информация"
              rows={7}
              placeholder="Введите дополнительную информацию..."
              register={register("text")}
            />

            <MyButton type="submit" disabled={isSubmitting}>
              Оформить заказ
            </MyButton>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default VehicleOrderModal;
