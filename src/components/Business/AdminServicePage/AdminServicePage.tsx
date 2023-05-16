import { FC, useState } from "react";
import MyButton from "../../UI/MyButton/MyButton";
import ServiceList from "../ServiceList/ServiceList";
import ServiceModal from "../Modals/ServiceModal/ServiceModal";

const AdminServicePage: FC = () => {
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  return (
    <>
      {isServiceModalOpen && (
        <ServiceModal closeMethod={setIsServiceModalOpen} />
      )}
      <div className="container">
        <MyButton onClick={() => setIsServiceModalOpen(true)}>
          Добавить услугу
        </MyButton>
      </div>
      <ServiceList isAdmin />
    </>
  );
};

export default AdminServicePage;
