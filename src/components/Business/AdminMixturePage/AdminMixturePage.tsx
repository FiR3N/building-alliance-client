import { FC, useState } from "react";
import MyButton from "../../UI/MyButton/MyButton";
import VehicleList from "../VehicleList/VehicleList";
import MixturesTypesList from "../MixturesTypesList/MixturesTypesList";
import MixtureModal from "../Modals/MixtureModal/MixtureModal";

const AdminMixturePage: FC = () => {
  const [isMixtureTypeModalOpen, setIsMixtureTypeModalOpen] = useState(false);
  const [isMixtureModalOpen, setIsMixtureModalOpen] = useState(false);

  return (
    <>
      {isMixtureTypeModalOpen && (
        <></>
        // <VacancyModal closeMethod={setIsVehicleModalOpen} />
      )}
      {isMixtureModalOpen && (
        <MixtureModal closeMethod={setIsMixtureModalOpen} />
      )}
      <div className="container" style={{ display: "flex", gap: "20px" }}>
        <MyButton onClick={() => setIsMixtureTypeModalOpen(true)}>
          Добавить тип раствора
        </MyButton>
        <MyButton onClick={() => setIsMixtureModalOpen(true)}>
          Добавить раствор
        </MyButton>
      </div>
      <MixturesTypesList isAdmin />
    </>
  );
};

export default AdminMixturePage;
