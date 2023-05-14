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
      <div>
        <MyButton onClick={() => setIsVacancyModalOpen(true)}>
          Добавить вакансию
        </MyButton>
        <VacancyList isAdmin />
      </div>
    </>
  );
};

export default AdminVacancyPage;
