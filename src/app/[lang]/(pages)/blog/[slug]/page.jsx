import BlogIdSection from "@/sections/blogIdSection/BlogIdSection";
import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import { getDictionary } from "@/helpers/getDictionary";
import { homeFaqData } from "@/data/faq/homeFaqData";

const BlogIdPage = async ({ params }) => {
  const { lang, slug } = await params;
  const { blogIdSection, homeFaqSection } = await getDictionary(lang);

  return (
    <>
      <BlogIdSection lang={lang} dictionary={blogIdSection} />
      <HomeFaqSection
        lang={lang}
        dictionary={homeFaqSection}
        data={homeFaqData}
      />
    </>
  );
};

export default BlogIdPage;
