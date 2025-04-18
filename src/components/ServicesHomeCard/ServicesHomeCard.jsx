import Image from "next/image";
import { i18n } from "@/dictionaries/i18n.config";

import styles from "./ServicesHomeCard.module.scss";

const ServicesHomeCard = ({ lang, data }) => {
    // console.log("ServicesHomeCardData: ", data);
    return (
        <li className={styles.card}>
            <div className={styles.imgWrapper}>
                <Image
                    className={styles.img}
                    src={data.images[0]}
                    alt={data.categoryUk}
                    sizes='(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 486px'
                    fill={true}
                />
            </div>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>
                    {(lang === i18n.locales[0]
                        ? data.categoryUk
                        : data.categoryEn
                    ).toUpperCase()}
                </h3>
                <button className={styles.button}>ЗАМОВИТИ</button>
            </div>
        </li>
    );
};

export default ServicesHomeCard;
