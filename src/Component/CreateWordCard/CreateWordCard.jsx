import img_sound from "../../assets/images/sound.png";
import { useState, useEffect, useRef, forwardRef } from "react";
import styles from "./CreateWordCard.module.scss";

export default function ({ id, english, transcription, russian, editCounter }) {
  const [translate, setTranslate] = useState(false);

  useEffect(() => setTranslate(false), [id]);

  const checkTranslate = () => {
    setTranslate(!translate);
    editCounter();
  };

  const speechText = () => {
    const speechUtterance = new SpeechSynthesisUtterance();
    speechUtterance.text = english;
    speechSynthesis.speak(speechUtterance);
  };

  return (
    <div className={styles.cardform} key={id}>
      <div>
        <div className={styles.cardform__rigth}>
          <button onClick={speechText}>
            <img src={img_sound} alt="Воспроизвести" />
          </button>
        </div>
        <div className={styles.cardform__english}>{english}</div>
        <div className={styles.cardform__transcriprion}>{transcription}</div>
      </div>
      {translate ? (
        <div className={styles.cardform__translate}>{russian}</div>
      ) : (
        <div
          onClick={checkTranslate}
          className={`${styles.cardform__translate} ${styles.cardbutton}`}
        >
          Проверить
        </div>
      )}
    </div>
  );
}
