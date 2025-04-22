import BlogSection from "@/sections/blogSection/BlogSection";
import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import { getDictionary } from "@/helpers/getDictionary";
import { blogFaqData } from "@/data/faq/blogFaqData";

const BlogPage = async ({ params }) => {
  const { lang } = await params;
  const { blogSection, homeFaqSection } = await getDictionary(lang);

  return (
    <>
      <BlogSection lang={lang} dictionary={blogSection} />
      <HomeFaqSection
        lang={lang}
        dictionary={homeFaqSection}
        data={blogFaqData}
      />
    </>
  );
};

export default BlogPage;
