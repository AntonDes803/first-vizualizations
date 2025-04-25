"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { i18n } from "@/dictionaries/i18n.config";
// import { v4 } from "uuid";
import styles from "./ItemSlider.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  // Pagination,
  Mousewheel,
  Keyboard,
  Thumbs,
  FreeMode,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "./ItemSliderTop.css";
import "./ItemSliderBottom.css";

const ItemSlider = ({ lang, customClass, data }) => {
  const [item, setItem] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // const images = data?.images;

  // const allImages = useMemo(() => [data?.titleImg, ...images], [data, images]);

  useEffect(() => {
    setItem(
      data.images.map((el, ind) => {
        const imgLoading = ind === 0 ? "eager" : "lazy";
        const imgPriority = ind === 0 ? true : false;
        const imgSizes =
          ind === 0
            ? "(max-width: 767px) 100vw, (max-width: 1440px) 50vw, 33vw"
            : "(max-width: 767px) 50vw,  17vw";
        return (
          // <SwiperSlide key={v4()}>
          <SwiperSlide key={ind}>
            <Image
              src={el.src}
              alt={lang === i18n.locales[0] ? el.altUk : el.altEn}
              fill={true}
              loading={imgLoading}
              sizes={imgSizes}
              priority={imgPriority}
            />
          </SwiperSlide>
        );
      })
    );
    // }, [allImages]);
  }, [data.images]);

  return (
    <div className={`${styles.swiperContainer} ${customClass}`}>
      {/* <h4 className={seoStyles.titleHidden}>
        {t("ApartIdItem.SeoTitleItemSliderH4")}
      </h4> */}

      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        // pagination={{
        //   clickable: true,
        //   dynamicBullets: true,
        // }}
        keyboard={{
          enabled: true,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        // modules={[FreeMode, Navigation, Pagination, Thumbs, Keyboard]}
        modules={[FreeMode, Navigation, Thumbs, Keyboard]}
        className="ItemSliderTop"
      >
        {item}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={16}
        slidesPerView={2}
        mousewheel={true}
        loop={true}
        freeMode={true}
        watchSlidesProgress={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          360: {
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        modules={[FreeMode, Navigation, Thumbs, Keyboard, Mousewheel]}
        className="ItemSliderBottom"
      >
        {item}
      </Swiper>
    </div>
  );
};

export default ItemSlider;
