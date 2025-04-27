import Image from "next/image";
import { i18n } from "@/dictionaries/i18n.config";
import OrderButton from "../buttons/OrderButton/OrderButton";

import styles from "./HomeServicesCard.module.scss";

const HomeServicesCard = ({ lang, data, dictionary }) => {
    // console.log("ServicesHomeCardData: ", data);
    return (
        <li className={styles.card}>
            <div className={styles.imgWrapper}>
                <Image
                    className={styles.img}
                    src={data.images[0]}
                    alt={data.categoryUk}
                    // sizes='(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 486px'
                    sizes='(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px'
                    fill={true}
                />
            </div>
            <div className={styles.subTitleBox}>
                <h3 className={styles.subTitle}>
                    {(lang === i18n.locales[0]
                        ? data.categoryUk
                        : data.categoryEn
                    ).toUpperCase()}
                </h3>
                <OrderButton
                    text={dictionary.cardBtnText}
                    customClass={styles.orderBtn}
                />
            </div>
        </li>
    );
};

export default HomeServicesCard;
