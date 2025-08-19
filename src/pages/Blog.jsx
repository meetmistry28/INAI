import React from 'react';
import BlogSection from '../components/BlogSection';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import './Blog.css';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>INAI Worlds Blog | AI Solutions & Tech Insights | INAI Worlds</title>
        <meta
          name="description"
          content="Explore the INAI Worlds Blog for the latest AI solutions, technology insights, and expert articles to keep you informed and ahead in the world of AI innovation."
        />
      </Helmet>
      <div className="blog-page">
        <BlogSection />
        {/* <CTA /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Blog; 