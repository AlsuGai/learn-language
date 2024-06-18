import { useState } from 'react';
import img_edit from "../../assets/images/edit.png";
import img_save from "../../assets/images/save.png";
import img_delete from "../../assets/images/delete.png";
import img_sound from "../../assets/images/sound.png";
import styles from './CreateWordTable.module.scss';

export default function CreateWordTable({word}) {
    
    const {id, english, transcription, russian, tags} = word;
    const [editing, setEditing] = useState(false);
    const handleEdit = () => {
    setEditing(!editing);
    };
   
    return (
            <tr className={styles.word} key={id}>
                <td>{editing ? 
                (<input type="text"/>) 
                : (english)}</td>
                <td>{editing ? 
                (<input type="text"/>) 
                : (transcription)}</td>
                <td>{editing ? 
                (<input type="text"/>) 
                : (russian)}</td>
                <td>{editing ? 
                (<input type="text"/>) 
                : (tags)}</td>
                <td className={styles.tableicons}>
                {editing ? (
                <button onClick={handleEdit}>
                <img src={img_save} alt="Сохранить" />
                </button>
                ) : (
                <button onClick={handleEdit}>
                <img src={img_edit} alt="Редактировать" />
                </button>
                )}
                <button>
                <img src={img_delete} alt="Удалить" />
                </button>
                <button>
                <img src={img_sound} alt="Воспроизнести" />
                </button>
                </td>
            </tr>
    )
}