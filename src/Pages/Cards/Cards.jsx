import styles from './Cards.module.scss';
import { useState, useEffect } from 'react';
import CreateWordCard from '../../Component/CreateWordCard/CreateWordCard';
import img_arroleft from "../../assets/images/arrowleft.png";
import img_arroright from "../../assets/images/arrowright.png";

export default function Cards() {

    return( 
        <div>
            <h2>Карточки</h2>
            <div className={styles.cards}>
            <button><img src={img_arroleft} alt="Назад" /></button>
            <CreateWordCard />
            <button><img src={img_arroright} alt="Следующее"/></button>
            </div>
        </div>
    ) 
}