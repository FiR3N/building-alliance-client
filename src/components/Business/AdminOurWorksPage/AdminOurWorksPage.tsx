import { FC, useState } from "react";
import MyButton from "../../UI/MyButton/MyButton";
import OurWorksList from "../OurWorksList/OurWorksList";
import OurWorkModal from "../Modals/OurWorksModal/OurWorksModal";

const AdminOurWorksPage: FC = () => {
  const [isOurWorksModalOpen, setIsOurWorksModalOpen] = useState(false);
  return (
    <>
      {isOurWorksModalOpen && (
        <OurWorkModal closeMethod={setIsOurWorksModalOpen} />
      )}
      <div className="container">
        <MyButton onClick={() => setIsOurWorksModalOpen(true)}>
          Добавить объект
        </MyButton>
      </div>
      <OurWorksList isAdmin />
    </>
  );
};

export default AdminOurWorksPage;
