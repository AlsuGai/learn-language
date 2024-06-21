import styles from './Cards.module.scss';
import { useState, useEffect } from 'react';
import CreateWordCard from '../../Component/CreateWordCard/CreateWordCard';
import img_arroleft from "../../assets/images/arrowleft.png";
import img_arroright from "../../assets/images/arrowright.png";

export default function Cards({words, setWords}) {
    const [count, setCount] = useState(0);
    const [learnCount, setLearnCount] = useState(0);

    function nextSlider() {
        if (count === words.length - 1) {
            setCount(0);
            return;
        }
        setCount(count + 1);
    }

    function prevSlider() {
        if (count === 0) {
            setCount(words.length - 1);
            return;
        }
        setCount(count - 1);
    }

   const editCounter = () => {
        setLearnCount(learnCount + 1)
    }

    return( 
        <div>
            <h2>Карточки</h2>
            <div className={styles.cards}>
            <button onClick={prevSlider}><img src={img_arroleft} alt="Назад" /></button>
            <CreateWordCard {...words[count]} editCounter={editCounter} />
            <button onClick={nextSlider}><img src={img_arroright} alt="Следующее"/></button>
            </div>
            <div className={styles.counter}>{learnCount}</div>
        </div>
    ) 
}