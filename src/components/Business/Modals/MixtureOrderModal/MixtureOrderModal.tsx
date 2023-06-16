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
import ReCAPTCHA from "react-google-recaptcha";

interface MixtureOrderModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  typeId?: number;
}

const MixtureOrderModal: FC<MixtureOrderModalProps> = ({
  closeMethod,
  typeId,
}) => {
  const [length, setLength] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");

  const [count, setCount] = useState<string>("1");
  const [price, setPrice] = useState<number>(0);
  const [isPriceWithVAT, setIsPriceWithVAT] = useState<boolean>(true);
  const [priceError, setPriceError] = useState<boolean>(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean | null>(
    null
  );
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
    formState: { errors, isSubmitting },
  } = useForm<IMixtureOrderForm>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IMixtureOrderForm> = async (data) => {
    if (isCaptchaVerified) {
      if (price <= 0) {
        setPriceError(true);
        setIsSubmitSuccessful(false);
      } else {
        EmailService.sendMixtureOrder(
          data.name,
          data.phone,
          data.address,
          data.email,
          count +
            " " +
            (mixtures?.find((item) => item.id === selectedMixtureItem?.id)
              ?.unitOfMeasurement as string),
          price + (isPriceWithVAT ? " c НДС" : " без НДС"),
          selectedTypeItem?.content as string,
          selectedMixtureItem?.content as string,
          data.text ? data.text : "пусто"
        );
        setPriceError(false);
        setIsSubmitSuccessful(true);
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
      }
    } else {
      setIsCaptchaVerified(false);
    }
  };

  const handleInputNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    methodChange: Dispatch<SetStateAction<string>>
  ) => {
    const inputValue = e.target.value;
    const valueToNumber = Number(e.target.value);
    const regex = /^\d*([.]\d{0,2})?$/;
    if (regex.test(inputValue) && valueToNumber < 100000) {
      methodChange(inputValue);
    }
  };

  useEffect(() => {
    if (selectedMixtureItem) {
      setPrice(
        Number(
          (
            Number(count) *
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
  }, [isSubmitSuccessful, priceError, isCaptchaVerified]);

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

  useEffect(() => {
    if (length && width && height) {
      if (
        mixtures?.find((item) => item.id === selectedMixtureItem?.id)
          ?.unitOfMeasurement === "т"
      ) {
        setCount(
          (Number(length) * Number(width) * Number(height) * 2.3).toFixed(2)
        );
        setValue(
          "count",
          Number(
            (Number(length) * Number(width) * Number(height) * 2.3).toFixed(2)
          )
        );
      } else {
        setCount((Number(length) * Number(width) * Number(height)).toFixed(2));
        setValue(
          "count",
          Number((Number(length) * Number(width) * Number(height)).toFixed(2))
        );
      }
    }
  }, [length, width, height, selectedMixtureItem]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.mixtureOrderModal}>
        <h2 className={cls.mixtureOrderModalTitle}>Оформление заказа</h2>
        {isSubmitSuccessful && (
          <InfoBlock blockType={1}>
            <p>Ваш заказ успешно отправлен!</p>
          </InfoBlock>
        )}
        {priceError && (
          <InfoBlock blockType={-1}>
            <p>Количетсво раствора не можеть быть равным нулю!</p>
          </InfoBlock>
        )}
        {isCaptchaVerified === false && (
          <InfoBlock blockType={-1}>Подвердите, что вы человек</InfoBlock>
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
                <div className={cls.mixtureOrderModalFormCapacityItems}>
                  <MyInput
                    labelTitle={`Длина участка(м)`}
                    value={length}
                    onChange={(e) => handleInputNumberChange(e, setLength)}
                    type="number"
                    placeholder="Длина..."
                    step={0.5}
                  />
                  <MyInput
                    labelTitle={`Ширина участка(м)`}
                    value={width}
                    onChange={(e) => handleInputNumberChange(e, setWidth)}
                    type="number"
                    placeholder="Ширина..."
                    step={0.5}
                  />
                  <MyInput
                    labelTitle={`Высота участка(м)`}
                    value={height}
                    onChange={(e) => handleInputNumberChange(e, setHeight)}
                    type="number"
                    placeholder="Высота..."
                    step={0.5}
                  />
                </div>

                <MyInput
                  labelTitle={`Количество (${
                    mixtures?.find(
                      (item) => item.id === selectedMixtureItem?.id
                    )?.unitOfMeasurement
                  })`}
                  value={count}
                  onChange={(e) => handleInputNumberChange(e, setCount)}
                  type="number"
                  placeholder="Введите количество раствора..."
                  required
                  step={0.5}
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
              labelTitle="Название организации"
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
            <div className={cls.mixtureOrderModalFormRecaptcha}>
              <ReCAPTCHA
                sitekey="6LdH3J0mAAAAAMpTtEyi3_OdpxAnTiP7nsd5ZbRd"
                onChange={() => setIsCaptchaVerified(true)}
              />
            </div>
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
