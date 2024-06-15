import './Cards.scss'
import { useState, useEffect } from 'react'

export default function Cards() {

    const [translate, setTranslate] = useState("Проверить");

    const checkTranslate = (e) => {
        setTranslate("корзина");
        e.target.classList.remove("card-button");
    }

    return( 
        <div>
            <h2>Карточки</h2>
            <div className="cards">
            <button><img src="src/assets/images/arrowleft.png" alt="LearnEnglish" /></button>
            <div className="card-form">
                <div>
            <div className="card-form__english">basket</div>
            <div className="card-form__transcriprion">[ˈbɑːskɪt]</div>
            </div>
            <div onClick={checkTranslate} className="card-form__translate card-button">{translate}</div>
            </div>
            <button><img src="src/assets/images/arrowright.png" alt="Следующее"/></button>
            </div>
        </div>
    ) 
}