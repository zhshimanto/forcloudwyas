"use client";
import useSearch from "@/hooks/useSearch";
import getAllBlogs from "@/libs/getAllBlogs";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import BlogCategories from "@/components/shared/sidebars/widgets/BlogCategories";
import RecentPosts from "@/components/shared/sidebars/widgets/RecentPosts";
import PopularBlogTags from "@/components/shared/sidebars/widgets/PopularBlogTags";
import bannerBgImage from "@/assets/img/about/about__bg__1.jpg";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const BlogDetailsPrimary = () => {
  const { slug } = useParams();
  const blogs = getAllBlogs(); // Fetch all blogs
  const blog = blogs.find(
    ({ url }) => url.toLowerCase() === slug.toLowerCase()
  );

  if (!blog) {
    return (
      <div className="error-404-section sp_bottom_70 sp_top_70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <div className="error-content">
                <h1 className="error-title" style={{
                  fontSize: '120px',
                  fontWeight: 'bold',
                  color: '#ff5e14',
                  marginBottom: '20px',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                }}>404</h1>
                <h2 className="mb-4" style={{
                  fontSize: '32px',
                  color: '#333',
                  fontWeight: '600'
                }}>Blog Post Not Found</h2>
                <p className="mb-4" style={{
                  fontSize: '18px',
                  color: '#666',
                  marginBottom: '30px'
                }}>The blog post you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <ButtonPrimary 
                  text="Return to Blog List" 
                  path="/blogs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { title, img, publishDate, desc, content } = blog;

  return (
    <div className="blog__details sp_bottom_70">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div
          className="breadcrumbarea"
          style={{ background: `url('${bannerBgImage.src}')` }}
        >
          <h1 className="text-center text-white">{title}</h1>
        </div>
      </div>
      <div className="container">
        <div className="row sp_top_70">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <div className="blog__details__wrapper">
              <div className="blog__details__img__wrapper">
                <div className="blog__details__img">
                  <Image src={img} alt={title} placeholder="blur" />
                </div>
                <div className="blog__details__small__button">
                  <span>{publishDate}</span>
                </div>
              </div>

              <div className="blog__details__heading">
                <h4>{title}</h4>
              </div>

              <div className="blog__details__content" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12">
            <RecentPosts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPrimary;
