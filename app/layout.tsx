import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "bool | Hydration Salts for Workdays, Workouts & Weekends",
  description:
    "Clinical-strength hydration with nootropics. Engineered in the Netherlands. Stress-tested in NYC.",
  openGraph: {
    title: "bool | Hydration Salts",
    description: "Electrolytes, upgraded. This is what 'I'm back' feels like.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} ${dmSans.variable} bg-bool-black text-bool-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
