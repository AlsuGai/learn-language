import './Header.scss'

export default function Header() {
    return (
        <nav className="header">
            <img className="header__logo" src="src/assets/logo.png" alt="LearnEnglish" />
            <div className="header__buttons">
            <a href="#">Карточки</a>
            <a href="#">Таблица слов</a>
            <a href="#">Темы</a>
            <a href="#">Тест</a>
            </div>
        </nav>
    )
}