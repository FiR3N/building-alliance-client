import { FC } from "react";
import cls from "./EmployeeItem.module.scss";
import { IEmployee } from "../../../models/IEmployee";
import classNames from "classnames";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

interface EmployeeItemProps {
  employee: IEmployee;
}

const EmployeeItem: FC<EmployeeItemProps> = ({ employee }) => {
  if (!employee.isShowable) {
    return <></>;
  }

  return (
    <div className={cls.employeeItem}>
      <img
        src={import.meta.env.VITE_API_URL + "/images/" + employee.img}
        alt={employee.name}
        className={cls.employeeItemImg}
      />
      <div className={cls.employeeItemInfo}>
        <p
          className={cls.employeeItemName}
        >{`${employee.surname} ${employee.name} ${employee.patronymic}`}</p>
        <p className={classNames(cls.employeeItemPost, "default-text")}>
          {employee.post}
        </p>

        <p className={classNames(cls.employeeItemDesc, "default-text")}>
          {employee.description}
        </p>
        <p className={cls.employeeItemContact}>
          <MdEmail /> {employee.telephone}
        </p>
        <p className={cls.employeeItemContact}>
          <BsFillTelephoneFill />
          {employee.email}
        </p>
      </div>
    </div>
  );
};

export default EmployeeItem;
