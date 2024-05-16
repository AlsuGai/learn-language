import './Header.scss';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="header">
            <NavLink to='/'><img className="header__logo" src="src/assets/images/logo.png" alt="LearnEnglish" /></NavLink>
            <div className="header__buttons">
            <NavLink to="/cards">Карточки</NavLink>
            <NavLink to="/themes">Темы</NavLink>
            <NavLink to="quiz">Тест</NavLink>
            </div>
        </nav>
    )
}