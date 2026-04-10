import React from 'react';
import { colors, fonts } from '../../../utils';

const PrivacyPolicyContent: React.FC = () => (
  <>
    <p
      className="text-[14px] md:text-[18px] leading-[1.9] opacity-90"
      style={{ fontFamily: fonts.body, color: colors.text.secondary }}
    >
      Welcome to Shri Yamuna Infra. Your privacy is important to us. This Privacy Policy explains how we collect, use,
      and protect your personal information when you visit our website{' '}
      <a
        href="https://shriyamunainfra.com/"
        className="underline underline-offset-4 hover:opacity-80"
        style={{ color: colors.accent }}
      >
        https://shriyamunainfra.com/
      </a>
      .
    </p>

    <div className="mt-8 md:mt-10 space-y-8 md:space-y-10">
      <div>
        <h2 className="text-[18px] md:text-[24px] leading-tight" style={{ fontFamily: fonts.heading, color: colors.secondary }}>
          1. Information We Collect
        </h2>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          We may collect the following personal information from you:
        </p>
        <ul
          className="mt-3 pl-5 list-disc text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
        </ul>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          This information is collected when you voluntarily share it with us through our website forms or contact
          options.
        </p>
      </div>

      <div>
        <h2 className="text-[18px] md:text-[24px] leading-tight" style={{ fontFamily: fonts.heading, color: colors.secondary }}>
          2. How We Use Your Information
        </h2>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          Currently, we do not use your personal data for any marketing, promotional, or analytical purposes. Your
          details are collected only to maintain communication or respond to your queries, if applicable.
        </p>
      </div>

      <div>
        <h2 className="text-[18px] md:text-[24px] leading-tight" style={{ fontFamily: fonts.heading, color: colors.secondary }}>
          3. Data Sharing and Disclosure
        </h2>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          We do not share, sell, or rent your personal information with any third parties. No third-party tools or
          external data processors are used on our website at this time.
        </p>
      </div>

      <div>
        <h2 className="text-[18px] md:text-[24px] leading-tight" style={{ fontFamily: fonts.heading, color: colors.secondary }}>
          4. User Rights
        </h2>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          At this stage, users do not have an account-based system or direct data management options. If you wish to
          enquire about your data, you can contact us via{' '}
          <a
            href="mailto:info@shriyamunainfra.com"
            className="underline underline-offset-4 hover:opacity-80"
            style={{ color: colors.accent }}
          >
            info@shriyamunainfra.com
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="text-[18px] md:text-[24px] leading-tight" style={{ fontFamily: fonts.heading, color: colors.secondary }}>
          5. Data Security
        </h2>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          We take your privacy seriously and follow reasonable security measures to protect your data. All data shared
          with us is stored securely and protected against unauthorized access, alteration, disclosure, or destruction.
        </p>
      </div>

      <div>
        <h2 className="text-[18px] md:text-[24px] leading-tight" style={{ fontFamily: fonts.heading, color: colors.secondary }}>
          6. Cookies
        </h2>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          Our website currently does not use cookies or any tracking technologies. If this changes in the future, this
          policy will be updated to reflect that.
        </p>
      </div>

      <div>
        <h2 className="text-[18px] md:text-[24px] leading-tight" style={{ fontFamily: fonts.heading, color: colors.secondary }}>
          7. Updates to This Policy
        </h2>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          We may update or modify this Privacy Policy from time to time. Any changes will be reflected on this page
          with a revised “Last Updated” date.
        </p>
      </div>

      <div>
        <h2 className="text-[18px] md:text-[24px] leading-tight" style={{ fontFamily: fonts.heading, color: colors.secondary }}>
          8. Contact Us
        </h2>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
          <a
            href="mailto:info@shriyamunainfra.com"
            className="underline underline-offset-4 hover:opacity-80"
            style={{ color: colors.accent }}
          >
            info@shriyamunainfra.com
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default PrivacyPolicyContent;
