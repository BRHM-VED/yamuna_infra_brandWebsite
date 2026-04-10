import React from 'react';
import { colors, fonts } from '../../../utils';

const DisclaimerContent: React.FC = () => (
  <>
    <p
      className="text-[14px] md:text-[18px] leading-[1.9] opacity-90"
      style={{ fontFamily: fonts.body, color: colors.text.secondary }}
    >
      The information provided on this website by Sri Yamuna Infraestate Pvt. Ltd. (&quot;Shri Yamuna Infra&quot;) is
      for general informational purposes only. By continuing to use this website, you acknowledge and agree to the
      terms of this Disclaimer.
    </p>

    <div className="mt-8 md:mt-10 space-y-8 md:space-y-10">
      <div>
        <h2 className="text-[18px] md:text-[24px] leading-tight" style={{ fontFamily: fonts.heading, color: colors.secondary }}>
          1. General Disclaimer
        </h2>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          The content on this website — including text, images, project details, and related material — is provided in
          good faith and for general informational use only. Shri Yamuna Infra does not make any warranties, express or
          implied, regarding the completeness, accuracy, reliability, suitability, or availability of the information
          contained herein.
        </p>
      </div>

      <div>
        <h2 className="text-[18px] md:text-[24px] leading-tight" style={{ fontFamily: fonts.heading, color: colors.secondary }}>
          2. Artistic Renderings & Visual Representations
        </h2>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          All images, 3D renders, floor plans, elevations, interior visuals, and project illustrations shown on this
          website are artistic impressions only. They are indicative of the proposed development and may not accurately
          represent the final built product. Actual finishes, fittings, landscaping, amenities, and dimensions may vary
          from what is depicted.
        </p>
      </div>

      <div>
        <h2 className="text-[18px] md:text-[24px] leading-tight" style={{ fontFamily: fonts.heading, color: colors.secondary }}>
          3. Pricing Disclaimer
        </h2>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          All prices and payment plans mentioned on this website are indicative and subject to change without prior
          notice. Prices may vary based on unit type, floor, view, applicable government taxes, registration charges, and
          other statutory levies. The final price is confirmed only through a formally executed Buyer–Seller Agreement
          with an authorised representative of Shri Yamuna Infra.
        </p>
      </div>

      <div>
        <h2 className="text-[18px] md:text-[24px] leading-tight" style={{ fontFamily: fonts.heading, color: colors.secondary }}>
          4. Not Financial or Investment Advice
        </h2>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          Nothing on this website constitutes financial, investment, legal, or tax advice. Any statements regarding
          capital appreciation, rental yields, return on investment, or market trends are based on general industry data
          and are not guarantees of future performance. Prospective buyers should consult independent financial and legal
          advisors before making any investment decision.
        </p>
      </div>

      <div>
        <h2 className="text-[18px] md:text-[24px] leading-tight" style={{ fontFamily: fonts.heading, color: colors.secondary }}>
          5. Under-Construction Projects
        </h2>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          Some projects listed on this website are currently under construction. Project completion timelines, possession
          dates, and amenity delivery schedules are estimated and may be subject to revision due to factors including but
          not limited to regulatory approvals, force majeure events, or unforeseen construction challenges. Buyers are
          advised to refer to the RERA project registration for official timelines.
        </p>
      </div>

      <div>
        <h2 className="text-[18px] md:text-[24px] leading-tight" style={{ fontFamily: fonts.heading, color: colors.secondary }}>
          6. RERA Registration Disclaimer
        </h2>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          Projects that are mandatorily required to be registered under the Real Estate (Regulation and Development) Act,
          2016 are registered with UP RERA. The information provided here does not substitute the official RERA
          disclosure documents. Buyers are encouraged to review the RERA registration certificate and project disclosures
          on the UP RERA portal before committing to any purchase.
        </p>
      </div>

      <div>
        <h2 className="text-[18px] md:text-[24px] leading-tight" style={{ fontFamily: fonts.heading, color: colors.secondary }}>
          7. Accuracy of Information
        </h2>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          While we endeavour to keep the information on our website accurate and current, Shri Yamuna Infra makes no
          representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability,
          or availability with respect to the website or any information, products, services, or related content
          contained on the website for any purpose.
        </p>
      </div>

      <div>
        <h2 className="text-[18px] md:text-[24px] leading-tight" style={{ fontFamily: fonts.heading, color: colors.secondary }}>
          8. External Links
        </h2>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          This website may link to external websites that are not controlled or maintained by Shri Yamuna Infra. We
          have no control over the nature, content, and availability of those sites and do not endorse the views expressed
          within them. The inclusion of any link does not imply a recommendation or endorsement of the linked website.
        </p>
      </div>

      <div>
        <h2 className="text-[18px] md:text-[24px] leading-tight" style={{ fontFamily: fonts.heading, color: colors.secondary }}>
          9. Contact Us
        </h2>
        <p
          className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          For any queries related to this Disclaimer, please contact us at{' '}
          <a
            href="mailto:info@shriyamunainfra.com"
            className="underline underline-offset-4 hover:opacity-80"
            style={{ color: colors.accent }}
          >
            info@shriyamunainfra.com
          </a>{' '}
          or call our toll-free number{' '}
          <a
            href="tel:18001211101"
            className="underline underline-offset-4 hover:opacity-80"
            style={{ color: colors.accent }}
          >
            1800-121-1101
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default DisclaimerContent;
