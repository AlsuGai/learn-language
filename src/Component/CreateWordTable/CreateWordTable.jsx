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
const [styleEng, setStyleEng] = useState(styles.input);
const [styleTranscription, setStyleTranscription] = useState(styles.input);
const [styleRus, setStyleRus] = useState(styles.input);
const [styleTAg, setStyleTag] = useState(styles.input);
const [engWordError, setEngWordError] = useState(false);
const [rusWordError, setRusWordError] = useState(false);
const [transcriptionError, setTranscriptionError] = useState(false);
const [tagError, setTagError] = useState(false);
const [formValid, setFormValid] = useState(false);
const reEng = /[A-Za-z]/;
const reRus = /[а-яА-ЯЁё]/;
const reTag = /[a-zа-яё\s]/;

const handleEdit = (e) => {
e.preventDefault()
setEditing(true);
setStyleEng(styles.input);
setStyleTranscription(styles.input);
setStyleRus(styles.input);
setStyleTag(styles.input);
};

const handleSave = (e) => {
// Here you would typically send the edited data to your backend server
e.preventDefault()
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
}
);
setEditing(false);
};

const speechText = (e) => {
    e.preventDefault()
    const speechUtterance = new SpeechSynthesisUtterance();
    speechUtterance.text = english;
    speechSynthesis.speak(speechUtterance);
}

useEffect(() => {
    if(engWordError || rusWordError || transcriptionError || tagError) {
        setFormValid(false)
    } else {
        setFormValid(true)
    }
}, [engWordError, rusWordError, transcriptionError, tagError])

return (
<div className={styles.word} key={id}>
<div className={styles.word__div}>
{editing ? (
<input 
className={styleEng}
type="text"
value={editWord.editEnglish}
onChange={(e) => {
    setEditWord({ ...editWord, editEnglish: e.target.value});
    if(!reEng.test(String(e.target.value).toLowerCase())) {
    setStyleEng(styles.inputRed)
    setEngWordError(true)
} else {
    setStyleEng(styles.input);
    setEngWordError();
}
}
}
/>
) : (
editWord.editEnglish
)}
</div>
<div className={styles.word__div}>
{editing ? (
<input className={styleTranscription}
type="text"
value={editWord.editTranscription}
onChange={(e) => {
    setEditWord({ ...editWord, editTranscription: e.target.value })
    if (String(e.target.value.length) <= 0) {
        setStyleTranscription(styles.inputRed);
        setTranscriptionError(true)
    }
    else {
        setStyleTranscription(styles.input)
        setTranscriptionError()
    }
}
}
/>
) : (
editWord.editTranscription
)}
</div>
<div className={styles.word__div}>
{editing ? (
<input
className={styleRus}
type="text"
value={editWord.editRussian}
onChange={(e) => {
    setEditWord({ ...editWord, editRussian: e.target.value });
    if(!reRus.test(String(e.target.value).toLowerCase())) {
        setStyleRus(styles.inputRed)
        setRusWordError(true)
    }else {
        setStyleRus(styles.input)
        setRusWordError()
    }
}
}
/>
) : (
editWord.editRussian
)}
</div>
<div className={styles.word__div}>
{editing ? (
<input
className={styleTAg}
type="text"
value={editWord.tags}
onChange={(e) => {
    setEditWord({ ...editWord, tags: e.target.value });
    if (!reTag.test(String(e.target.value).toLowerCase())) {
        setStyleTag(styles.inputRed)
        setTagError(true)
    } else {
        setStyleTag(styles.input)
        setTagError();
    }
}
}
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
<img className={styles.cancel} src={img_cancel} alt="Отменить" />
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
{!formValid && <div style={{color: "red"}}>Пожалуйста, заполните корректно форму</div>}
</div>
);
}