import { useState } from "react";
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

const handleEdit = (e) => {
e.preventDefault()
setEditing(true);
};

const handleSave = (e) => {
// Here you would typically send the edited data to your backend server
e.preventDefault()
setEditing(false);
};

const handleCancel = (e) => {
e.preventDefault();
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

return (
<div className={styles.word} key={id}>
<div className={styles.word__div}>
{editing ? (
<input
className={styles.input}
type="text"
value={editWord.editEnglish}
onChange={(e) =>
setEditWord({ ...editWord, editEnglish: e.target.value })
}
/>
) : (
editWord.editEnglish
)}
</div>
<div className={styles.word__div}>
{editing ? (
<input className={styles.input}
type="text"
value={editWord.editTranscription}
onChange={(e) =>
setEditWord({ ...editWord, editTranscription: e.target.value })
}
/>
) : (
editWord.editTranscription
)}
</div>
<div className={styles.word__div}>
{editing ? (
<input
className={styles.input}
type="text"
value={editWord.editRussian}
onChange={(e) =>
setEditWord({ ...editWord, editRussian: e.target.value })
}
/>
) : (
editWord.editRussian
)}
</div>
<div className={styles.word__div}>
{editing ? (
<input
className={styles.input}
type="text"
value={editWord.tags}
onChange={(e) => setEditWord({ ...editWord, tags: e.target.value })}
/>
) : (
editWord.tags
)}
</div>
<div className={styles.tableicons}>
{editing ? (
<>
<button onClick={handleSave}>
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
</div>
);
}