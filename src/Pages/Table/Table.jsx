import { useEffect, useState } from "react"
import CreateWordTable from "../../Component/CreateWordTable/CreateWordTable.jsx"
import styles from './Table.module.scss'

export default function Table() {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [words, setWords] = useState([]);
    const [editing, setEditing] = useState(false);
    const handleEdit = () => {
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
                <table className={styles.table}>
                    <thead>
                    <tr>
                    {editing ? (<th><input className={styles.input} type="text" placeholder="English"></input></th>) 
                    : 
                    (<th className={styles.th}>English</th>)} 
                    {editing ? (<th><input className={styles.input} type="text" placeholder="Transcription"></input></th>
                    ) : (
                       <th className={styles.th}>Транскрипция</th> 
                    )}
                    {editing ? 
                    (<th><input className={styles.input} type="text" placeholder="Russian"></input></th>) :
                    (<th className={styles.th}>Перевод</th>)
                    }
                    {editing ? (<th><input className={styles.input} type="text" placeholder="Тема"></input></th>) :
                    (<th className={styles.th}>Тема</th>)
                    }
                    {editing ? (
                    <button onClick={handleEdit} className={styles.button}>сохранить</button>) : 
                    (<button onClick={handleEdit} className={styles.button}>добавить слово</button>)}
                    </tr>
                    </thead>
                    <tbody >
                    {words.map((word, id) => (
                    <CreateWordTable key={id} word={word}/>
                ))
                }
                    </tbody>
            </table>
        </div>
    );
    }
}