import { NavLink } from 'react-router-dom';
import './Error.scss'

export default function Error() {
    return (
        <div className='error'>
            <div className='error__info'>
                <h1 className='error__h1'>Ой!</h1>
                <h3 className='error__h2'>Похоже, мы не можем найти нужную вам страницу</h3>
                <h4>Код ошибки: 404</h4>
                <h4>Вот несколько полезных ссылок:</h4>
                <div className='error__links'>
                <NavLink to='/learn-language'>Главная страница</NavLink><br/>
                <NavLink to="/cards">Карточки</NavLink><br/>
                <NavLink to="/themes">Темы</NavLink><br/>
                <NavLink to="quiz">Тест</NavLink>
                </div>
            </div>
            <img className="error__img" src="./src/assets/images/sad_cat.png" alt="Error"></img>
        </div>
    )
}