import styles from './Cards.module.scss'
import { useState, useEffect } from 'react'
import img_arroleft from "../../assets/images/arrowleft.png";
import img_arroright from "../../assets/images/arrowright.png";

export default function Cards() {

    const [translate, setTranslate] = useState("Проверить");

    const checkTranslate = (e) => {
        setTranslate("корзина");
        e.target.classList.remove('cardbutton');
    }

    return( 
        <div>
            <h2>Карточки</h2>
            <div className={styles.cards}>
            <button><img src={img_arroleft} alt="Назад" /></button>
            <div className={styles.cardform}>
                <div>
            <div className={styles.cardform__english}>basket</div>
            <div className={styles.cardform__transcriprion}>[ˈbɑːskɪt]</div>
            </div>
            <div onClick={checkTranslate} className={styles.cardform__translate + ' ' + styles.cardbutton}>{translate}</div>
            </div>
        <button><img src={img_arroright} alt="Следующее"/></button>
            </div>
        </div>
    ) 
}