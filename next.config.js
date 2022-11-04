// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    i18n: {
        locales: ["en", "he"],
        defaultLocale: "en",
        localeDetection: false,
    },
    ...nextTranslate(),
};

if (process.env.NEXT_PUBLIC_NODE_ENV !== "production") {
    const withBundleAnalyzer = require("@next/bundle-analyzer")({
        enabled: process.env.NEXT_PUBLIC_ANALYZE === "true",
    });
    module.exports = withBundleAnalyzer(nextConfig);
} else {
    module.exports = nextConfig;
}
