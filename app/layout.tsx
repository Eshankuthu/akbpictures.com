import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A.K. Brother Pictures - Cinematic Storytelling",
  description: "A.K. Brother Pictures Pvt. Ltd. - Kathmandu-based production house founded by Amit Shrestha and Kedar Shrestha. Specializing in feature films, documentaries, short movies, music videos, VFX, and motion graphics.",
  keywords: "film production, movie production, Nepal films, Kathmandu production house, VFX, motion graphics, documentary films, music videos, A.K. Brother Pictures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
