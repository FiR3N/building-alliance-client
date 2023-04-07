import { FC } from "react";
import cls from "./Contact.module.scss";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const { pathname } = useLocation();
  // const currentEngName = pathname.split("/").pop() || "unknow";
  return (
    <PageLayout title="Обратная связь" pathname={pathname}>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
      <div className={cls.contact}>Hello from Contact</div>
    </PageLayout>
  );
};

export default Contact;
