import { useEffect, useState } from "react"
import CreateWordTable from "../../Component/CreateWordTable/CreateWordTable.jsx"
import styles from './Table.module.scss'

export default function Table({words}) {

    const [add, setAdd] = useState(false);
    const [addWord, setAddWord] = useState([]);
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

   const handleAdd = (e) => {
        e.preventDefault();
        setAdd(true);
        };
            
    const handleCancel = (e) => {
            e.preventDefault();
            setAddWord();
            setAdd(false);
            };

    const handleSave = (e) => {
    // Here you would typically send the edited data to your backend server
    e.preventDefault()
    setAdd(false);
    };

    useEffect(() => {
        if(engWordError || rusWordError || transcriptionError || tagError) {
         setFormValid(false)} 
         else {
        setFormValid(true)}
        }, [engWordError, rusWordError, transcriptionError, tagError])

    if(!words) {
        return (
            <h2>Ошибка</h2>
        )
    }
           return (
            <div>
                <h2>Таблица слов</h2>
                <form className={styles.table}>
                    <div className={styles.table__intro}>
                    {add ? (<input className={styleEng} type="text" placeholder="English"></input>) 
                    : 
                    (<div className={styles.name}>English</div>)} 
                    {add ? (<input className={styleTranscription} type="text" placeholder="Transcription"></input>
                    ) : (
                    <div className={styles.name}>Транскрипция</div> 
                    )}
                    {add ? 
                    (<input className={styleRus} type="text" placeholder="Russian"></input>) :
                    (<div className={styles.name}>Перевод</div>)
                    }
                    {add ? (<input className={styleTAg} type="text" placeholder="Тема"></input>) :
                    (<div className={styles.name}>Тема</div>)
                    }
                    {add ? (
                    <>
                    <button disabled={!formValid}
                    onClick={handleAdd} className={styles.button}>сохранить</button>
                    <button onClick={handleCancel} className={styles.button}>отмена</button>
                    </>) : 
                    (<button onClick={handleAdd} className={styles.button}>добавить слово</button>)}
                    </div>
                    {words.map((word, id) => (
                    <CreateWordTable key={id} word={word}/>
                ))
                }
            </form>
        </div>
    )
}
