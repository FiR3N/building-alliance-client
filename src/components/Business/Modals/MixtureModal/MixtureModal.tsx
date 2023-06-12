import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import cls from "./MixtureModal.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "../../../UI/Modal/Modal";
import InfoBlock from "../../../Blocks/InfoBlock/InfoBlock";
import MyInput from "../../../UI/MyInput/MyInput";
import MyButton from "../../../UI/MyButton/MyButton";
import { IMixture } from "../../../../models/Entity/IMixture";
import MySelect from "../../../UI/MySelect/MySelect";
import { mixturesAPI } from "../../../../api/MixturesAPI";
import { IMixtureForm } from "../../../../models/Forms/IMixtureForm";
import { mixturesTypesAPI } from "../../../../api/MixturesTypesAPI";

interface MixtureModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  mixture?: IMixture;
}

const MixtureModal: FC<MixtureModalProps> = ({ closeMethod, mixture }) => {
  const [name, setName] = useState<string>(mixture ? mixture.name : "");
  const [priceWithoutVAT, setPriceWithoutVAT] = useState<string>(
    mixture ? String(mixture.priceWithoutVAT) : ""
  );

  const [priceWithVAT, setPriceWithVAT] = useState<string>(
    mixture ? String(mixture.priceWithVAT) : ""
  );
  const [unitOfMeasurement, setUnitOfMeasurement] = useState<string>(
    mixture ? mixture.unitOfMeasurement : ""
  );
  const { data: mixturesTypes, error: mixturesTypesError } =
    mixturesTypesAPI.useGetMixturesTypesQuery({});
  const [putMIxture, { error: putError }] = mixturesAPI.usePutMixtureMutation();
  const [createMixture, { error: createError }] =
    mixturesAPI.usePostMixtureMutation();

  let newMixturesTypes =
    mixturesTypes?.map(({ id, name }) => ({ id: id, content: name })) || [];
  const [selectedTypeItem, setSelectedTypeItem] = useState<{
    id: number;
    content: string;
  } | null>(
    mixture?.typeId
      ? newMixturesTypes.find((item) => item.id === mixture.typeId) || null
      : null
  );
  const {
    register,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
    control,
    setValue,
  } = useForm<IMixtureForm>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IMixtureForm> = async (data) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("typeId", String(selectedTypeItem?.id));
    formData.append("priceWithVAT", priceWithVAT);
    formData.append("priceWithoutVAT", priceWithoutVAT);
    formData.append("unitOfMeasurement", unitOfMeasurement);

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
    const regex = /^\d*([.]\d{0,2})?$/;
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

  useEffect(() => {
    if (selectedTypeItem?.content) setValue("type", selectedTypeItem?.content);
  }, [selectedTypeItem]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.mixtureModal}>
        {mixture ? (
          <h2 className={cls.mixtureModalTitle}>Редактирование</h2>
        ) : (
          <h2 className={cls.mixtureModalTitle}>Создание</h2>
        )}

        {isSubmitSuccessful && (
          <InfoBlock blockType={1}>
            {mixture
              ? `Раствор ${mixture?.id} успешно отредактирован`
              : `Раствор успешно добавлен`}
          </InfoBlock>
        )}
        {putError && (
          <InfoBlock blockType={-1}>Ошибка редактирования!</InfoBlock>
        )}
        {createError && <InfoBlock blockType={-1}>Ошибка создания!</InfoBlock>}
        <form
          className={cls.mixtureModalForm}
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
          <MySelect
            labelTitle="Типы растворов"
            name="Тип раствора"
            array={
              !mixturesTypesError
                ? newMixturesTypes
                : [{ id: 1, content: "Ошибка получения" }]
            }
            selectedItem={selectedTypeItem}
            setSelectedItem={setSelectedTypeItem}
            formName="type"
            control={control}
            rules={{ required: "Тип раствора должен быть выбран!" }}
            error={errors.type}
          />
          <MyInput
            labelTitle="Единица измерения"
            value={unitOfMeasurement}
            onChange={(e) => setUnitOfMeasurement(e.currentTarget.value)}
            placeholder="Введите единицу измерения..."
            required
            maxLength={20}
            register={register("unitOfMeasurement", {
              required: "Единица измерения не может быть пустой!",
            })}
            error={errors.unitOfMeasurement}
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
            placeholder={
              Number(priceWithoutVAT) > 0
                ? (
                    Number(priceWithoutVAT) +
                    Number(priceWithoutVAT) * 0.2
                  ).toString()
                : "Введите цену с НДС"
            }
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

export default MixtureModal;
