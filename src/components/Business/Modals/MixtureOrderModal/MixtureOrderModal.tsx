import { Dispatch, FC, SetStateAction, useState, useEffect } from "react";
import cls from "./MixtureOrderModal.module.scss";
import Modal from "../../../UI/Modal/Modal";
import MySelect from "../../../UI/MySelect/MySelect";
import { mixturesAPI } from "../../../../api/MixturesAPI";
import { mixturesTypesAPI } from "../../../../api/MixturesTypesAPI";
import MyInput from "../../../UI/MyInput/MyInput";
import MyButton from "../../../UI/MyButton/MyButton";

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
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

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

  useEffect(() => {
    if (selectedMixtureItem) {
      setPrice(
        Number(
          (
            count *
            Number(
              mixtures?.find((item) => item.id === selectedMixtureItem?.id)
                ?.priceWithVAT
            )
          ).toFixed(2)
        )
      );
    }
  }, [count, mixtures, selectedMixtureItem]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.mixtureOrderModal}>
        <h2 className={cls.mixtureOrderModalTitle}>Оформление заказа</h2>

        <div className={cls.mixtureOrderModalContent}>
          <form className={cls.mixtureOrderModalForm}>
            <MySelect
              name="Типы растворов"
              array={newTypes}
              selectedItem={selectedTypeItem}
              setSelectedItem={setSelectedTypeItem}
              labelTitle="Список типов растворов"
              selectedId={typeId}
            />
            {selectedTypeItem && (
              <>
                <MySelect
                  name="Растворы"
                  array={newMixtures}
                  selectedItem={selectedMixtureItem}
                  setSelectedItem={setSelectedMixtureItem}
                  labelTitle="Список растворов"
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
                  onChange={(e) => setCount(Number(e.currentTarget.value))}
                  type="number"
                  placeholder="Введите количество товара..."
                />
                <label className={cls.mixtureOrderModalFormPrice}>
                  Предварительная цена: <span>{price} BYN</span>
                </label>
              </>
            )}
            <MyInput
              labelTitle="Название организации"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Введите имя организации либо ФИО..."
              // register={register("name", {
              //   required: "Имя не может быть пустым!",
              // })}
              // error={errors.name}
            />
            <MyInput
              labelTitle="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.currentTarget.value)}
              placeholder="Введите телефон..."
              // register={register("name", {
              //   required: "Имя не может быть пустым!",
              // })}
              // error={errors.name}
            />
            <MyInput
              labelTitle="Почта"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Введите почту..."
              // register={register("name", {
              //   required: "Имя не может быть пустым!",
              // })}
              // error={errors.name}
            />
            <MyButton>Оформить заказ</MyButton>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default MixtureOrderModal;
