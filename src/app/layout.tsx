import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIP Shuttle 24 - Premium Chauffeur Service Düsseldorf",
  description: "Luxuriöser Limousinenservice und VIP-Transfer in Düsseldorf. Professionelle Chauffeure, erstklassige Fahrzeuge und Service rund um die Uhr.",
  keywords: "VIP Shuttle, Chauffeur Service, Limousine Düsseldorf, Flughafentransfer, Premium Transfer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
