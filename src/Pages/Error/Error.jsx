import { NavLink } from 'react-router-dom';
import styles from './Error.module.scss';
import img_error from "../../assets/images/sad_cat.png";

export default function Error() {
    return (
        <div className={styles.error}>
            <div className={styles.error__info}>
                <h1 className={styles.error__h1}>Ой!</h1>
                <h3 className={styles.error__h2}>Похоже, мы не можем найти нужную вам страницу</h3>
                <h4>Код ошибки: 404</h4>
                <h4>Вот несколько полезных ссылок:</h4>
                <div className={styles.error__links}>
                <NavLink to='/learn-language'>Главная страница</NavLink><br/>
                <NavLink to="/learn-language/cards">Карточки</NavLink><br/>
                <NavLink to="/themes">Темы</NavLink><br/>
                </div>
            </div>
            <img className={styles.error__img} src={img_error} alt="Error"></img>
        </div>
    )
}