import { FC, useEffect, Suspense, lazy } from "react";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
const AdminSettingsContent = lazy(
  () => import("./AdminSettingsContent/AdminSettingsContent")
);

const AdminSettings: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <PageLayout title="Настройки" pathname={pathname}>
      <Suspense fallback={<Loader withMargins />}>
        <AdminSettingsContent />
      </Suspense>
    </PageLayout>
  );
};

export default AdminSettings;
