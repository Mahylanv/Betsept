import type { Metadata, Viewport } from "next";

import "./globals.css";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://betsept.vercel.app";
const siteUrl = rawSiteUrl.replace(/\/+$/, "");
const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
  metadataBase,
  title: "BetSept",
  description:
    "BetSept est un jeu de culture generale en francais, a reponses numeriques, pense pour des parties familiales modernes.",
  applicationName: "BetSept",
  keywords: [
    "BetSept",
    "jeu de culture generale",
    "jeu de plateau",
    "jeu familial",
    "jeu numerique",
    "quiz numerique",
    "culture G",
    "jeu de societe"
  ],
  authors: [{ name: "Mahylan VECLIN" }],
  creator: "Mahylan VECLIN",
  publisher: "Mahylan VECLIN",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "BetSept",
    description:
      "Jeu de culture generale en francais, reponses numeriques, pour jouer en famille ou entre amis.",
    type: "website",
    siteName: "BetSept",
    locale: "fr_FR",
    url: siteUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BetSept - Jeu de culture generale"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BetSept",
    description:
      "Jeu de culture generale en francais, reponses numeriques, pour jouer en famille.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  manifest: "/manifest.webmanifest",
  themeColor: "#f8f2e7",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "BetSept"
  },
  icons: {
    icon: "/icon-192.png",
    apple: "/apple-touch-icon.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#f8f2e7"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "BetSept",
      description:
        "Jeu de culture generale en francais, a reponses numeriques, pour jouer en famille ou entre amis.",
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      inLanguage: "fr-FR",
      author: {
        "@type": "Person",
        name: "Mahylan VECLIN"
      },
      url: siteUrl,
      image: `${siteUrl}/og-image.png`
    },
    {
      "@context": "https://schema.org",
      "@type": "Game",
      name: "BetSept",
      description:
        "Jeu de culture generale en francais, a reponses numeriques, pour jouer en famille ou entre amis.",
      inLanguage: "fr-FR",
      author: {
        "@type": "Person",
        name: "Mahylan VECLIN"
      },
      url: siteUrl,
      image: `${siteUrl}/og-image.png`,
      genre: "Jeu de culture generale",
      numberOfPlayers: "2-7",
      gamePlatform: "Web"
    }
  ];

  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
