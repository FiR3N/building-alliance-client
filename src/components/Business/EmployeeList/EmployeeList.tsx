import { FC, useLayoutEffect, useEffect, useState } from "react";
import cls from "./EmployeeList.module.scss";
import { IEmployee } from "../../../models/IEmployee";
import EmployeeService from "../../../api/EmployeeService";
import { ClimbingBoxLoader } from "react-spinners";
import EmployeeItem from "../EmployeeItem/EmployeeItem";
import classNames from "classnames";

interface EmployeeListProps {}

const EmployeeList: FC<EmployeeListProps> = () => {
  const [employeeList, setEmployeeList] = useState<IEmployee[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    EmployeeService.getEmployees(10, page).then((response: any) =>
      setEmployeeList(response.data.rows)
    );
  }, []);

  // useEffect(() => {
  //   if (isLoading) {
  //     loadMore();
  //   }
  // }, [isLoading]);

  // const loadMore = async () => {
  //   await EmployeeService.getEmployees(3, page + 1).then((response: any) =>
  //     setEmployeeList((prev) => [...prev, ...response.data.rows])
  //   );
  //   setPage((prev) => prev++);
  //   setIsLoading(false);
  // };

  // const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
  //   console.log("scroll");
  //   const { scrollTop, clientHeight, scrollHeight } =
  //     e.target as HTMLDivElement;
  //   console.log(scrollHeight, scrollTop, clientHeight);

  //   if (scrollHeight - scrollTop === clientHeight && !isLoading) {
  //     setIsLoading(true);
  //   }
  // };

  // onScroll={handleScroll}
  return (
    <div
      className={classNames(cls.employeeList, "container")}
      id="employeeList"
    >
      {employeeList.length > 0 ? (
        employeeList.map((employee) => (
          <EmployeeItem key={employee.id} employee={employee} />
        ))
      ) : (
        <h2>{"Работников не найдено :< "}</h2>
      )}
      {isLoading && <ClimbingBoxLoader size={30} />}
    </div>
  );
};

export default EmployeeList;
