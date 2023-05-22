import { FC, Suspense, lazy, useEffect } from "react";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
const AboutContent = lazy(() => import("./AboutContent/AboutContent"));

const About: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <PageLayout pathname={pathname} title="Об организации">
      <Suspense fallback={<Loader withMargins={true} />}>
        <AboutContent />
      </Suspense>
    </PageLayout>
    //
  );
};

export default About;
