import { FC } from "react";
import cls from "../Footer.module.scss";
import classNames from "classnames";
import Socials from "../../../UI/Socials/Socials";

interface FooterCopyrightProps {}

const FooterCopyright: FC<FooterCopyrightProps> = () => {
  return (
    <div className={cls.footerCopyright}>
      <div className={classNames(cls.footerCopyrightContent, "container")}>
        <div className={cls.footerCopyrightInfo}>
          <p className="light-text">
            ОАО «Спецстроймеханизация» by{" "}
            <a
              href="https://github.com/FiR3N"
              target="_blank"
              className="light-link"
            >
              FiREN
            </a>
            . Все права защищены © 2023
          </p>
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default FooterCopyright;
