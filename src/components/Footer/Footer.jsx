import './Footer.scss';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <nav className="footer">
            <NavLink to='/'><img className="footer__logo" src="src/assets/images/logo.png" alt="LearnEnglish" /></NavLink>
            <div className='footer__buttons'>
            <NavLink to="/cards">Карточки</NavLink>
            <NavLink to="/themes">Темы</NavLink>
            <NavLink to="quiz">Тест</NavLink>
            </div>
        </nav>
    )
}