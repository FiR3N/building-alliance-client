import { FC, Suspense, lazy, useEffect } from "react";
import cls from "./Admin.module.scss";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import Loader from "../../components/UI/Loader/Loader";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

const AdminInfo = lazy(
  () => import("../../components/Business/AdminInfo/AdminInfo")
);
const AdminSwitcher = lazy(
  () => import("../../components/Business/AdminSwitcher/AdminSwitcher")
);

const Admin: FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <PageLayout title="Админ панель" pathname={pathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <div className={classNames(cls.admin)}>
          <AdminInfo />
          <AdminSwitcher />
        </div>
      </Suspense>
    </PageLayout>
  );
};

export default Admin;
