"use client";

import { socLinks } from "@/data/contactsData";

import styles from "./OrderForm.module.scss";

const Checkboxes = ({ field, boxValue, setBoxValue }) => {
    return (
        <ul className={styles.checkboxList}>
            {socLinks.map((option, index) => (
                <li
                    key={option.name}
                    className={`${styles.item} ${
                        option.name === "instagram" ? styles.instagram : ""
                    }`}
                >
                    <label
                        htmlFor={option.name}
                        className={styles.checkboxLabel}
                    >
                        <svg className={styles.socSvg}>
                            <use href={option.icon}></use>
                        </svg>

                        <input
                            onChange={(e) => {
                                const valueCopy = [...boxValue];

                                // update checkbox value
                                valueCopy[index] = e.target.checked
                                    ? e.target.value
                                    : null;

                                // send data to react hook form
                                field.onChange(valueCopy);

                                // update local state
                                setBoxValue(valueCopy);
                            }}
                            type='checkbox'
                            checked={boxValue.includes(option.name)}
                            value={option.name}
                            id={option.name}
                            className={
                                boxValue.includes(option.name)
                                    ? styles.boxChecked
                                    : styles.boxNoChecked
                            }
                        />
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default Checkboxes;
