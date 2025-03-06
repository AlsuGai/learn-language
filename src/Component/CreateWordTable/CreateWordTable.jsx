import { useEffect, useState } from "react";
import img_edit from "../../assets/images/edit.png";
import img_save from "../../assets/images/save.png";
import img_delete from "../../assets/images/delete.png";
import img_sound from "../../assets/images/sound.png";
import img_cancel from "../../assets/images/cancel.png";
import styles from "./CreateWordTable.module.scss";

export default function CreateWordTable({ word }) {
  const { id, english, transcription, russian, tags } = word;
  const [editing, setEditing] = useState(false);
  const [editWord, setEditWord] = useState({
    editEnglish: english,
    editTranscription: transcription,
    editRussian: russian,
    tags: tags,
  });

  const [inputStyles, setInputStyles] = useState({
    english: styles.input,
    transcription: styles.input,
    russian: styles.input,
    tags: styles.input,
  });

  const [error, setError] = useState({
    english: false,
    transcription: false,
    russian: false,
    tags: false,
  });

  //const [styleEng, setStyleEng] = useState();
  //const [styleTranscription, setStyleTranscription] = useState(styles.input);
  //const [styleRus, setStyleRus] = useState(styles.input);
  //const [styleTAg, setStyleTag] = useState(styles.input);
  //const [engWordError, setEngWordError] = useState(false);
  //const [rusWordError, setRusWordError] = useState(false);
  //const [transcriptionError, setTranscriptionError] = useState(false);
  //const [tagError, setTagError] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const reEng = /[A-Za-z]/;
  const reRus = /[а-яА-ЯЁё]/;
  const reTranscript = /\[+[A-Za-zʌ:ɜəæɔʒ∫θðŋ'ɑɪɛ]+\]/;
  const reTag = /[A-Za-z]/;

  const handleEdit = (e) => {
    e.preventDefault();
    setEditing(true);
    setInputStyles({
      english: styles.input,
      transcription: styles.input,
      russian: styles.input,
      tags: styles.input,
    });
  };

  const handleSave = (e) => {
    // Here you would typically send the edited data to your backend server
    e.preventDefault();
    setEditing(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFormValid(true);
    setEditWord({
      editEnglish: english,
      editTranscription: transcription,
      editRussian: russian,
      tags: tags,
    });
    setEditing(false);
  };

  const speechText = (e) => {
    e.preventDefault();
    const speechUtterance = new SpeechSynthesisUtterance();
    speechUtterance.text = english;
    speechSynthesis.speak(speechUtterance);
  };

  useEffect(() => {
    if (error.english || error.transcription || error.russian || error.tags) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [{ ...error }]);

  const changeEnglish = (e) => {
    setEditWord({ ...editWord, editEnglish: e.target.value });
    if (!reEng.test(String(e.target.value).toLowerCase())) {
      setInputStyles({ ...inputStyles, english: styles.inputRed });
      setError({ ...error, english: true });
    } else {
      setInputStyles({ ...inputStyles, english: styles.input });
      setError({ ...error, english: false });
    }
  };

  const changeTranscription = (e) => {
    setEditWord({ ...editWord, editTranscription: e.target.value });
    if (!reTranscript.test(String(e.target.value).toLocaleLowerCase())) {
      setInputStyles({ ...inputStyles, transcription: styles.inputRed });
      setError({ ...error, transcription: true });
    } else {
      setInputStyles({ ...inputStyles, transcription: styles.input });
      setError({ ...error, transcription: false });
    }
  };

  const changeRussian = (e) => {
    setEditWord({ ...editWord, editRussian: e.target.value });
    if (!reRus.test(String(e.target.value).toLowerCase())) {
      setInputStyles({ ...inputStyles, russian: styles.inputRed });
      setError({ ...error, russian: true });
    } else {
      setInputStyles({ ...inputStyles, russian: styles.input });
      setError({ ...error, russian: false });
    }
  };

  const changeTag = (e) => {
    setEditWord({ ...editWord, tags: e.target.value });
    if (!reTag.test(String(e.target.value).toLowerCase())) {
      setInputStyles({ ...inputStyles, tags: styles.inputRed });
      setError({ ...error, tags: true });
    } else {
      setInputStyles({ ...inputStyles, tags: styles.input });
      setError({ ...error, tags: false });
    }
  };

  return (
    <>
      {!formValid && (
        <div style={{ color: "red" }}>
          Пожалуйста, заполните корректно форму
        </div>
      )}
      <div className={styles.word} key={id}>
        <div className={styles.word__div}>
          {editing ? (
            <input
              className={inputStyles.english}
              type="text"
              value={editWord.editEnglish}
              onChange={changeEnglish}
            />
          ) : (
            editWord.editEnglish
          )}
        </div>
        <div className={styles.word__div}>
          {editing ? (
            <input
              className={inputStyles.transcription}
              type="text"
              value={editWord.editTranscription}
              onChange={changeTranscription}
            />
          ) : (
            editWord.editTranscription
          )}
        </div>
        <div className={styles.word__div}>
          {editing ? (
            <input
              className={inputStyles.russian}
              type="text"
              value={editWord.editRussian}
              onChange={changeRussian}
            />
          ) : (
            editWord.editRussian
          )}
        </div>
        <div className={styles.word__div}>
          {editing ? (
            <input
              className={inputStyles.tags}
              type="text"
              value={editWord.tags}
              onChange={changeTag}
            />
          ) : (
            editWord.tags
          )}
        </div>
        <div className={styles.tableicons}>
          {editing ? (
            <>
              <button onClick={handleSave} disabled={!formValid}>
                <img src={img_save} alt="Сохранить" />
              </button>
              <button onClick={handleCancel}>
                <img
                  className={styles.cancel}
                  src={img_cancel}
                  alt="Отменить"
                />
              </button>
            </>
          ) : (
            <>
              <button onClick={handleEdit}>
                <img src={img_edit} alt="Редактировать" />
              </button>
              <button>
                <img src={img_delete} alt="Удалить" />
              </button>
              <button onClick={speechText}>
                <img src={img_sound} alt="Воспроизнести" />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
