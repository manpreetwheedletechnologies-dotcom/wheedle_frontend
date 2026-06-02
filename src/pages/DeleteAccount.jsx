import React from "react";
import SEO from "../components/SEO";

const DeleteAccount = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="User Data Deletion | Wheedle Technologies"
        description="Request deletion of your personal data and Google user data from Wheedle Technologies."
        url="https://www.wheedletechnologies.ai/delete-account"
      />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">
          User Data Deletion
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          Last Updated: May 27, 2026
        </p>

        {/* Google Compliance Notice */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold text-red-900 mb-3">
            Google User Data Deletion Notice
          </h2>

          <p className="text-gray-700 leading-7">
            Wheedle Technologies allows users to request deletion of
            personal information and Google user data collected through
            our website, services, or Google integrations.
          </p>

          <p className="text-gray-700 leading-7 mt-4">
            Upon verified request, we will securely delete or anonymize
            applicable user data from our active systems unless retention
            is required for legal, security, fraud prevention, or
            compliance obligations.
          </p>

          <p className="text-gray-700 leading-7 mt-4">
            We do not sell Google user data to third parties and do not
            use Google user data for advertising, AI training,
            profiling, or unrelated commercial purposes.
          </p>
        </div>

        <div className="space-y-10 text-gray-800 leading-8">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Introduction
            </h2>

            <p>
              Wheedle Technologies respects user privacy and provides
              users with the ability to request deletion of personal
              information submitted through our website or services.
            </p>

            <p className="mt-4">
              This page explains how users can request deletion of
              personal information and Google user data associated
              with our services.
            </p>
          </section>

          {/* What Data Can Be Deleted */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Data Eligible for Deletion
            </h2>

            <p>
              Users may request deletion of information including:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Submitted contact form information</li>
              <li>Inquiry or communication records</li>
              <li>Google account profile information shared with consent</li>
              <li>Authorized Google user data associated with our services</li>
            </ul>
          </section>

          {/* How to Request */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              How to Request Data Deletion
            </h2>

            <p>
              To request deletion of your personal data or Google user
              data, please send an email to:
            </p>

            <p className="mt-4 font-medium">
              <a
                href="mailto:info@wheedletechnologies.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-all"
              >
                info@wheedletechnologies.ai
              </a>
            </p>

            <p className="mt-4">
              Please include the following information in your request:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Your full name</li>
              <li>Your email address</li>
              <li>Details about the data you want deleted</li>
              <li>Any associated Google account email address if applicable</li>
              <li>Any additional verification information if required</li>
            </ul>
          </section>

          {/* Verification */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Verification Process
            </h2>

            <p>
              For security purposes, we may verify your identity before
              processing any deletion request to ensure that the request
              is being made by the rightful individual.
            </p>

            <p className="mt-4">
              Verification measures help protect user accounts and
              prevent unauthorized deletion requests.
            </p>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Deletion Timeline
            </h2>

            <p>
              Verified deletion requests are generally processed within
              30 days.
            </p>

            <p className="mt-4">
              Once the deletion process is completed, applicable
              personal data and Google user data will be permanently
              removed from our active systems where feasible and
              legally permitted.
            </p>
          </section>

          {/* Retained Data */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Data That May Be Retained
            </h2>

            <p>
              Certain information may be retained where required for:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Legal compliance obligations</li>
              <li>Fraud prevention and security purposes</li>
              <li>Dispute resolution</li>
              <li>Business record retention requirements</li>
              <li>Enforcement of agreements and policies</li>
            </ul>

            <p className="mt-4">
              Any retained data will continue to be protected under
              appropriate security safeguards.
            </p>
          </section>

          {/* Google User Data */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Google User Data Handling
            </h2>

            <p>
              Any Google user data accessed through Google APIs is used
              solely to provide and improve user-facing functionality
              requested by users.
            </p>

            <p className="mt-4">
              Wheedle Technologies does not:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Sell Google user data</li>
              <li>Use Google user data for advertising</li>
              <li>Use Google user data for AI model training</li>
              <li>Transfer Google user data to data brokers</li>
              <li>Use Google user data for unrelated commercial purposes</li>
            </ul>
          </section>

          {/* No Account */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              No User Account Requirement
            </h2>

            <p>
              Our website may not require users to create accounts.
              However, if personal information has been submitted
              through forms, inquiries, emails, Google sign-in,
              or communication channels, users may still request
              deletion of that data.
            </p>
          </section>

          {/* Related Policies */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Related Policies
            </h2>

            <p>
              For more information regarding how we collect, process,
              protect, and use data, please review:
            </p>

            <div className="mt-4 space-y-2">
              <p>
                <a
                  href="/privacy-policy"
                  className="text-blue-600 underline"
                >
                  Privacy Policy
                </a>
              </p>

              <p>
                <a
                  href="/terms-conditions"
                  className="text-blue-600 underline"
                >
                  Terms & Conditions
                </a>
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Contact Information
            </h2>

            <p>
              If you have questions regarding user data deletion,
              please contact:
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
                  className="text-blue-600 underline break-all"
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
                  className="text-blue-600 underline break-all"
                >
                  https://www.wheedletechnologies.ai
                </a>
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default DeleteAccount;