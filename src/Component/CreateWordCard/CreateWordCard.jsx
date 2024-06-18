import { useState, useEffect } from 'react';
import styles from './CreateWordCard.module.scss'

export default function({id, english, transcription, russian}) {
    const [translate, setTranslate] = useState(false);

    useEffect(() => setTranslate(false), [id])

    const checkTranslate = () => {
        setTranslate(!translate);
    }
    
    return (
        <div className={styles.cardform}>
            <div>
            <div className={styles.cardform__english}>{english}</div>
            <div className={styles.cardform__transcriprion}>{transcription}</div>
            </div>
            {translate ? (
                <div className={styles.cardform__translate}>{russian}</div>
            ) : (
                <div onClick={checkTranslate} className={styles.cardform__translate + ' ' + styles.cardbutton}>Проверить</div>
            )}
            </div>
    )
}

    