import BlogIdSection from "@/sections/blogIdSection/BlogIdSection";
import HomeFaqSection from "@/sections/homeSections/homeFaqSection/HomeFaqSection";
import { getDictionary } from "@/helpers/getDictionary";
import { arrOfBlogs } from "@/data/blog/arrOfBlogs";
import { homeFaqData } from "@/data/faq/homeFaqData";

const BlogIdPage = async ({ params }) => {
  const { lang, slug } = await params;
  const { blogIdSection, homeFaqSection } = await getDictionary(lang);

  const blogIdData = arrOfBlogs.find((item) => item.slug === slug);

  return (
    <>
      <BlogIdSection lang={lang} dictionary={blogIdSection} data={blogIdData} />
      <HomeFaqSection
        lang={lang}
        dictionary={homeFaqSection}
        data={homeFaqData}
      />
    </>
  );
};

export default BlogIdPage;
