import { FC } from "react";
import cls from "./EmployeeItem.module.scss";
import { IEmployee } from "../../../models/IEmployee";

interface EmployeeItemProps {
  employee: IEmployee;
}

const EmployeeItem: FC<EmployeeItemProps> = ({ employee }) => {
  return (
    <div
      className={cls.employeeItem}
    >{`${employee.name} : ${employee.id}`}</div>
  );
};

export default EmployeeItem;
