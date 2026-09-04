import type { Metadata } from "next";
import { headers } from "next/headers";
import { ConsultationChat } from "./_components/ConsultationChat";
import { MotionRuntime } from "./_components/MotionRuntime";
import { SiteIntro } from "./_components/SiteIntro";
import "./globals.css";

const siteName = "RIXA | ATAR & Academic Mentoring";
const description =
  "One-to-one academic mentoring for Australian high school students: ATAR classes, essay writing, forward planning, and university pathways.";
const ogImageUrl = "/riku-yoneyama-profile-og.png";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost";
  const protocol =
    requestHeaders.get("x-forwarded-proto")?.split(",")[0]?.trim() ??
    (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description,
    keywords: [
      "RIXA",
      "ATAR",
      "ATAR tutoring",
      "Australian high school",
      "essay writing tutor",
      "study planning",
      "university pathways",
    ],
    icons: {
      icon: "/rixa-logo.png",
      shortcut: "/rixa-logo.png",
    },
    openGraph: {
      type: "website",
      locale: "en_AU",
      title: siteName,
      description:
        "Turn scattered study into a clear route forward with one-to-one ATAR mentoring, essay coaching, and university planning.",
      images: [
        {
          url: ogImageUrl,
          width: 652,
          height: 802,
          alt: "Portrait of Riku Yoneyama in a navy suit",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteName,
      description,
      images: [ogImageUrl],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Noto+Sans+JP:wght@400;500;700;900&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
        />
      </head>
      <body>
        <SiteIntro />
        <MotionRuntime />
        {children}
        <ConsultationChat />
      </body>
    </html>
  );
}
