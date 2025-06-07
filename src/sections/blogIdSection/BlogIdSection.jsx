"use client";
import Image from "next/image";
import BackBtn from "@/components/buttons/BackBtn/BackBtn";
import BlogCard from "../blogSection/BlogCard";
import { i18n } from "@/dictionaries/i18n.config";
import { arrOfBlogs } from "@/data/blog/arrOfBlogs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import styles from "./BlogIdSection.module.scss";
const BlogIdSection = ({ lang, dictionary, data }) => {
  const {
    mainImage,

    altUk,
    altEn,
    titleUk,
    titleEn,
    // cardTextUk,
    // cardTextEn,
    creatingData,
    mainTextUk,
    mainTextEn,
    blocks,
    mainImageSignature,
    blocksImageSignature,
  } = data;

  const filteredCards = arrOfBlogs.filter((item) => item.slug !== data.slug);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <BackBtn
          linkCustomClass=""
          iconCustomClass=""
          href={"/blog"}
          lang={lang}
          text={dictionary.backBtnText}
        />
        <div className={styles.containerBlogId}>
          <h1 className={styles.title}>
            {lang === i18n.locales[0]
              ? titleUk.toUpperCase()
              : titleEn.toUpperCase()}
          </h1>
          <div className={styles.imgWrapper}>
            <Image
              className={styles.img}
              src={mainImage}
              alt={lang === i18n.locales[0] ? altUk : altEn}
              sizes="(max-width: 767px) 90vw, (max-width: 1439px) 80vw, 792px"
              fill={true}
            />
          </div>
          {mainImageSignature.trim() !== "" && (
            <p className={styles.text}>{lang === i18n.locales[0] ? mainImageSignature : mainImageSignature}</p>
          )}
          <p className={styles.text}>
            {lang === i18n.locales[0] ? mainTextUk : mainTextEn}
          </p>
          <ul className={styles.list}>
            {blocks.map((block, index) => (
              <li key={index}>
                <h2>
                  {lang === i18n.locales[0]
                    ? block.subTitleUk
                    : block.subTitleEn}
                </h2>
                <p>
                  {lang === i18n.locales[0]
                    ? block.descriptionUk
                    : block.descriptionEn}
                </p>
                {block.img && (
                  <>
                  <div className={`${styles.imgWrapper} ${styles.blockImg}`}>
                    <Image
                      className={styles.img}
                      src={block.img}
                      alt={lang === i18n.locales[0] ? block.altUk : block.altEn}
                      sizes="(max-width: 767px) 90vw, (max-width: 1439px) 80vw, 792px"
                      fill={true}
                      loading="lazy"
                    />
                  </div>
                  {block.blocksImageSignature.trim() !== "" && (
                    <p className={styles.text}>{lang === i18n.locales[0] ? block.blocksImageSignature : block.blocksImageSignature}</p>
                  )}
                  </>
                )}
              </li>
            ))}
          </ul>

          <span>{creatingData}</span>
        </div>
        <div className={styles.containerSwiper}>
          <h3 className={styles.subTitle}>{dictionary.subTitle}</h3>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={12}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 3,
              },
            }}
          >
            {filteredCards.map((item, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <BlogCard
                  item={item}
                  lang={lang}
                  cardLinkText={dictionary.cardLinkText}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogIdSection;
