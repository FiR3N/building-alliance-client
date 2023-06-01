import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import cls from "./VehicleModal.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "../../../UI/Modal/Modal";
import InfoBlock from "../../../Blocks/InfoBlock/InfoBlock";
import MyInput from "../../../UI/MyInput/MyInput";
import MyButton from "../../../UI/MyButton/MyButton";
import { IMixture } from "../../../../models/Entity/IMixture";
import MySelect from "../../../UI/MySelect/MySelect";
import { mixturesAPI } from "../../../../api/MixturesAPI";
import { IMixtureForm } from "../../../../models/Forms/IMixtureForm";

interface MixtureModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  mixture?: IMixture;
}

const MixtureModal: FC<MixtureModalProps> = ({ closeMethod, mixture }) => {
  const [name, setName] = useState<string>(mixture ? mixture.name : "");
  const [priceWithoutVAT, setPriceWithoutVAT] = useState<number>(
    mixture ? mixture.priceWithoutVAT : 0
  );
  const [priceWithVAT, setPriceWithVAT] = useState<number>(
    mixture ? mixture.priceWithVAT : 0
  );

  const [putMIxture, { error: putError }] = mixturesAPI.usePutMixtureMutation();
  const [createMixture, { error: createError }] =
    mixturesAPI.usePostMixtureMutation();

  const {
    register,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
  } = useForm<IMixtureForm>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IMixtureForm> = async (data) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("priceWithVAT", String(priceWithVAT));
    formData.append("priceWithoutVAT", String(priceWithoutVAT));

    if (mixture) {
      await putMIxture({ id: mixture.id, formData: formData }).unwrap();
    } else {
      await createMixture({ formData: formData }).unwrap();
    }
  };

  const handleInputPriceWithoutVATChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    const regex = /^-?\d*([.,]\d+)?$/;
    if (regex.test(inputValue)) {
      setPriceWithoutVAT(Number(inputValue));
    }
  };

  const handleInputPriceWithVATChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    const regex = /^-?\d*([.,]\d+)?$/;
    if (regex.test(inputValue)) {
      setPriceWithVAT(Number(inputValue));
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
        {mixture ? (
          <h2 className={cls.vehicleModalTitle}>Редактирование</h2>
        ) : (
          <h2 className={cls.vehicleModalTitle}>Создание</h2>
        )}

        {isSubmitSuccessful && (
          <InfoBlock blockType={1}>
            {mixture
              ? `Раствор${mixture?.id} успешно отредактирован`
              : `Раствор успешно добавлена`}
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
            placeholder="Введите название раствора..."
            required
            maxLength={100}
            register={register("name", {
              required: "Название не может быть пустым!",
            })}
            error={errors.name}
          />
          <MySelect labelTitle="Типы растворов" />
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
                value: /^(?!0+$)\d*$/,
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
                value: /^(?!0+$)\d*$/,
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

export default MixtureModal;
