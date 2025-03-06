import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";
import img_logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <nav className={styles.footer}>
      <NavLink to="/learn-language/">
        <img
          className={styles.footer__logo}
          src={img_logo}
          alt="LearnEnglish"
        />
      </NavLink>
      <div className={styles.footer__buttons}>
        <NavLink to="/learn-language/cards">Карточки</NavLink>
        <NavLink to="/learn-language/themes">Темы</NavLink>
      </div>
      <div className={styles.copy}>
        &copy; Сайт разработан Гайнутдиновой Алсу в рамках учебного проекта
        ITGIRLS
      </div>
    </nav>
  );
}
