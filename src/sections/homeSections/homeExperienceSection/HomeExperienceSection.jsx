import Image from "next/image";
import s from "./HomeExperienceSection.module.scss";
import CallBtn from "@/components/buttons/CallBtn/CallBtn";

const HomeExperienceSection = ({ lang, dictionary }) => {
  return (
    <section className="section">
      <div className={`"container"  ${s.containerHomeExperience}`}>
        {/* HomeExperienceSection */}
        <div className={s.boxTitle}>
          <h2 className={s.title}>{dictionary.title}</h2>
          <p className={s.text}>{dictionary.description}</p>

          <CallBtn customClass="" text={dictionary.orderBtnText} />
        </div>
        <div className={s.boxHomeExperience}>
          <Image
            className={s.imgHomeExperience}
            src="/images/dev/homePage/home-page-work-experience-img.webp"
            alt="home-page-work-experience-img"
            sizes="(max-width: 768px ) 100vw, "
            fill={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeExperienceSection;
