import { Metadata, Viewport } from "next";

export function generateMetadata(
  path: string,
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
    metadataBase: new URL("https://fellyph.com.br"),
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg" }],
    },
    applicationName: "Fellyph Cintra",
    authors: [{ name: "Fellyph Cintra", url: "https://fellyph.com.br" }],
    creator: "Fellyph Cintra",
    publisher: "Fellyph Cintra",
    formatDetection: {
      telephone: false,
    },
    openGraph: {
      title,
      description,
      url: `https://fellyph.com.br${path}`,
      siteName: "Fellyph Cintra",
      images: [
        {
          url: "/avatar.webp",
          width: 800,
          height: 600,
          alt: "Fellyph Cintra",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@fellyph",
      creator: "@fellyph",
      images: ["/avatar.webp"],
    },
    verification: {
      google: "your-google-site-verification",
    },
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};
