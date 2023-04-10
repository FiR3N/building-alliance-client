import { FC } from "react";
import cls from "./Employees.module.scss";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";
import EmployeeList from "../../components/Business/EmployeeList/EmployeeList";

interface EmployeesProps {}

const Employees: FC<EmployeesProps> = () => {
  const { pathname } = useLocation();

  return (
    <PageLayout title={"Работники"} pathname={pathname}>
      <EmployeeList />
    </PageLayout>
  );
};

export default Employees;
