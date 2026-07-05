import type { Metadata, Viewport } from "next";
import { Anton, Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "Falcon Hacks 2026 — Build Something That Takes Flight",
  description:
    "A student-run Bay Area hackathon hosted by Falcon Hacks at Foothill High School. October 10, 2026.",
  openGraph: {
    title: "Falcon Hacks 2026 — Build Something That Takes Flight",
    description:
      "A student-run Bay Area hackathon hosted by Falcon Hacks at Foothill High School. October 10, 2026.",
    type: "website",
  },
};

export const viewport: Viewport = {
  // Mirrors --void in globals.css — keep in sync if the token changes.
  themeColor: "#05080f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} ${plexMono.variable} antialiased`}
    >
      <body className="bg-void text-bone font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:bg-gold focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-void"
        >
          Skip to content
        </a>
        {children}
        <div aria-hidden className="grain" />
      </body>
    </html>
  );
}
