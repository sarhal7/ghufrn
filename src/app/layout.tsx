import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GHUFRN — Cinematic Video Editor Portfolio",
  description:
    "Immersive cinematic portfolio showcasing premium video editing, creative direction, and storytelling services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
