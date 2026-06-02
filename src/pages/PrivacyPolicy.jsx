import React from "react";
import SEO from "../components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="Privacy Policy | Wheedle Technologies"
        description="Read the Privacy Policy of Wheedle Technologies to understand how we collect, use, store, protect, and process personal and Google user data."
        url="https://www.wheedletechnologies.ai/privacy-policy"
      />

      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          Last Updated: May 27, 2026
        </p>

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
              Your privacy is important to us, and we are committed to
              protecting the personal information and Google user data
              you share with us through our website, applications,
              products, and services.
            </p>

            <p className="mt-4">
              This Privacy Policy explains how Wheedle Technologies
              (“Company,” “we,” “our,” or “us”) collects, uses, stores,
              protects, processes, and discloses your information when
              you visit or interact with our website and services.
            </p>

            <p className="mt-4">
              By using our website, services, or Google-integrated
              applications, you consent to the practices described in
              this Privacy Policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Information We Collect
            </h2>

            <h3 className="text-xl font-medium mb-2">
              1. Personal Information
            </h3>

            <p>
              Information you voluntarily provide to us may include:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company or business details</li>
              <li>Billing or payment information (if applicable)</li>
              <li>
                Information submitted through contact forms,
                inquiry forms, support forms, or subscriptions
              </li>
            </ul>

            <h3 className="text-xl font-medium mt-8 mb-2">
              2. Automatically Collected Information
            </h3>

            <p>
              When you access our website, we may automatically collect
              certain technical and usage information, such as:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Operating system</li>
              <li>Referral URLs</li>
              <li>Pages visited and time spent on the website</li>
              <li>Clickstream and browsing behavior</li>
              <li>Date and time of visits</li>
            </ul>

            <h3 className="text-xl font-medium mt-8 mb-2">
              3. Google User Data
            </h3>

            <p>
              If you sign in with Google or use features connected to
              Google APIs, we may collect and process limited Google
              user data including:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Google account email address</li>
              <li>Basic profile information</li>
              <li>Google account identifier</li>
              <li>
                Data explicitly authorized by the user through
                Google OAuth consent
              </li>
            </ul>

            <p className="mt-4">
              We only access Google user data that is necessary for
              providing or improving user-facing functionality of our
              application and services.
            </p>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              How We Use Your Information
            </h2>

            <p>
              We may use collected information for purposes including:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Providing and managing our services</li>
              <li>Responding to inquiries and support requests</li>
              <li>Improving website functionality and user experience</li>
              <li>Sending service-related communications</li>
              <li>Analyzing website traffic and performance</li>
              <li>Maintaining platform security and fraud prevention</li>
              <li>Complying with legal obligations</li>
            </ul>

            <p className="mt-4">
              Google user data is used solely for providing or improving
              application functionality that is visible and beneficial
              to users.
            </p>

            <p className="mt-4">
              We do not use Google user data for:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Targeted advertising</li>
              <li>Personalized advertising</li>
              <li>Retargeting advertisements</li>
              <li>Selling user data</li>
              <li>Training AI or machine learning models</li>
              <li>Data broker or reseller activities</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Cookies and Tracking Technologies
            </h2>

            <p>
              Our website may use cookies, web beacons, pixels,
              analytics tools, and similar tracking technologies to:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Enhance user experience</li>
              <li>Analyze website traffic and behavior</li>
              <li>Store user preferences</li>
              <li>Improve website functionality</li>
              <li>Maintain website security</li>
            </ul>

            <p className="mt-4">
              Users may modify browser settings to refuse cookies or
              notify when cookies are used. Disabling cookies may
              affect certain website functionality.
            </p>
          </section>

          {/* Google Services */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Google Services and Google User Data
            </h2>

            <p>
              Our application may use Google APIs and Google OAuth
              services for authentication and related functionality.
            </p>

            <p className="mt-4">
              Any Google user data accessed by our application is:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Accessed only with user consent</li>
              <li>Used only for requested application functionality</li>
              <li>Protected using industry-standard safeguards</li>
              <li>Never sold to third parties</li>
              <li>
                Never shared for advertising or marketing purposes
              </li>
            </ul>

            <p className="mt-4">
              We do not transfer Google user data to third parties
              except where necessary to operate and secure our services
              or where required by law.
            </p>
          </section>

          {/* Third Party Services */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Third-Party Services
            </h2>

            <p>
              We may engage trusted third-party providers for:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Website hosting</li>
              <li>Analytics services</li>
              <li>Customer communication</li>
              <li>Technical support</li>
              <li>Payment processing</li>
            </ul>

            <p className="mt-4">
              These providers may access information only as necessary
              to perform services on our behalf and must maintain
              confidentiality and security standards.
            </p>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Data Sharing and Disclosure
            </h2>

            <p>
              We do not sell, rent, trade, or disclose Google user
              data or personal information to third parties for
              advertising or commercial resale purposes.
            </p>

            <p className="mt-4">
              Information may be disclosed only:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>To trusted service providers assisting operations</li>
              <li>To comply with legal obligations</li>
              <li>To protect security and legal rights</li>
              <li>
                During mergers, acquisitions, or business restructuring
              </li>
            </ul>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Data Security
            </h2>

            <p>
              We implement commercially reasonable administrative,
              technical, and organizational safeguards to protect
              personal information and Google user data against:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Unauthorized access</li>
              <li>Data loss</li>
              <li>Misuse</li>
              <li>Alteration or disclosure</li>
            </ul>

            <p className="mt-4">
              Security procedures including encryption,
              authentication controls, and restricted access
              mechanisms are used to protect sensitive data.
            </p>

            <p className="mt-4">
              However, no online transmission or storage system can
              be guaranteed to be 100% secure.
            </p>
          </section>

          {/* Retention */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Data Retention and Deletion
            </h2>

            <p>
              We retain personal information and Google user data
              only for as long as necessary to:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Provide requested services</li>
              <li>Fulfill business and legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce agreements and policies</li>
            </ul>

            <p className="mt-4">
              When data is no longer required, we take reasonable
              steps to securely delete, anonymize, or destroy it.
            </p>

            <p className="mt-4">
              Users may request deletion of their personal data
              by contacting us directly.
            </p>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Your Privacy Rights
            </h2>

            <p>
              Users may have the right to:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Access personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of personal information</li>
              <li>Withdraw consent where applicable</li>
              <li>Object to certain processing activities</li>
            </ul>

            <p className="mt-4">
              To exercise these rights, users may contact us using
              the information below.
            </p>
          </section>

          {/* External Links */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              External Links
            </h2>

            <p>
              Our website may contain links to third-party websites.
              We are not responsible for the privacy practices,
              content, or policies of external websites.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Children’s Privacy
            </h2>

            <p>
              Our services are not intended for children under
              the age of 13. We do not knowingly collect personal
              information from children.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Changes to This Privacy Policy
            </h2>

            <p>
              We may update this Privacy Policy periodically.
              Updated versions will be posted on this page with
              a revised effective date.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Contact Us
            </h2>

            <p>
              If you have any questions regarding this Privacy
              Policy or your data, you may contact us at:
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

export default PrivacyPolicy;





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

// const PrivacyPolicy = () => {
//   return (
//     <div className="w-full min-h-screen bg-white text-slate-900">
//       <SEO
//         title="Privacy Policy | Wheedle Technologies"
//         description="Read the Privacy Policy of Wheedle Technologies to understand how we collect, use and protect your personal data and information."
//         url="https://www.wheedletechnologies.ai/privacy-policy"
//       />

//       <Header />

//       <main className="w-full bg-white">
//         <section className="w-full border-b border-gray-200">
//           <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
//             <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-4">
//               Privacy Policy
//             </p>
//             <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
//               Privacy Policy
//             </h1>
//             <p className="mt-6 text-base leading-8 text-slate-700 max-w-3xl">
//               Wheedle Technologies is committed to protecting the privacy of our visitors and customers. This policy explains what information we collect, why we collect it, and how it is used and protected.
//             </p>
//           </div>
//         </section>

//         <section className="w-full">
//           <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 py-16 space-y-16 text-slate-800">
//             <article className="space-y-4">
//               <h2 className="text-2xl font-semibold">Information We Collect</h2>
//               <p className="leading-8">
//                 We may collect information you provide directly when you contact us, request a quote, sign up for updates, or otherwise interact with our website. This may include your name, email address, phone number, company name, job title, and project details.
//               </p>
//               <p className="leading-8">
//                 We may also collect information automatically about how you use our website, such as IP address, browser type, operating system, pages visited, and referring website.
//               </p>
//             </article>

//             <article className="space-y-4">
//               <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
//               <ul className="list-disc list-inside space-y-2 leading-8">
//                 <li>To respond to inquiries and provide the products or services you request.</li>
//                 <li>To personalize and improve our website and offerings.</li>
//                 <li>To send marketing communications, service updates, and other information when permitted.</li>
//               </ul>
//             </article>

//             <article className="space-y-4">
//               <h2 className="text-2xl font-semibold">Cookies and Analytics</h2>
//               <p className="leading-8">
//                 We may use cookies and similar tracking technologies to understand website usage, remember preferences, and improve performance. You can manage cookies through your browser settings.
//               </p>
//             </article>

//             <article className="space-y-4">
//               <h2 className="text-2xl font-semibold">Data Security</h2>
//               <p className="leading-8">
//                 We maintain reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, or alteration. However, no system is completely secure, and we cannot guarantee absolute security.
//               </p>
//             </article>

//             <article className="space-y-4">
//               <h2 className="text-2xl font-semibold">Third-Party Services</h2>
//               <p className="leading-8">
//                 We may share information with trusted third-party providers who help us operate the website, process data, or conduct marketing. These providers are required to protect the information and use it only for the purposes we specify.
//               </p>
//             </article>

//             <article className="space-y-4">
//               <h2 className="text-2xl font-semibold">Data Retention</h2>
//               <p className="leading-8">
//                 We retain personal information only as long as necessary to fulfill the purposes described in this policy, or as required by law. When information is no longer needed, we securely delete or anonymize it.
//               </p>
//             </article>

//             <article className="space-y-4">
//               <h2 className="text-2xl font-semibold">Contact Us</h2>
//               <p className="leading-8">
//                 If you have questions about this Privacy Policy, please contact us at info@wheedletechnologies.ai.
//               </p>
//             </article>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default PrivacyPolicy;