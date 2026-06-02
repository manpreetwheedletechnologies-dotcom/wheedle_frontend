import React from "react";
import SEO from "../components/SEO";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="Terms & Conditions | Wheedle Technologies"
        description="Read the Terms & Conditions of Wheedle Technologies to understand the rules, responsibilities, policies, and legal guidelines for using our website and services."
        url="https://www.wheedletechnologies.ai/terms-conditions"
      />

      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">
          Terms & Conditions
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          Last Updated: May 27, 2026
        </p>

        {/* Google Compliance Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">
            Google API Services Disclosure
          </h2>

          <p className="text-gray-700 leading-7">
            Wheedle Technologies may use Google APIs and Google user data
            strictly for providing and improving user-facing features and
            services requested by users.
          </p>

          <p className="text-gray-700 leading-7 mt-4">
            We do not sell Google user data to third parties. We do not use
            Google user data for advertising, profiling, data brokerage,
            AI model training, or any unrelated purposes prohibited by
            Google API Services User Data Policy.
          </p>

          <p className="text-gray-700 leading-7 mt-4">
            By using our website and services, you agree to the collection,
            processing, and secure handling of data in accordance with our:
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="/privacy-policy"
              className="text-blue-600 underline font-medium"
            >
              Privacy Policy
            </a>

            <a
              href="/delete-account"
              className="text-blue-600 underline font-medium"
            >
              User Data Deletion
            </a>
          </div>
        </div>

        <div className="space-y-10 text-gray-800 leading-8">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Introduction
            </h2>

            <p>
              Welcome to{" "}
              <a
                href="https://www.wheedletechnologies.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 visited:text-blue-600 hover:text-blue-800 underline break-all"
              >
                Wheedle Technologies
              </a>.
            </p>

            <p className="mt-4">
              These Terms & Conditions (“Terms”) govern your access to and
              use of our website, services, products, and digital platforms
              operated by Wheedle Technologies (“Company,” “we,” “our,” or “us”).
            </p>

            <p className="mt-4">
              By accessing, browsing, or using this website, you acknowledge
              that you have read, understood, and agreed to comply with these
              Terms & Conditions.
            </p>

            <p className="mt-4">
              If you do not agree with any part of these Terms, you should
              discontinue use of the website immediately.
            </p>
          </section>

          {/* Google User Data Usage */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Google User Data Usage
            </h2>

            <p>
              If you choose to sign in or connect services using your
              Google account, Wheedle Technologies may access limited
              Google user data strictly for providing requested services
              and improving application functionality.
            </p>

            <p className="mt-4">
              Google user data may include:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Name and profile information</li>
              <li>Email address</li>
              <li>Basic account profile details</li>
              <li>Authorized Google account data explicitly approved by users</li>
            </ul>

            <p className="mt-4">
              We do not sell, rent, transfer, or use Google user data
              for targeted advertising, AI model training, data brokerage,
              or any unrelated commercial purposes.
            </p>

            <p className="mt-4">
              Google user data is accessed only with user consent and
              only for features directly related to our services.
            </p>
          </section>

          {/* Use of Website */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Use of Website
            </h2>

            <p>
              Users agree to use this website responsibly, ethically,
              and in compliance with all applicable laws and regulations.
            </p>

            <p className="mt-4">
              While using our website, you agree not to:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                Engage in unauthorized access to servers, systems, or data
              </li>

              <li>
                Attempt to disrupt website functionality or security
              </li>

              <li>
                Upload malicious software, viruses, or harmful code
              </li>

              <li>
                Use the website for fraudulent, unlawful, or misleading purposes
              </li>

              <li>
                Reproduce, copy, distribute, or exploit website content
                without prior written permission
              </li>

              <li>
                Interfere with other users’ access or experience
              </li>
            </ul>

            <p className="mt-4">
              We reserve the right to restrict or terminate access to users
              found violating these Terms.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Intellectual Property Rights
            </h2>

            <p>
              Unless otherwise stated, all content available on this website
              is the intellectual property of Wheedle Technologies, including
              but not limited to:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Website design and layout</li>
              <li>Branding and logos</li>
              <li>Text and written content</li>
              <li>Graphics and visuals</li>
              <li>Source code and software elements</li>
              <li>Images, videos, and digital assets</li>
            </ul>

            <p className="mt-4">
              All rights are reserved.
            </p>

            <p className="mt-4">
              Unauthorized reproduction, modification, republication,
              or distribution of website materials without written
              authorization is strictly prohibited and may result in legal action.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Services Offered
            </h2>

            <p>
              Wheedle Technologies provides technology-driven solutions
              and digital services, including but not limited to:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Artificial Intelligence (AI) solutions</li>
              <li>Software development</li>
              <li>Website and application development</li>
              <li>Automation services</li>
              <li>Digital transformation solutions</li>
              <li>Branding and digital marketing services</li>
              <li>IT consulting and business solutions</li>
            </ul>

            <p className="mt-4">
              Service availability, pricing, timelines, and deliverables
              may vary depending on project requirements and are subject
              to change without prior notice.
            </p>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Data Protection and Security
            </h2>

            <p>
              We implement commercially reasonable administrative,
              technical, and organizational safeguards to protect
              user data, including Google user data.
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2 mt-4">
              <li>Secure HTTPS encryption</li>
              <li>Restricted data access controls</li>
              <li>Authentication and authorization protections</li>
              <li>Monitoring against unauthorized access</li>
              <li>Industry-standard security practices</li>
            </ul>

            <p className="mt-4">
              We take reasonable measures to prevent unauthorized
              disclosure, misuse, alteration, or destruction of data.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Data Retention and Deletion
            </h2>

            <p>
              We retain personal information and Google user data
              only for as long as necessary to provide services,
              comply with legal obligations, resolve disputes,
              and enforce agreements.
            </p>

            <p className="mt-4">
              When data is no longer required, we take reasonable
              measures to securely delete or anonymize the information.
            </p>

            <p className="mt-4">
              Users may request deletion of their personal data
              at any time by visiting:
            </p>

            <a
              href="https://www.wheedletechnologies.ai/delete-account"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline break-all"
            >
              https://www.wheedletechnologies.ai/delete-account
            </a>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Contact Information
            </h2>

            <p>
              If you have any questions regarding these Terms & Conditions,
              you may contact us at:
            </p>

            <div className="mt-4 space-y-1">
              <p className="font-semibold">
                Wheedle Technologies
              </p>

              <p>
                Email:{" "}
                <a
                  href="mailto:info@wheedletechnologies.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 visited:text-blue-600 hover:text-blue-800 underline break-all"
                >
                  info@wheedletechnologies.ai
                </a>
              </p>

              <p>
                Website:{" "}
                <a
                  href="https://www.wheedletechnologies.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 visited:text-blue-600 hover:text-blue-800 underline break-all"
                >
                  www.wheedletechnologies.ai
                </a>
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default TermsConditions;




// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Badge from "../components/Badge";
// import SEO from "../components/SEO";

// /* ---------- COMPONENTS ---------- */

// const PolicyCard = ({ title, text, list }) => (
//   <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-7">
//     <h3 className="text-xl font-semibold mb-3">{title}</h3>

//     {text && <p className="text-gray-300">{text}</p>}

//     {list && (
//       <ul className="list-disc list-inside text-gray-300 space-y-2">
//         {list.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>
//     )}
//   </div>
// );

// /* ---------- PAGE ---------- */

// const TermsConditions = () => {
//   return (
//     <div className="w-full min-h-screen bg-black text-white">
//       <SEO
//       title="Terms & Conditions | Wheedle Technologies"
//         description="Read the Terms & Conditions of Wheedle Technologies to understand the terms that govern the use of our services. "
//         url="https://www.wheedletechnologies.ai/terms-conditions"
//       />

//       <Header />

//       {/* HERO */}
//       <section className="w-full flex justify-center bg-[#010509] mt-16 lg:mt-22">
//         <div className="relative w-full max-w-[1440px] min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh]">
//           <img
//             src="/frame-image.png"
//             alt="Frame"
//             className="absolute inset-0 w-full h-full object-cover lg:object-contain"
//           />

//           <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-5 text-center gap-6">
//             <Badge text="Legal" margin="" />

//             <h1 className="font-gotham font-medium text-[28px] sm:text-[32px] lg:text-[40px]">
//               Terms & Conditions
//             </h1>

//             <p className="text-gray-300 max-w-[700px]">
//               Learn how we collect, use, and protect your data along with the
//               terms that govern the use of our services.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CONTENT */}
//       <section
//         className="w-full -mt-24 sm:-mt-30 lg:-mt-20 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: "url('/BG.png')" }}
//       >
//         <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-20 space-y-16">

          
          

//           {/* ================= TERMS ================= */}
//           <div>
//             <h2 className="text-3xl font-semibold mb-8">
//               Terms & Conditions
//             </h2>

//             <div className="grid gap-6">
//               <PolicyCard
//                 title="Introduction"
//                 text="By using our website and services you agree to these terms."
//               />

//               <PolicyCard
//                 title="Use of Website"
//                 list={[
//                   "Use services lawfully",
//                   "No unauthorized access",
//                   "No copying without permission",
//                 ]}
//               />

//               <PolicyCard
//                 title="Intellectual Property"
//                 text="All designs, code, and materials belong to Wheedle Technologies."
//               />

//               <PolicyCard
//                 title="Client Responsibilities"
//                 list={[
//                   "Provide accurate information",
//                   "Use solutions lawfully",
//                 ]}
//               />

//               <PolicyCard
//                 title="Limitation of Liability"
//                 text="We are not liable for indirect damages or downtime."
//               />

//               <PolicyCard
//                 title="Confidentiality"
//                 text="Client information is treated as confidential."
//               />

//               <PolicyCard
//                 title="Termination"
//                 text="Services may be suspended if terms are violated."
//               />

//               <PolicyCard
//                 title="Changes"
//                 text="Terms may change over time."
//               />
//             </div>
//           </div>

//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default TermsConditions;