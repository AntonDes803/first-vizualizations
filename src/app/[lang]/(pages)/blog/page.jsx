import BlogSection from "@/sections/blogSection/BlogSection";
import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import { getDictionary } from "@/helpers/getDictionary";
import { faqHomeData } from "@/data/faqHomeData";

const BlogPage = async ({ params }) => {
  const { lang } = await params;
  const { blogSection, homeFaqSection } = await getDictionary(lang);
  const faqData = faqHomeData;

  return (
    <>
      <BlogSection lang={lang} dictionary={blogSection} />
      <HomeFaqSection lang={lang} dictionary={homeFaqSection} data={faqData} />
    </>
  );
};

export default BlogPage;
