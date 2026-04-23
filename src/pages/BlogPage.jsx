import React from "react";
import Header from "../components/Header";
import BlogHero from "../components/BlogHero";
import BlogCategories from "../components/BlogCategories";
import BlogLatest from "../components/BlogLatest";
import BlogCollection from "../components/BlogCollection";
// import BlogTestimonials from "../components/BlogTestimonials";
import BlogNewsletter from "../components/BlogNewsletter";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import SEO from "../components/SEO";

function BlogPage() {
  return (
    <div className="w-full min-h-screen">
      <SEO
      title="AI Blog & Insights | Wheedle Technologies"
        description="Read AI blogs, trends & automation insights from Wheedle Technologies to stay ahead in digital transformation and innovation."
        url="https://wheedletechnologies.ai/blog"
      />
      <Header />
       <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/BG.png')",
        }}>
      <BlogHero />
      <BlogCollection />
      <BlogCategories />
      <BlogLatest />
      <Testimonials />

      {/* <BlogNewsletter /> */}

      <Newsletter
        content={{
          titleLine1: "Subscribe to Our",
          titleLine2Primary: "",
          titleLine2Secondary: "Blog Newsletter",
          description: (
            <>
              Stay updated with the latest insights, trends, and expert opinions in technology, design, and digital transformation.  <br className="hidden md:block" /> Get valuable content delivered straight to your inbox no spam, just smart reads.
            </>),
          inputType: "email",
          inputPlaceholder: "Enter your email",
          buttonText: "Subscribe",
          successMessage: "Thanks for subscribing 🎉",
        }}
      />
      
      <Footer />
      </div>
    </div>
  );
}

export default BlogPage;
