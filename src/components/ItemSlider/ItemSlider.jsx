// "use client";
// import React, { useState, useEffect, useMemo } from "react";
// import Image from "next/image";
// import { i18n } from "@/dictionaries/i18n.config";
// import styles from "./ItemSlider.module.scss";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// import {
//   Navigation,
//   Mousewheel,
//   Keyboard,
//   Thumbs,
//   FreeMode,
// } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "./ItemSliderTop.css";
// import "./ItemSliderBottom.css";

// const ItemSlider = ({ lang, customClass, data }) => {
//   const [item, setItem] = useState([]);
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   useEffect(() => {
//     setItem(
//       data.images.map((el, ind) => {
//         const imgLoading = ind === 0 ? "eager" : "lazy";
//         const imgPriority = ind === 0 ? true : false;
//         // const imgSizes =
//         //   ind === 0
//         //     ? "(max-width: 767px) 100vw, (max-width: 1440px) 50vw, 33vw"
//         //     : "(max-width: 767px) 50vw,  17vw";
//             const imgSizes =
//           ind === 0
//             ? "(max-width: 767px) 100vw, (max-width: 1440px) 50vw, 1200px"
//             : "(max-width: 767px) 50vw,  1200px";
//         return (
//           <SwiperSlide key={ind}>
//             <Image
//               src={el.src}
//               alt={lang === i18n.locales[0] ? el.altUk : el.altEn}
//               fill={true}
//               loading={imgLoading}
//               sizes={imgSizes}
//               priority={imgPriority}
//             />
//           </SwiperSlide>
//         );
//       })
//     );
//   }, [data.images]);

//   return (
//     <div className={`${styles.swiperContainer} ${customClass}`}>
//       <Swiper
//         loop={true}
//         spaceBetween={10}
//         navigation={true}
//         keyboard={{
//           enabled: true,
//         }}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs, Keyboard]}
//         className="ItemSliderTop"
//       >
//         {item}
//       </Swiper>

//       <Swiper
//         onSwiper={setThumbsSwiper}
//         spaceBetween={16}
//         slidesPerView={2}
//         mousewheel={true}
//         loop={true}
//         freeMode={true}
//         watchSlidesProgress={true}
//         keyboard={{
//           enabled: true,
//         }}
//         breakpoints={{
//           360: {
//             spaceBetween: 16,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 16,
//           },
//           1440: {
//             slidesPerView: 4,
//             spaceBetween: 24,
//           },
//         }}
//         modules={[FreeMode, Navigation, Thumbs, Keyboard, Mousewheel]}
//         className="ItemSliderBottom"
//       >
//         {item}
//       </Swiper>
//     </div>
//   );
// };

// export default ItemSlider;


// todo my code 01

// "use client";

// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import Image from "next/image";
// import { useState } from "react";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// import styles from "./ItemSlider.module.scss";

// const ItemSlider = ({ lang, customClass, data }) => {
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const [sliderRef, instanceRef] = useKeenSlider({
//     slides: {
//       perView: 1.1,
//       spacing: 10,
//     },
//     loop: true,
//     mode: "free-snap",
//     created() {
//       setCurrentIndex(0);
//     },
//     slideChanged(slider) {
//       setCurrentIndex(slider.track.details.rel);
//     },
//   });

//   const openLightbox = (index) => {
//     setCurrentIndex(index);
//     setLightboxOpen(true);
//   };

//   return (
//     <div className={`${styles.sliderWrapper} ${customClass}`}>
//       <div ref={sliderRef} className="keen-slider">
//         {data.images.map((img, index) => (
//           <div
//             className={`keen-slider__slide ${styles.slide}`}
//             key={index}
//             onClick={() => openLightbox(index)}
//           >
//             <Image
//               src={img.src}
//               alt={lang === "uk" ? img.altUk : img.altEn}
//               width={800}
//               height={600}
//               className={styles.image}
//               placeholder="blur"
//               blurDataURL="/images/blur-placeholder.webp"
//             />
//           </div>
//         ))}
//       </div>

//       <button
//         className={styles.viewAllBtn}
//         onClick={() => openLightbox(currentIndex)}
//       >
//         {lang === "uk" ? "Дивитись усі" : "View all"}
//       </button>

//       <Lightbox
//         open={lightboxOpen}
//         close={() => setLightboxOpen(false)}
//         index={currentIndex}
//         slides={data.images.map((img) => ({
//           src: img.src,
//           alt: lang === "uk" ? img.altUk : img.altEn,
//         }))}
//       />
//     </div>
//   );
// };

// export default ItemSlider;


// todo my code 02 Робочий варіант

// "use client";

// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import Image from "next/image";
// import { useState } from "react";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// import styles from "./ItemSlider.module.scss";

// const ItemSlider = ({ lang, customClass, data }) => {
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const [sliderRef, instanceRef] = useKeenSlider({
//     slides: {
//       perView: 1.1,
//       spacing: 10,
//     },
//     loop: true,
//     mode: "free-snap",
//     slideChanged(slider) {
//       setCurrentIndex(slider.track.details.rel);
//     },
//   });

//   const openLightbox = (index) => {
//     setCurrentIndex(index);
//     setLightboxOpen(true);
//   };

//   const goToSlide = (index) => {
//     instanceRef.current?.moveToIdx(index);
//   };

//   return (
//     <div className={`${styles.sliderWrapper} ${customClass}`}>
//       <div ref={sliderRef} className={`keen-slider ${styles.mainSlider}`}>
//         {data.images.map((img, index) => (
//           <div
//             key={index}
//             className={`keen-slider__slide ${styles.slide}`}
//             onClick={() => openLightbox(index)}
//           >
//             <Image
//               src={img.src}
//               alt={lang === "uk" ? img.altUk : img.altEn}
//               width={800}
//               height={600}
//               className={styles.image}
//               // placeholder="blur"
//               // blurDataURL="/images/blur-placeholder.webp"
//             />
//           </div>
//         ))}
//       </div>

//       <div className={styles.thumbnails}>
//         {data.images.map((img, index) => (
//           <button
//             key={index}
//             className={`${styles.thumb} ${
//               currentIndex === index ? styles.active : ""
//             }`}
//             onClick={() => goToSlide(index)}
//           >
//             <Image
//               src={img.src}
//               alt={lang === "uk" ? img.altUk : img.altEn}
//               width={100}
//               height={70}
//               className={styles.thumbImage}
//             />
//           </button>
//         ))}
//       </div>

//       <Lightbox
//         open={lightboxOpen}
//         close={() => setLightboxOpen(false)}
//         index={currentIndex}
//         slides={data.images.map((img) => ({
//           src: img.src,
//           alt: lang === "uk" ? img.altUk : img.altEn,
//         }))}
//       />
//     </div>
//   );
// };

// export default ItemSlider;


// todo my code 03
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import styles from "./ItemSlider.module.scss";

// const ItemSlider = ({ data, lang, customClass }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = data.images;

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className={`${styles.slider} ${customClass || ""}`}>
//       <div className={styles.mainImageWrapper}>
//         <button onClick={handlePrev} className={styles.navBtn} aria-label="Previous image">
//           ←
//         </button>

//         <div className={styles.imageContainer}>
//           <Image
//             src={images[currentIndex].src}
//             alt={lang === "uk" ? images[currentIndex].altUk : images[currentIndex].altEn}
//             fill
//             sizes="(max-width: 768px) 100vw, 80vw"
//             className={styles.image}
//             priority
//           />
//         </div>

//         <button onClick={handleNext} className={styles.navBtn} aria-label="Next image">
//           →
//         </button>
//       </div>

//       <div className={styles.thumbnails}>
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className={`${styles.thumb} ${index === currentIndex ? styles.active : ""}`}
//             onClick={() => setCurrentIndex(index)}
//           >
//             <Image
//               src={img.src}
//               alt={lang === "uk" ? img.altUk : img.altEn}
//               width={80}
//               height={60}
//               className={styles.thumbImage}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ItemSlider;


// todo my code 05 
// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import styles from "./ItemSlider.module.scss";

// const ItemSlider = ({ data, lang, customClass }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [fullscreenImage, setFullscreenImage] = useState(null);
//   const images = data.images;

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const handleImageClick = (src) => {
//     setFullscreenImage(src);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setFullscreenImage(null);
//   };

//   return (
//     <div className={`${styles.slider} ${customClass || ""}`}>
//       <div className={styles.mainImageWrapper}>
//         <button onClick={handlePrev} className={styles.navBtn} aria-label="Previous image">
//           ←
//         </button>

//         <div className={styles.imageContainer}>
//           <Image
//             src={images[currentIndex].src}
//             alt={lang === "uk" ? images[currentIndex].altUk : images[currentIndex].altEn}
//             fill
//             sizes="(max-width: 768px) 100vw, 80vw"
//             className={styles.image}
//             loading="lazy"
//             onClick={() => handleImageClick(images[currentIndex].src)} // Enable fullscreen on click
//           />
//         </div>

//         <button onClick={handleNext} className={styles.navBtn} aria-label="Next image">
//           →
//         </button>
//       </div>

//       <div className={styles.thumbnails}>
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className={`${styles.thumb} ${index === currentIndex ? styles.active : ""}`}
//             onClick={() => setCurrentIndex(index)}
//           >
//             <Image
//               src={img.src}
//               alt={lang === "uk" ? img.altUk : img.altEn}
//               width={80}
//               height={60}
//               className={styles.thumbImage}
//               loading="lazy" // Lazy loading for thumbnails
//             />
//           </div>
//         ))}
//       </div>

//       {/* Modal for fullscreen image */}
//       {isModalOpen && (
//         <div className={styles.modal} onClick={closeModal}>
//           <div className={styles.modalContent}>
//             <img src={fullscreenImage} alt="Fullscreen Image" className={styles.fullscreenImage} />
//             <button className={styles.closeModal} onClick={closeModal}>✕</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ItemSlider;


// todo 06  також робочий варік

// "use client";

// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import Image from "next/image";
// import { useState } from "react";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// import styles from "./ItemSlider.module.scss";
// import { i18n } from "@/dictionaries/i18n.config";

// const ItemSlider = ({ lang, customClass, data }) => {
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const [sliderRef, instanceRef] = useKeenSlider({
//     slides: {
//       perView: 1.1,
//       spacing: 10,
//     },
//     loop: true,
//     mode: "free-snap",
//     slideChanged(slider) {
//       setCurrentIndex(slider.track.details.rel);
//     },
//   });

//   const openLightbox = (index) => {
//     setCurrentIndex(index);
//     setLightboxOpen(true);
//   };

//   const goToSlide = (index) => {
//     instanceRef.current?.moveToIdx(index);
//   };

//   const goToPrevSlide = () => {
//     instanceRef.current?.prev();
//   };

//   const goToNextSlide = () => {
//     instanceRef.current?.next();
//   };

//   return (
//     <div className={`${styles.sliderWrapper} ${customClass || ""}`}>
//       {/* Main Slider */}
//       <div ref={sliderRef} className={`keen-slider ${styles.mainSlider}`}>
//         {data.images.map((img, index) => (
//           <div
//             key={index}
//             className={`keen-slider__slide ${styles.slide}`}
//             onClick={() => openLightbox(index)}
//           >
//             <Image
//               src={img.src}
//               alt={lang === i18n.locales[0] ? img.altUk : img.altEn}
//               width={800}
//               height={600}
//               className={styles.image}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         className={styles.sliderButtonPrev}
//         onClick={goToPrevSlide}
//         aria-label="Попередній слайд"
//       />
//       <button
//         className={styles.sliderButtonNext}
//         onClick={goToNextSlide}
//         aria-label="Наступний слайд"
//       />

//       {/* Thumbnails */}
//       <div className={styles.thumbnails}>
//         {data.images.map((img, index) => (
//           <button
//             key={index}
//             className={`${styles.thumb} ${
//               currentIndex === index ? styles.active : ""
//             }`}
//             onClick={() => goToSlide(index)}
//             aria-label={`Перейти до слайду ${index + 1}`}
//           >
//             <Image
//               src={img.src}
//               alt={lang === i18n.locales[0] ? img.altUk : img.altEn}
//               width={100}
//               height={70}
//               className={styles.thumbImage}
//             />
//           </button>
//         ))}
//       </div>

//       {/* Lightbox */}
//       <Lightbox
//         open={lightboxOpen}
//         close={() => setLightboxOpen(false)}
//         index={currentIndex}
//         slides={data.images.map((img) => ({
//           src: img.src,
//           alt: lang === i18n.locales[0] ? img.altUk : img.altEn,
//         }))}
//       />
//     </div>
//   );
// };

// export default ItemSlider;


// !

// "use client";

// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import Image from "next/image";
// import { useState } from "react";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// import styles from "./ItemSlider.module.scss";
// import { i18n } from "@/dictionaries/i18n.config";

// const ItemSlider = ({ lang, customClass, data }) => {
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Налаштування KeenSlider для покращення продуктивності
//   const [sliderRef, instanceRef] = useKeenSlider({
//     slides: {
//       perView: 1,  // 1 слайд за раз для кращої продуктивності
//       spacing: 10,
//     },
//     loop: true, // Оновлений цикл
//     mode: "snap", // Використовуємо snap для більш плавних перемикань
//     slideChanged(slider) {
//       setCurrentIndex(slider.track.details.rel);
//     },
//     duration: 300, // Анімація переходу слайдів
//     easing: "ease-out", // Плавний перехід
//   });

//   // Функція для відкриття Lightbox
//   const openLightbox = (index) => {
//     setCurrentIndex(index);
//     setLightboxOpen(true);
//   };

//   // Функції для перемикання слайдів
//   const goToSlide = (index) => {
//     instanceRef.current?.moveToIdx(index);
//   };

//   const goToPrevSlide = () => {
//     instanceRef.current?.prev();
//   };

//   const goToNextSlide = () => {
//     instanceRef.current?.next();
//   };

//   return (
//     <div className={`${styles.sliderWrapper} ${customClass || ""}`}>
//       {/* Основний слайдер */}
//       <div ref={sliderRef} className={`keen-slider ${styles.mainSlider}`}>
//         {data.images.map((img, index) => (
//           <div
//             key={index}
//             className={`keen-slider__slide ${styles.slide}`}
//             onClick={() => openLightbox(index)}
//           >
//             <Image
//               src={img.src}
//               alt={lang === i18n.locales[0] ? img.altUk : img.altEn}
//               // width={800}
//               // height={600}
//               fill
//               className={styles.image}
//               sizes="(max-width: 768px) 100vw, 50vw" // Розмір зображення адаптується для мобільних
//             />
//           </div>
//         ))}
//       </div>

//       {/* Кнопки навігації */}
//       <button
//         className={styles.sliderButtonPrev}
//         onClick={goToPrevSlide}
//         aria-label="Попередній слайд"
//       />
//       <button
//         className={styles.sliderButtonNext}
//         onClick={goToNextSlide}
//         aria-label="Наступний слайд"
//       />

//       {/* Мініатюри слайдів */}
//       <div className={styles.thumbnails}>
//         {data.images.map((img, index) => (
//           <button
//             key={index}
//             className={`${styles.thumb} ${currentIndex === index ? styles.active : ""}`}
//             onClick={() => goToSlide(index)}
//             aria-label={`Перейти до слайду ${index + 1}`}
//           >
//             <Image
//               src={img.src}
//               alt={lang === i18n.locales[0] ? img.altUk : img.altEn}
//               // width={100}
//               // height={70}
//               fill
//               className={styles.thumbImage}
//             />
//           </button>
//         ))}
//       </div>

//       {/* Lightbox для перегляду зображень */}
//       <Lightbox
//         open={lightboxOpen}
//         close={() => setLightboxOpen(false)}
//         index={currentIndex}
//         slides={data.images.map((img) => ({
//           src: img.src,
//           alt: lang === i18n.locales[0] ? img.altUk : img.altEn,
//         }))}
//       />
//     </div>
//   );
// };

// export default ItemSlider;


// !!!!!!!!!!!!!!!!!!!!!!!!! Робочий варіант

"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import styles from "./ItemSlider.module.scss";
import { i18n } from "@/dictionaries/i18n.config";

const ItemSlider = ({ lang, customClass, data }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = data.images.length;
  const thumbnailsRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);


  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 10,
    },
    loop: false,
    mode: "snap",
    slideChanged(slider) {
      setCurrentIndex(slider.track.details.rel);
    },
  });

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const goToSlide = (index) => {
    instanceRef.current?.moveToIdx(index);
  };

  const goToPrevSlide = () => {
    if (currentIndex > 0) {
      instanceRef.current?.prev();
    }
  };

  const goToNextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      instanceRef.current?.next();
    }
  };

useEffect(() => {
  const thumbnailsEl = thumbnailsRef.current;
  if (!thumbnailsEl) return;

  const activeThumb = thumbnailsEl.querySelector(`.${styles.thumb}.${styles.active}`);
  if (activeThumb) {
    const parentRect = thumbnailsEl.getBoundingClientRect();
    const childRect = activeThumb.getBoundingClientRect();

    const offset = childRect.left - parentRect.left + thumbnailsEl.scrollLeft;

    thumbnailsEl.scrollTo({
      left: offset - thumbnailsEl.clientWidth / 2 + childRect.width / 2,
      behavior: "smooth",
    });
  }
}, [currentIndex]);



  return (
    <div className={`${styles.sliderWrapper} ${customClass || ""}`}>
      {/* Main Slider */}
      <div ref={sliderRef} className={`keen-slider ${styles.mainSlider}`}>
        {data.images.map((img, index) => {
        const isActive = Math.abs(currentIndex - index) <= 1;
        return (
            <div
              key={index}
              className={`keen-slider__slide ${styles.slide}`}
              onClick={() => openLightbox(index)}
            >
              {isActive && (
                <Image
                  src={img.src}
                  alt={lang === i18n.locales[0] ? img.altUk : img.altEn}
                  fill={true}
                  sizes="(max-width: 767px) 100vw, (max-width: 1440px) 50vw, 1200px"
                  style={{ objectFit: "contain" }}
                  loading="lazy"
                />
              )}
            </div>
            );
        })}
      </div>

      {/* Navigation Arrows */}
      <div className={styles.sliderNavigation}>
        <button
          className={styles.sliderButton}
          onClick={goToPrevSlide}
          disabled={currentIndex === 0}
          aria-label="Попередній слайд"
        >
          <img src="/svg/sliderArrowLeft.svg" alt="Назад" />
        </button>

        <button
          className={styles.sliderButton}
          onClick={goToNextSlide}
          disabled={currentIndex === totalSlides - 1}
          aria-label="Наступний слайд"
        >
          <img src="/svg/sliderArrowRight.svg" alt="Вперед" />
        </button>
      </div>


      {/* Thumbnails */}
<div className={styles.thumbnails} ref={thumbnailsRef}>
  {data.images.map((img, index) => (
    <button
      key={index}
      className={`${styles.thumb} ${currentIndex === index ? styles.active : ""}`}
      onClick={() => goToSlide(index)}
      aria-label={`Перейти до слайду ${index + 1}`}
    >
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {isLoading && (
        <div className={styles.loaderWrapper}>
          <div className={styles.spinner}></div>
        </div>
      )}
        <Image
          src={img.src}
          alt={lang === i18n.locales[0] ? img.altUk : img.altEn}
          fill={true}
          style={{
          objectFit: "contain",
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
        onLoad={() => setIsLoading(false)}
          sizes="(max-width: 767px) 100vw, (max-width: 1440px) 50vw, 1200px"
          loading="lazy"
        />
      </div>
    </button>
  ))}
</div>


      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={data.images.map((img) => ({
          src: img.src,
          alt: lang === i18n.locales[0] ? img.altUk : img.altEn,
        }))}
      />
    </div>
  );
};

export default ItemSlider;
