import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getAllBlogs from "@/libs/getAllBlogs";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const blogs = getAllBlogs();
  const blog = blogs.find(
    ({ url }) => url.toLowerCase() === params.slug.toLowerCase()
  );

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The blog post you are looking for does not exist.",
    };
  }

  return {
    title: blog.title,
    description: blog.desc,
  };
}

const BlogDetailss = () => {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <BlogDetailsMain />
    </PageWrapper>
  );
};

export default BlogDetailss;
