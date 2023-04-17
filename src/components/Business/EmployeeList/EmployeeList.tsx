import { FC } from "react";
import cls from "./EmployeeList.module.scss";
import { IEmployee } from "../../../models/IEmployee";
import EmployeeItem from "../EmployeeItem/EmployeeItem";
import classNames from "classnames";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../UI/Loader/Loader";
import sadSmile from "../../../assets/img/sad-smile.svg";
interface EmployeeListProps {}

const EmployeeList: FC<EmployeeListProps> = () => {
  // const [employeeList, setEmployeeList] = useState<IEmployee[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [page, setPage] = useState<number>(1);
  const { data: employeeList, error } = useFetch<IEmployee[]>(
    import.meta.env.VITE_API_URL + `/employee`
  );

  // useEffect(() => {
  // EmployeeService.getEmployees(10, page).then((response: any) =>
  //   setEmployeeList(response.data.rows)
  // );
  // }, []);

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
  if (error) {
    <h2 className={cls.employeeListError}>
      Неизвестная ошибка!{" "}
      <img className="smile-image" src={sadSmile} alt="sad-smile" />{" "}
    </h2>;
  }

  return (
    <div
      className={classNames(cls.employeeList, "container")}
      id="employeeList"
    >
      <h2 className={cls.employeeListTitle}>Мы ими гордимся!</h2>
      {employeeList ? (
        employeeList.length > 0 ? (
          <>
            {employeeList.map((employee) => (
              <EmployeeItem key={employee.id} employee={employee} />
            ))}
          </>
        ) : (
          <h2 className={cls.employeeListError}>
            Работников не найдено{" "}
            <img className="smile-image" src={sadSmile} alt="sad-smile" />
          </h2>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default EmployeeList;
