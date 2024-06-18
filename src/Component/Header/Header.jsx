import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import img_logo from "../../assets/images/logo.png";

export default function Header() {
    return (
        <nav className={styles.header}>
            <NavLink to='/learn-language/'><img className={styles.header__logo} src={img_logo} alt="LearnEnglish" /></NavLink>
            <div className={styles.header__buttons}>
            <NavLink to="/learn-language/cards">Карточки</NavLink>
            <NavLink to="/learn-language/themes">Темы</NavLink>
            </div>
        </nav>
    )
}