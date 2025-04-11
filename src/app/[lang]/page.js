import HomeAfterWorkSection from "@/sections/homeSections/homeAfterWorkSection/HomeAfterWorkSection";
import HomeExperienceSection from "@/sections/homeSections/homeExperienceSection/HomeExperienceSection";
import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import HomeHeroSection from "@/sections/homeSections/homeHeroSection/HomeHeroSection";
import HomePortfolioSection from "@/sections/homeSections/homePortfolioSection/HomePortfolioSection";
import HomeServicesSection from "@/sections/homeSections/homeServicesSection/HomeServicesSection";
import HomeStatisticsSection from "@/sections/homeSections/homeStatisticsSection/HomeStatisticsSection";
import HomeTeamSection from "@/sections/homeSections/homeTeamSection/HomeTeamSection";
import HomeWhyMeSection from "@/sections/homeSections/homeWhyMeSection/HomeWhyMeSection";
import HomeWorkProcessSection from "@/sections/homeSections/homeWorkProcessSection/HomeWorkProcessSection";
import { getDictionary } from "@/helpers/getDictionary";
import { faqHomeData } from "@/data/faqHomeData";

// export async function generateMetadata({ params }) {
//   const { lang } = params;
//   const { seoMainPage } = await getDictionary(lang);

//   const title = seoMainPage.seoMetaMainTitle;
//   const description = seoMainPage.seoMetaMainDescription;
//   const keywords = seoMainPage.seoMetaKeywords;
//   const titleOpenGraph = seoMainPage.seoMetaTitleOpenGraph;
//   const descriptionOpenGraph = seoMainPage.seoMetaDescriptionOpenGraph;

//   const seoMetaPageUrl = getSeoMetaPageUrl(lang);

//   return {
//     title,
//     description,
//     keywords,
//     alternates: {
//       canonical: `${seoMetaPageUrl}`,
//       languages: {
//         uk: `${process.env.NEXT_PUBLIC_SEO_URL}`,
//         ru: `${process.env.NEXT_PUBLIC_SEO_URL}ru/`,
//       },
//     },
//     openGraph: {
//       title: titleOpenGraph,
//       url: `${seoMetaPageUrl}`,
//       description: descriptionOpenGraph,
//       siteName: "EyeDetect",
//       type: "website",
//       images: [
//         {
//           url: "images/seo_images/opengraph-image-400x300.png",
//           type: "image/png",
//           width: 400,
//           height: 300,
//           alt: "EyeDetect",
//         },
//         {
//           url: "images/seo_images/twitter-image-800x600.png",
//           type: "image/png",
//           width: 800,
//           height: 600,
//           alt: "EyeDetect",
//         },
//         {
//           url: "images/seo_images/opengraph-image-1200-630.png",
//           type: "image/png",
//           width: 1200,
//           height: 630,
//           alt: "EyeDetect",
//         },
//       ],
//       locale: lang,
//     },
//   };
// }

export default async function Home({ params }) {
  const { lang } = await params;
  // const { seoMainPage } = await getDictionary(lang);

  // const pageUrlJsonLd = getSeoMetaPageUrl(lang);

  // const name_01 = seoMainPage.seoMetaNameJsonLd_1;

  // const jsonLd = {
  //   "@context": "http://schema.org",
  //   "@type": "BreadcrumbList",
  //   itemListElement: {
  //     "@type": "ListItem",
  //     position: 1,
  //     item: {
  //       "@id": pageUrlJsonLd,
  //       name: name_01,
  //     },
  //   },
  // };

  const dictionary = await getDictionary(lang);
  const faqData = faqHomeData;

  return (
    <>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}

      <HomeHeroSection lang={lang} dictionary={dictionary} />
      <HomePortfolioSection lang={lang} dictionary={dictionary} />
      <HomeExperienceSection lang={lang} dictionary={dictionary} />
      <HomeWhyMeSection lang={lang} dictionary={dictionary} />
      <HomeTeamSection lang={lang} dictionary={dictionary} />
      <HomeStatisticsSection lang={lang} dictionary={dictionary} />
      <HomeAfterWorkSection lang={lang} dictionary={dictionary} />
      <HomeServicesSection lang={lang} dictionary={dictionary} />
      <HomeWorkProcessSection lang={lang} dictionary={dictionary} />
      <HomeFaqSection lang={lang} dictionary={dictionary} data={faqData} />
    </>
  );
}

// ----------------------------------------------------------------------------------------------------

// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol>
//           <li>
//             Get started by editing <code>src/app/page.js</code>.
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.secondary}
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
