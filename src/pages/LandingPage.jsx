import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Vision from "../components/Vision";
import Steps from "../components/Steps";
import Features from "../components/Features";
import Businesses from "../components/Businesses";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function LandingPage({ openBot }) {
    const Schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Wheedle Technologies Private Limited",
  "url": "https://www.wheedletechnologies.ai/",
  "logo": "https://www.wheedletechnologies.ai/assets/mainLogo-B41DAHRQ.svg",
  "description": "Wheedle Technologies is an AI automation, consultation, and development company helping businesses optimize operations and scale using advanced AI solutions.",
 
  "foundingDate": "2017-09-29",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office No S-12, IInd Floor, D-242, Sector-63",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201301",
    "addressCountry": "IN"
  },

  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  },

  "sameAs": [
    "https://x.com/WheedleTechno/",
    "https://www.linkedin.com/company/wheedle-technology/",
    "https://www.instagram.com/wheedletechnologies/",
    "https://www.youtube.com/@wheedletechnologies/",
    "https://www.facebook.com/profile.php?id=61588224459976/"
  ]
}
  return (
    <>
      <SEO
       title="AI Automation & Development | Wheedle Technologies"
        description="Scale your business with AI automation, development & consulting services by Wheedle Technologies. Build smarter workflows & grow faster. "
        url="https://www.wheedletechnologies.ai/"
        schema={Schema}
      />
      <Header />
      <Hero openBot={openBot} />
      <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Main_BG.jpg')",
        }}>

        <Partners />
        <Vision />
        <Steps />
        <Features />
        <Businesses />
        <Newsletter
          content={{
            titleLine1: "Stay Ahead in the AI-Driven World:",
            titleLine2Primary: "Latest Insights & ",
            titleLine2Secondary: "Updates",
            description: (
              <>
                Stay updated with the latest in AI platforms, autonomous systems, agentic marketing,  <br className="hidden md:block" /> and digital innovation—delivered straight to your inbox.
              </>),
            inputType: "email",
            inputPlaceholder: "Enter your email",
            buttonText: "Get The Tech Brief",
            successMessage: "Your contact is successfully registered for newsletter",
          }}
        />
        <Testimonials />
        <Footer />
      </div>
    </>

  );
}

export default LandingPage;
