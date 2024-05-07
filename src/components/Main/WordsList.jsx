import { useEffect, useState } from "react"
import CreateWordTable from "./CreateWordTable";

export default function WordsList() {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch('http://itgirlschool.justmakeit.ru/api/words')
        .then(res => res.json())
        .then((data) => {
            setIsLoaded(true);
            setWords(data);
            console.log(data)
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        })
    }, [])

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading ... </div>;
    } else {
        return(
            <main>
            <h2>Таблица слов</h2>
            <div>
                <div>
                    <input type="text" placeholder="English"></input>
                    <input type="text" placeholder="Transcription"></input>
                    <input type="text" placeholder="Russian"></input>
                </div>
            </div>
            <div>
            {words.map((word, id) => (
                <CreateWordTable key={id} word={word}/>
            ))
            }
            </div>
        </main>  
    );
    }
}