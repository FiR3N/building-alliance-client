import { FC, useState } from "react";
import MyButton from "../../UI/MyButton/MyButton";
import VehicleList from "../VehicleList/VehicleList";
import VehicleModal from "../Modals/VehicleModal/VehicleModal";

const AdminVehiclePage: FC = () => {
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);
  return (
    <>
      {isVehicleModalOpen && (
        <VehicleModal closeMethod={setIsVehicleModalOpen} />
      )}
      <div className="container">
        <MyButton onClick={() => setIsVehicleModalOpen(true)}>
          Добавить технику
        </MyButton>
      </div>
      <VehicleList isAdmin />
    </>
  );
};

export default AdminVehiclePage;
