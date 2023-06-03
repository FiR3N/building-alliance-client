import { FC, useState } from "react";
import MyButton from "../../UI/MyButton/MyButton";
import VehicleList from "../VehicleList/VehicleList";
import MixturesTypesList from "../MixturesTypesList/MixturesTypesList";
import MixtureModal from "../Modals/MixtureModal/MixtureModal";
import MixturesTypesModal from "../Modals/MixturesTypesModal/MixturesTypesModal";
import MixturesTypesDeleteModal from "../Modals/MixturesTypesDeleteModal/MixturesTypesDeleteModal";

const AdminMixturePage: FC = () => {
  const [isMixtureTypeModalOpen, setIsMixtureTypeModalOpen] = useState(false);
  const [isMixtureTypeDeleteModalOpen, setIsMixtureTypeDeleteModalOpen] =
    useState(false);
  const [isMixtureModalOpen, setIsMixtureModalOpen] = useState(false);

  return (
    <>
      {isMixtureTypeModalOpen && (
        <MixturesTypesModal closeMethod={setIsMixtureTypeModalOpen} />
      )}
      {isMixtureModalOpen && (
        <MixtureModal closeMethod={setIsMixtureModalOpen} />
      )}
      {isMixtureTypeDeleteModalOpen && (
        <MixturesTypesDeleteModal
          closeMethod={setIsMixtureTypeDeleteModalOpen}
        />
      )}
      <div className="container" style={{ display: "flex", gap: "20px" }}>
        <MyButton onClick={() => setIsMixtureTypeModalOpen(true)}>
          Добавить тип раствора
        </MyButton>
        <MyButton onClick={() => setIsMixtureModalOpen(true)}>
          Добавить раствор
        </MyButton>
        <MyButton onClick={() => setIsMixtureTypeDeleteModalOpen(true)}>
          Удалить тип раствора
        </MyButton>
      </div>
      <MixturesTypesList isAdmin />
    </>
  );
};

export default AdminMixturePage;
