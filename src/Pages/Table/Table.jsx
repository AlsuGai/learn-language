import { useEffect, useState } from "react"
import CreateWordTable from "../../Component/CreateWordTable/CreateWordTable.jsx"
import styles from './Table.module.scss'

export default function Table() {
    

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [words, setWords] = useState([]);
    const [editing, setEditing] = useState(false);
    const handleEdit = (e) => {
        e.preventDefault();
    setEditing(!editing);
    };

   


    useEffect(() => {
        fetch('https://itgirlschool.justmakeit.ru/api/words')
        .then(res => res.json())
        .then((data) => {
            setIsLoaded(true);
            setWords(data);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        })
    }, [])

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return(
            <div>
                <h2>Таблица слов</h2>
                <form className={styles.table}>
                    <div className={styles.table__intro}>
                    {editing ? (<input className={styles.input} type="text" placeholder="English"></input>) 
                    : 
                    (<div className={styles.name}>English</div>)} 
                    {editing ? (<input className={styles.input} type="text" placeholder="Transcription"></input>
                    ) : (
                    <div className={styles.name}>Транскрипция</div> 
                    )}
                    {editing ? 
                    (<input className={styles.input} type="text" placeholder="Russian"></input>) :
                    (<div className={styles.name}>Перевод</div>)
                    }
                    {editing ? (<input className={styles.input} type="text" placeholder="Тема"></input>) :
                    (<div className={styles.name}>Тема</div>)
                    }
                    {editing ? (
                    <button onClick={handleEdit} className={styles.button}>сохранить</button>) : 
                    (<button onClick={handleEdit} className={styles.button}>добавить слово</button>)}
                    </div>
                    {words.map((word, id) => (
                    <CreateWordTable key={id} word={word}/>
                ))
                }
            </form>
        </div>
    );
    }
}