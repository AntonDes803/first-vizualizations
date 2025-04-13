import BlogIdSection from "@/sections/blogIdSection/BlogIdSection";
import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import { getDictionary } from "@/helpers/getDictionary";
import { faqHomeData } from "@/data/faqHomeData";

const BlogIdPage = async ({ params }) => {
  const { lang } = await params;
  const { blogIdSection, homeFaqSection } = await getDictionary(lang);
  const faqData = faqHomeData;

  return (
    <>
      <BlogIdSection lang={lang} dictionary={blogIdSection} />
      <HomeFaqSection lang={lang} dictionary={homeFaqSection} data={faqData} />
    </>
  );
};

export default BlogIdPage;
