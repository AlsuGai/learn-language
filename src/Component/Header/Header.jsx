import './Header.scss';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="header">
            <NavLink to='/learn-language/'><img className="header__logo" src="src/assets/images/logo.png" alt="LearnEnglish" /></NavLink>
            <div className="header__buttons">
            <NavLink to="/learn-language/cards">Карточки</NavLink>
            <NavLink to="/learn-language/themes">Темы</NavLink>
            <NavLink to="quiz">Тест</NavLink>
            </div>
        </nav>
    )
}