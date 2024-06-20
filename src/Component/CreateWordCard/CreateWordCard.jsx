import { useState, useEffect } from 'react';
import styles from './CreateWordCard.module.scss'

export default function({ id, english, transcription, russian, editCounter }) {
    const [translate, setTranslate] = useState(false);

    useEffect(() => setTranslate(false), [id])

    const checkTranslate = () => {
        setTranslate(!translate);
        editCounter();
    }

    return (
        <div className={styles.cardform} key={id}>
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

    