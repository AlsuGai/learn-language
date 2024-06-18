import { useState, useEffect } from 'react';
import styles from './CreateWordCard.module.scss'

export default function() {
    const [translate, setTranslate] = useState("Проверить");

    const checkTranslate = (e) => {
        setTranslate("корзина");
        e.target.classList.remove('cardbutton');
    }
    
    return (
        <div className={styles.cardform}>
            <div>
            <div className={styles.cardform__english}>basket</div>
            <div className={styles.cardform__transcriprion}>[ˈbɑːskɪt]</div>
            </div>
            <div onClick={checkTranslate} className={styles.cardform__translate + ' ' + styles.cardbutton}>{translate}</div>
            </div>
    )
}

    