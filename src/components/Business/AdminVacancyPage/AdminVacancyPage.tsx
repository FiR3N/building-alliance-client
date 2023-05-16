import { FC, useState } from "react";
import MyButton from "../../UI/MyButton/MyButton";
import VacancyList from "../VacanciesList/VacancyList";
import VacancyModal from "../Modals/VacancyModal/VacancyModal";

const AdminVacancyPage: FC = () => {
  const [isVacancyModalOpen, setIsVacancyModalOpen] = useState(false);
  return (
    <>
      {isVacancyModalOpen && (
        <VacancyModal closeMethod={setIsVacancyModalOpen} />
      )}
      <div className="container">
        <MyButton onClick={() => setIsVacancyModalOpen(true)}>
          Добавить вакансию
        </MyButton>
      </div>
      <VacancyList isAdmin />
    </>
  );
};

export default AdminVacancyPage;
