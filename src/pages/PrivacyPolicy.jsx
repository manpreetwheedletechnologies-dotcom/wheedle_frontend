import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Badge from "../components/Badge";

const PrivacyPolicy = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header />
      
      {/* HERO / BLUE LIGHT SECTION */}
        <section className="w-full flex justify-center bg-[#010509] mt-16 lg:mt-22">
          <div className="relative w-full max-w-[1440px] min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh]">
            {/* Frame Image */}
            <img
              src="/frame-image.png"
              alt="Frame"
              className="
              absolute inset-0 w-full h-full
              object-cover
              lg:object-contain
            "
            />

            {/* Content */}
            <div
              className="
              relative z-10 w-full h-full
              flex flex-col items-center justify-center
              px-5 sm:px-8
              text-white gap-8 text-center
              -translate-y-6 sm:-translate-y-10 lg:-translate-y-14
              /* TOP GAP FIX */
            pt-24 sm:pt-28
            lg:pt-0

            /* BOTTOM SAFE AREA */
            pb-32 sm:pb-28
            lg:pb-0

            lg:-translate-y-14
            "
            >
              <Badge text="Terms and Conditions" margin = ""/>
              <div className="max-w-[900px] flex flex-col items-center gap-5">
                <h1 className="font-gotham font-medium text-[28px] sm:text-[32px] lg:text-[40px] leading-tight lg:leading-[52px]">
              Terms & Conditions 
                </h1>

                <p className="font-inter font-medium text-sm sm:text-[15px] lg:text-base leading-relaxed">
                  This page defines the legal agreement between you and our company regarding access to and use of our services.
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* CONTENT SECTION – AFTER BLUE LIGHT */}
      <section className="w-full -mt-24 sm:-mt-30 lg:-mt-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/BG.png')" }}>
        
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 py-16 space-y-10 text-left">
          <h1 className="text-center font-gotham font-medium text-[28px] sm:text-[35px] lg:text-[43px] leading-tight lg:leading-[52px]">
            Terms & Conditions
          </h1>

          {/* 1 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to Wheedle Technologies. By accessing or using our
              website, services, or engaging with us in any manner, you agree to
              comply with and be bound by the terms outlined below. These terms
              govern your use of our services, platforms, and communications.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              2. Use of Website
            </h2>
            <p className="text-gray-300 mb-3">
              You agree to use our website and services only for lawful
              purposes. You must not:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Misuse, disrupt, or attempt unauthorized access</li>
              <li>Copy or distribute content without permission</li>
              <li>Use the site for fraudulent or harmful activities</li>
            </ul>
            <p className="text-gray-300 mt-3">
              We reserve the right to restrict access if misuse is identified.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              3. Intellectual Property
            </h2>
            <p className="text-gray-300 leading-relaxed">
              All content, designs, logos, visuals, text, code, and materials on
              this website are the intellectual property of Wheedle
              Technologies, unless stated otherwise. Unauthorized use,
              reproduction, or distribution is prohibited.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              4. Client Responsibilities
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Providing accurate and complete information</li>
              <li>Ensuring lawful use of delivered solutions</li>
            </ul>
            <p className="text-gray-300 mt-3">
              Delays caused by missing inputs may impact timelines.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Wheedle Technologies shall not be liable for indirect, incidental,
              or consequential damages arising from the use of our services or
              website. We do not guarantee uninterrupted or error-free operation
              of digital platforms.
            </p>
          </div>

          {/* 6 */}
          <div>
           <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              6. Privacy Policy

            </h2>
            <br />

            <h3 className="font-medium text-lg mb-2">
             6.1 Information We Collect
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Name, email, phone number, company details</li>
              <li>Project or service-related information</li>
              <li>Website usage data (cookies, analytics)</li>
            </ul>

            <h3 className="font-medium text-lg mb-2">
             6.2  How We Use Your Information
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Provide and improve our services</li>
              <li>Communicate project updates or marketing information</li>
              <li>Enhance website performance and user experience</li>
            </ul>

            <p className="text-gray-300 mb-4">
              We do not sell or rent personal data to third parties.
            </p>

            <h3 className="font-medium text-lg mb-2">
              6.3 Data Protection & Security
            </h3>
            <p className="text-gray-300 mb-4">
              We implement reasonable technical and organizational measures to
              protect your data against unauthorized access, loss, or misuse.
            </p>

            <h3 className="font-medium text-lg mb-2">
              6.4 Cookies & Analytics
            </h3>
            <p className="text-gray-300 mb-4">
              Our website may use cookies and analytics tools to understand user
              behavior and improve performance. You can manage cookie
              preferences through your browser settings.
            </p>

            <h3 className="font-medium text-lg mb-2">
              6.5 Third-Party Services
            </h3>
            <p className="text-gray-300 mb-4">
              We may use trusted third-party tools such as analytics, hosting,
              CRM, marketing platforms, and payment gateways. These providers
              follow their own privacy standards.
            </p>

            <h3 className="font-medium text-lg mb-2">
              6.6 Data Retention & Post-Service Handling
            </h3>
            <p className="text-gray-300">
              Once services are discontinued, data is retained only as required
              for legal, contractual, or operational purposes, after which it is
              securely deleted or anonymized.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              7. Confidentiality
            </h2>
            <p className="text-gray-300">
              All client data, business information, and project materials are
              treated as confidential and are not disclosed without consent,
              except where required by law.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              8. Termination
            </h2>
            <p className="text-gray-300">
              We reserve the right to suspend or terminate services or access if
              terms are violated, without prior notice.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              9. Changes to Terms & Policy
            </h2>
            <p className="text-gray-300">
              Wheedle Technologies may update these Terms & Privacy Policy from
              time to time. Continued use indicates acceptance of updated terms.
            </p>
          </div>
        </div>
      </section>
       <Footer />
    </div>
  );
};

export default PrivacyPolicy;
