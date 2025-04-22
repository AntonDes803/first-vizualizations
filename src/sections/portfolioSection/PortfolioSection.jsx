import Link from "next/link";
import { i18n } from "@/dictionaries/i18n.config";
import { portfolioHref } from "@/data/navLinksData";
import { arrOfProjects } from "@/data/projects/arrOfProjects";
import styles from "./PortfolioSection.module.scss";

const PortfolioSection = ({ lang, dictionary }) => {
  // если язык по умолчанию, то убираем его из url (в нашем случае uk))
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? "" : `/${lang}`;
  // console.log("path", path);

  return (
    <section className="section" id="portfolioSection">
      <div className="container">
        PortfolioSection
        <ul>
          {arrOfProjects.map((item) => (
            <li key={item.slug}>
              <Link href={`${path}${portfolioHref}/${item.slug}`}>
                {item.slug}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PortfolioSection;
