import { Dispatch, FC, SetStateAction, useState, useEffect } from "react";
import cls from "./MixtureOrderModal.module.scss";
import Modal from "../../../UI/Modal/Modal";
import MySelect from "../../../UI/MySelect/MySelect";
import { mixturesAPI } from "../../../../api/MixturesAPI";
import { mixturesTypesAPI } from "../../../../api/MixturesTypesAPI";
import MyInput from "../../../UI/MyInput/MyInput";
import MyButton from "../../../UI/MyButton/MyButton";
import classNames from "classnames";
import MyTextArea from "../../../UI/MyTextArea/MyTextArea";
import { SubmitHandler, useForm } from "react-hook-form";
import { IMixtureOrderForm } from "../../../../models/Forms/IMixtureOrderForm";
import EmailService from "../../../../api/EmailService";
import InfoBlock from "../../../Blocks/InfoBlock/InfoBlock";

interface MixtureOrderModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  typeId?: number;
}

const MixtureOrderModal: FC<MixtureOrderModalProps> = ({
  closeMethod,
  typeId,
}) => {
  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const [isPriceWithVAT, setIsPriceWithVAT] = useState<boolean>(true);

  const { data: types } = mixturesTypesAPI.useGetMixturesTypesQuery({});
  const newTypes =
    types?.map(({ id, name }) => ({ id: id, content: name })) || [];
  const [selectedTypeItem, setSelectedTypeItem] = useState<{
    id: number;
    content: string;
  } | null>(
    typeId ? newTypes.find((item) => item.id === typeId) || null : null
  );
  const { data: mixtures } = mixturesAPI.useGetMixturesByTypeIdQuery({
    typeId: selectedTypeItem?.id ? selectedTypeItem.id : 0,
  });
  const newMixtures =
    mixtures?.map(({ id, name }) => ({ id: id, content: name })) || [];
  const [selectedMixtureItem, setSelectedMixtureItem] = useState<{
    id: number;
    content: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<IMixtureOrderForm>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IMixtureOrderForm> = async (data) => {
    EmailService.sendMixtureOrder(
      data.name,
      data.phone,
      data.address,
      data.email,
      count +
        (mixtures?.find((item) => item.id === selectedMixtureItem?.id)
          ?.unitOfMeasurement as string),
      price + (isPriceWithVAT ? "c НДС" : "без НДС"),
      selectedTypeItem?.content as string,
      selectedMixtureItem?.content as string,
      data.text ? data.text : "пусто"
    );

    reset({
      address: "",
      count: 0,
      email: "",
      name: "",
      phone: "",
      price: 0,
      text: "",
    });

    setSelectedMixtureItem(null);
  };

  const countChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(e.target.value);

    if (inputValue <= 0) {
      setCount(1);
    } else if (inputValue <= 10000000) {
      setCount(inputValue);
    }
  };

  useEffect(() => {
    if (selectedMixtureItem) {
      setPrice(
        Number(
          (
            count *
            Number(
              isPriceWithVAT
                ? mixtures?.find((item) => item.id === selectedMixtureItem?.id)
                    ?.priceWithVAT
                : mixtures?.find((item) => item.id === selectedMixtureItem?.id)
                    ?.priceWithoutVAT
            )
          ).toFixed(2)
        )
      );
    }
  }, [count, mixtures, selectedMixtureItem, isPriceWithVAT]);

  useEffect(() => {
    const modalRoot = document.querySelector("#modal-root");
    const firstDiv = modalRoot?.querySelector("div");
    firstDiv?.scrollTo({ top: 0 });
  }, [isSubmitSuccessful]);

  useEffect(() => {
    if (selectedTypeItem?.content) {
      setValue("mixtureType", selectedTypeItem?.content);
      setSelectedMixtureItem(null);
    }
  }, [selectedTypeItem]);

  useEffect(() => {
    if (selectedMixtureItem?.content)
      setValue("mixture", selectedMixtureItem?.content);
  }, [selectedMixtureItem]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.mixtureOrderModal}>
        <h2 className={cls.mixtureOrderModalTitle}>Оформление заказа</h2>
        {isSubmitSuccessful && (
          <InfoBlock blockType={1}>
            <p>Ваш заказ успешно отправлен!</p>
          </InfoBlock>
        )}
        <div className={cls.mixtureOrderModalContent}>
          <form
            className={cls.mixtureOrderModalForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <MySelect
              name="Типы растворов"
              array={newTypes}
              selectedItem={selectedTypeItem}
              setSelectedItem={setSelectedTypeItem}
              labelTitle="Список типов растворов"
              formName="mixtureType"
              control={control}
              rules={{ required: "Тип раствора должен быть выбран!" }}
              error={errors.mixtureType}
            />
            {selectedTypeItem && (
              <>
                <MySelect
                  name="Растворы"
                  array={newMixtures}
                  selectedItem={selectedMixtureItem}
                  setSelectedItem={setSelectedMixtureItem}
                  labelTitle="Список растворов"
                  formName="mixture"
                  control={control}
                  rules={{ required: "Раствор должен быть выбран!" }}
                  error={errors.mixture}
                />
              </>
            )}
            {selectedMixtureItem && (
              <>
                <MyInput
                  labelTitle={`Единицы измерения(${
                    mixtures?.find(
                      (item) => item.id === selectedMixtureItem?.id
                    )?.unitOfMeasurement
                  })`}
                  value={count}
                  onChange={countChangeHandler}
                  type="number"
                  placeholder="Введите количество товара..."
                  required
                  min={0}
                  step={0.5}
                  max="10000000"
                  register={register("count", {
                    required: "Количество не может быть пустым!",
                  })}
                  error={errors.count}
                />
                <label
                  className={classNames(
                    cls.mixtureOrderModalFormPrice,
                    "bold-title-text"
                  )}
                >
                  Предварительная цена: <span>{price} BYN</span>
                </label>
                <div className={cls.mixtureOrderModalFormCheckBox}>
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

export default MixtureOrderModal;
