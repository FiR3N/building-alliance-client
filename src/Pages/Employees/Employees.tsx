import { FC, Suspense, lazy } from "react";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
const EmployeeList = lazy(
  () => import("../../components/Business/EmployeeList/EmployeeList")
);

interface EmployeesProps {}

const Employees: FC<EmployeesProps> = () => {
  const { pathname } = useLocation();

  return (
    <PageLayout title={"Работники"} pathname={pathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <EmployeeList />
      </Suspense>
    </PageLayout>
  );
};

export default Employees;
