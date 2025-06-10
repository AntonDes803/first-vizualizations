"use client";

import { useState, useEffect, useContext } from "react";
import { SiteContext } from "@/context/SiteContext";
import { useForm, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderFormSchema } from "@/yupSchemas/orderFormSchema";
import SuccessContent from "./SuccessContent";
// import Checkboxes from "./Checkboxes";

import styles from "./OrderForm.module.scss";
import SocialLinks from "../SocialLinks/SocialLinks";

const OrderForm = ({ dictionaryForm, dictionarySuccess }) => {
  const { closeModal } = useContext(SiteContext);

  const initialValues = {
    defaultValues: {
      userName: "",
      tel: "",
      email: "",
      calback: [],
    },
    // resolver: yupResolver(orderFormSchema),
    resolver: yupResolver(orderFormSchema(dictionaryForm)),
  };

  const form = useForm(initialValues);
  const { register, handleSubmit, formState, reset, control } = form;
  const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

  const { field } = useController({
    control,
    name: "calback",
  });

  const [isSubmited, setSubmited] = useState(false);
  const [boxValue, setBoxValue] = useState(field.value || []);

  // console.log("boxValue: ", boxValue);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setBoxValue([]);
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data) => {
    console.log("formData:", data);
    console.log("calback:", data.calback);

    setSubmited(true);
    setTimeout(() => {
      closeModal();
      setSubmited(false);
    }, 4000);
  };

  return (
    <div className={styles.container}>
      <button onClick={closeModal} className={styles.closeBtn}>
        <svg className={styles.iconBtnClose}>
          <use href="/sprite.svg#icon-plus" />
        </svg>
      </button>
      {isSubmited ? (
        <SuccessContent dictionarySuccess={dictionarySuccess} />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
          noValidate
        >
          <h3 className={styles.formTitle}>{dictionaryForm.title}</h3>
          <div className={styles.inputGroup}>
            <svg className={styles.iconSnowflake}>
              <use href="/sprite.svg#icon-snowflake" />
            </svg>
            <label htmlFor="userName" className={styles.label}>
              {/* Ім&#39;я */}
              {dictionaryForm.nameLabel}
            </label>
            <input
              type="text"
              className={styles.input}
              id="userName"
              placeholder=" "
              maxLength="50"
              {...register("userName")}
            />

            <p className={styles.error}>{errors.userName?.message}</p>
          </div>
          <div className={styles.inputGroup}>
            <svg className={styles.iconSnowflake}>
              <use href="/sprite.svg#icon-snowflake" />
            </svg>
            <label htmlFor="tel" className={styles.label}>
              {/* Телефон */}
              {dictionaryForm.phoneLabel}
            </label>
            <input
              type="text"
              className={styles.input}
              id="tel"
              placeholder=" "
              maxLength="13"
              {...register("tel")}
            />

            <p className={styles.error}>{errors.tel?.message}</p>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              {/* Email */}
              {dictionaryForm.emailLabel}
            </label>
            <input
              type="text"
              className={styles.input}
              id="email"
              placeholder=" "
              maxLength="50"
              {...register("email")}
            />

            <p className={styles.error}>{errors.email?.message}</p>
          </div>
          <h4 className={styles.subTitle}>{dictionaryForm.subTitle}</h4>
          {/* <Checkboxes
            field={field}
            boxValue={boxValue}
            setBoxValue={setBoxValue}
          /> */}
          <SocialLinks customClass={styles.customSocLinks} dark />
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isSubmitting}
          >
            {dictionaryForm.orderBtnText}
          </button>
        </form>
      )}
    </div>
  );
};

export default OrderForm;
