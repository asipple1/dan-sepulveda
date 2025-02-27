/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--color-bodyTextWhite)",
            "--tw-prose-headings": "var(--color-bodyTextWhite)",
            "--tw-prose-links": "var(--color-bodyTextWhite)",
            "--tw-prose-bullets": "var(--color-bodyTextWhite)",
            "--tw-prose-counters": "var(--color-bodyTextWhite)",
            "--tw-prose-bold": "var(--color-bodyTextWhite)",
            h1: {
              fontSize: "clamp(1.9375rem, 3.9vw, 3.0625rem)", // 31px - 49px
              fontWeight: "700",
              lineHeight: "1.2",
            },
            h2: {
              fontSize: "clamp(1.625rem, 3.2vw, 2.5rem)", // 26px - 40px
              fontWeight: "700",
              lineHeight: "1.3",
            },
            h3: {
              fontSize: "clamp(1.375rem, 2.6vw, 2rem)", // 22px - 32px
              fontWeight: "600",
              lineHeight: "1.3",
            },
            h4: {
              fontSize: "clamp(1.125rem, 2.2vw, 1.75rem)", // 18px - 28px
              fontWeight: "600",
              lineHeight: "1.4",
            },
            h5: {
              fontSize: "clamp(1rem, 1.8vw, 1.5rem)", // 16px - 24px
              fontWeight: "600",
              lineHeight: "1.4",
            },
            h6: {
              fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)", // 14px - 20px
              fontWeight: "600",
              lineHeight: "1.5",
            },

            a: {
              position: "relative",
              textDecorationColor: "var(--color-primary)",
              textUnderlineOffset: "4px",
              fontWeight: "inherit",
              transition: "0.3s",
              "&:hover": {
                color: "var(--color-primary)",
                textDecorationColor: "var(--color-primaryLight)",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")], // Ensure typography plugin is loaded
};
