import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prabintamang7.com.np"),
  title: {
    default: "Research Consultation | LEARNINGEVERGROW",
    template: "%s | LEARNINGEVERGROW",
  },
  description:
    "One-to-one guidance for finance and economics students who want a clearer research plan.",
  openGraph: {
    title: "Start Your Finance or Economics Research With a Clear Plan",
    description:
      "Get focused guidance for your research topic, proposal, literature review, and next steps.",
    url: "/",
    siteName: "LEARNINGEVERGROW",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 320,
        alt: "LEARNINGEVERGROW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Consultation | LEARNINGEVERGROW",
    description:
      "Start your finance or economics research with a clearer plan.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
