import { FC, memo } from "react";
import cls from "./Footer.module.scss";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
import FooterLinks from "./FooterLinks/FooterLinks";
import footerBg from "../../../assets/img/footer-bg.webp";
interface FooterProps {}

const Footer: FC<FooterProps> = memo(() => {
  return (
    <footer className={cls.footer}>
      <img className={cls.bgImg} src={footerBg} alt="footer-img" />
      <FooterLinks />
      <FooterCopyright />
    </footer>
  );
});

export default Footer;
