import { stringSplittingByDelimiter } from "@/helpers/stringSplittingByDelimiter";
import { servicesData } from "@/data/servicesData";
import styles from "./HomeServicesSection.module.scss";
import CustomLink from "@/components/CustomLink/CustomLink";
import ServicesHomeCard from "@/components/HomeServicesCard/HomeServicesCard";
import { servicesHref } from "@/data/navLinksData";

const HomeServicesSection = ({ lang, dictionary }) => {
    const sectionTitle = dictionary.title.toUpperCase();
    const titleArray = stringSplittingByDelimiter(sectionTitle, "&");

    // console.log("HomeServicesSectionDictionery: ", dictionary);

    return (
        <section className='section'>
            <div className='container'>
                <h2 className={styles.title}>
                    {titleArray[0]}
                    <span className='ampersandColor'>{titleArray[1]}</span>
                    {titleArray[2]}
                </h2>
                <div className={styles.descriptionWrapper}>
                    <p className={styles.description}>
                        {dictionary.description}
                    </p>

                    <CustomLink
                        linkCustomClass={styles.customLink}
                        iconCustomClass=''
                        href={servicesHref}
                        lang={lang}
                        text={dictionary.linkText}
                    />
                </div>
                <ul className={styles.cardList}>
                    {servicesData.map((item, index) => (
                        <ServicesHomeCard
                            key={index}
                            lang={lang}
                            data={item}
                            dictionary={dictionary}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HomeServicesSection;
