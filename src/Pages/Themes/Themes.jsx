import img_animal from "../../assets/images/cards words.png";
import img_family from "../../assets/images/family.png";
import img__food from "../../assets/images/food.png";
import img_shop from "../../assets/images/shopping.png";
import img_travel from "../../assets/images/travel.png";
import img_work from "../../assets/images/work.png";
import styles from "./Themes.module.scss"

export default function Themes() {
    return (
        <div className={styles.cards}>
        <img src={img_animal} alt="животные" />
        <img src={img_family} alt="семья" />
        <img src={img__food} alt="еда" />
        <img src={img_shop} alt="покупки" />
        <img src={img_travel} alt="путешествие" />
        <img src={img_work} alt="профессии" />
        </div>
    )
}