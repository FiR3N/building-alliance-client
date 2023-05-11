import { FC, Suspense, lazy, useEffect } from "react";
import cls from "./Admin.module.scss";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import Loader from "../../components/UI/Loader/Loader";
import { useLocation } from "react-router-dom";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import classNames from "classnames";
import AdminSwitcher from "../../components/Business/AdminSwitcher/AdminSwitcher";

const AdminInfo = lazy(
  () => import("../../components/Business/AdminInfo/AdminInfo")
);

interface AdminProps {}

const Admin: FC<AdminProps> = () => {
  const { pathname } = useLocation();
  const { user } = useTypeSelector((state) => state.userReducer);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <PageLayout title="Админ панель" pathname={pathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <div className={classNames(cls.admin, "container")}>
          <AdminInfo />
          <AdminSwitcher />
        </div>
      </Suspense>
    </PageLayout>
  );
};

export default Admin;
