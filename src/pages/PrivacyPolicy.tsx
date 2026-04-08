import React, { useEffect } from "react";
import Navbar from "../layouts/Navbar";
import FooterSection from "../features/home/components/FooterSection";
import { colors, fonts } from "../utils";

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Navbar mobileVariant="light" showNewProjectBanner mobileCollapsibleBanner />
      </header>

      <main className="pt-[100px] md:pt-[93px] pb-16 md:pb-24">
        <section className="px-4 md:px-[60px]">
          <div className="max-w-[980px] mx-auto">
            <div className="pt-10 md:pt-16 pb-6 md:pb-10">
              <div className="flex flex-col items-start gap-[6px]">
                <p
                  className="text-[12px] md:text-[14px] font-medium tracking-[4.44px] uppercase"
                  style={{ fontFamily: fonts.body, color: colors.destinationTag }}
                >
                  LEGAL
                </p>
                <div
                  className="h-[2.5px] w-[25.5px] opacity-60"
                  style={{ backgroundColor: colors.primary }}
                />
              </div>

              <h1
                className="mt-3 text-[32px] md:text-[56px] leading-[1.1] tracking-[-0.96px] md:tracking-[-1.68px]"
                style={{ fontFamily: fonts.heading, color: colors.text.primary }}
              >
                Privacy Policy
              </h1>

              <p
                className="mt-4 text-[14px] md:text-[18px] leading-[1.7] opacity-80"
                style={{ fontFamily: fonts.body, color: colors.text.secondary }}
              >
                Last Updated: November 2025
              </p>
            </div>

            <div
              className="rounded-[2px]"
              style={{
                backgroundColor: colors.surface,
                boxShadow: "0 10px 60px rgba(0,0,0,0.05)",
              }}
            >
              <div className="px-5 md:px-8 py-7 md:py-10">
                <p
                  className="text-[14px] md:text-[18px] leading-[1.9] opacity-90"
                  style={{ fontFamily: fonts.body, color: colors.text.secondary }}
                >
                  Welcome to Shri Yamuna Infra. Your privacy is important to us. This Privacy Policy explains
                  how we collect, use, and protect your personal information when you visit our
                  website{" "}
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
                    <h2
                      className="text-[18px] md:text-[24px] leading-tight"
                      style={{ fontFamily: fonts.heading, color: colors.secondary }}
                    >
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
                      This information is collected when you voluntarily share it with us through
                      our website forms or contact options.
                    </p>
                  </div>

                  <div>
                    <h2
                      className="text-[18px] md:text-[24px] leading-tight"
                      style={{ fontFamily: fonts.heading, color: colors.secondary }}
                    >
                      2. How We Use Your Information
                    </h2>
                    <p
                      className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
                      style={{ fontFamily: fonts.body, color: colors.text.secondary }}
                    >
                      Currently, we do not use your personal data for any marketing, promotional,
                      or analytical purposes. Your details are collected only to maintain
                      communication or respond to your queries, if applicable.
                    </p>
                  </div>

                  <div>
                    <h2
                      className="text-[18px] md:text-[24px] leading-tight"
                      style={{ fontFamily: fonts.heading, color: colors.secondary }}
                    >
                      3. Data Sharing and Disclosure
                    </h2>
                    <p
                      className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
                      style={{ fontFamily: fonts.body, color: colors.text.secondary }}
                    >
                      We do not share, sell, or rent your personal information with any third
                      parties. No third-party tools or external data processors are used on our
                      website at this time.
                    </p>
                  </div>

                  <div>
                    <h2
                      className="text-[18px] md:text-[24px] leading-tight"
                      style={{ fontFamily: fonts.heading, color: colors.secondary }}
                    >
                      4. User Rights
                    </h2>
                    <p
                      className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
                      style={{ fontFamily: fonts.body, color: colors.text.secondary }}
                    >
                      At this stage, users do not have an account-based system or direct data
                      management options. If you wish to enquire about your data, you can contact
                      us via{" "}
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
                    <h2
                      className="text-[18px] md:text-[24px] leading-tight"
                      style={{ fontFamily: fonts.heading, color: colors.secondary }}
                    >
                      5. Data Security
                    </h2>
                    <p
                      className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
                      style={{ fontFamily: fonts.body, color: colors.text.secondary }}
                    >
                      We take your privacy seriously and follow reasonable security measures to
                      protect your data. All data shared with us is stored securely and protected
                      against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </div>

                  <div>
                    <h2
                      className="text-[18px] md:text-[24px] leading-tight"
                      style={{ fontFamily: fonts.heading, color: colors.secondary }}
                    >
                      6. Cookies
                    </h2>
                    <p
                      className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
                      style={{ fontFamily: fonts.body, color: colors.text.secondary }}
                    >
                      Our website currently does not use cookies or any tracking technologies. If
                      this changes in the future, this policy will be updated to reflect that.
                    </p>
                  </div>

                  <div>
                    <h2
                      className="text-[18px] md:text-[24px] leading-tight"
                      style={{ fontFamily: fonts.heading, color: colors.secondary }}
                    >
                      7. Updates to This Policy
                    </h2>
                    <p
                      className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
                      style={{ fontFamily: fonts.body, color: colors.text.secondary }}
                    >
                      We may update or modify this Privacy Policy from time to time. Any changes
                      will be reflected on this page with a revised “Last Updated” date.
                    </p>
                  </div>

                  <div>
                    <h2
                      className="text-[18px] md:text-[24px] leading-tight"
                      style={{ fontFamily: fonts.heading, color: colors.secondary }}
                    >
                      8. Contact Us
                    </h2>
                    <p
                      className="mt-3 text-[14px] md:text-[18px] leading-[1.9] opacity-90"
                      style={{ fontFamily: fonts.body, color: colors.secondary }}
                    >
                      If you have any questions or concerns about this Privacy Policy, please
                      contact us at{" "}
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
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default PrivacyPolicy;

