"use client";

import { useState, useEffect, useContext } from "react";
import { SiteContext } from "@/context/SiteContext";
import { useForm, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderFormSchema } from "@/yupSchemas/orderFormSchema";
import Checkboxes from "./Checkboxes";

import styles from "./OrderForm.module.scss";

const OrderForm = ({ dictionary }) => {
    const { closeModal } = useContext(SiteContext);

    const initialValues = {
        defaultValues: {
            userName: "",
            tel: "",
            email: "",
            calback: [],
        },
        resolver: yupResolver(orderFormSchema),
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset, control } = form;
    const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

    const { field } = useController({
        control,
        name: "calback",
    });

    const [boxValue, setBoxValue] = useState(field.value || []);

    // console.log("boxValue: ", boxValue);

    const onSubmit = (data) => {
        console.log("FormData:", data);
        console.log("qwe:", data.calback);
        closeModal();
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
            setBoxValue([]);
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <div className={styles.container}>
            <button onClick={closeModal} className={styles.closeBtn}>
                <svg className={styles.iconBtnClose}>
                    <use href='/sprite.svg#icon-plus' />
                </svg>
            </button>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                noValidate
            >
                <h3 className={styles.formTitle}>{dictionary.title}</h3>
                <div className={styles.inputGroup}>
                    <svg className={styles.iconSnowflake}>
                        <use href='/sprite.svg#icon-snowflake' />
                    </svg>
                    <label htmlFor='userName' className={styles.label}>
                        Ім&#39;я
                    </label>
                    <input
                        type='text'
                        className={styles.input}
                        id='userName'
                        placeholder=' '
                        maxLength='50'
                        {...register("userName")}
                    />

                    <p className={styles.error}>{errors.userName?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <svg className={styles.iconSnowflake}>
                        <use href='/sprite.svg#icon-snowflake' />
                    </svg>
                    <label htmlFor='tel' className={styles.label}>
                        Телефон
                    </label>
                    <input
                        type='text'
                        className={styles.input}
                        id='tel'
                        placeholder=' '
                        maxLength='13'
                        {...register("tel")}
                    />

                    <p className={styles.error}>{errors.tel?.message}</p>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor='email' className={styles.label}>
                        Email
                    </label>
                    <input
                        type='text'
                        className={styles.input}
                        id='email'
                        placeholder=' '
                        maxLength='50'
                        {...register("email")}
                    />

                    <p className={styles.error}>{errors.email?.message}</p>
                </div>
                <h4 className={styles.subTitle}>{dictionary.subTitle}</h4>
                <Checkboxes
                    field={field}
                    boxValue={boxValue}
                    setBoxValue={setBoxValue}
                />
                <button
                    type='submit'
                    className={styles.submitBtn}
                    disabled={isSubmitting}
                >
                    {dictionary.orderBtnText}
                </button>
            </form>
        </div>
    );
};

export default OrderForm;
