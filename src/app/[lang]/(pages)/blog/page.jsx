import BlogSection from "@/sections/blogSection/BlogSection";
import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import { getDictionary } from "@/helpers/getDictionary";
import { faqHomeData } from "@/data/faqHomeData";

const BlogPage = async ({ params }) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const faqData = faqHomeData;

  return (
    <>
      <BlogSection lang={lang} dictionary={dictionary} />
      <HomeFaqSection lang={lang} dictionary={dictionary} data={faqData} />
    </>
  );
};

export default BlogPage;
