import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fyncee - Gestiona tus finanzas con claridad",
  description: "App de finanzas personales con sincronización en la nube. Registra gastos, crea presupuestos y visualiza estadísticas. 100% gratis.",
  keywords: ["finanzas personales", "app gastos", "presupuesto", "control financiero", "ahorro"],
  openGraph: {
    title: "Fyncee - Gestiona tus finanzas con claridad",
    description: "La app de finanzas personales más intuitiva",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fyncee - Gestiona tus finanzas con claridad",
    description: "La app de finanzas personales más intuitiva",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Fyncee",
              operatingSystem: "Android",
              applicationCategory: "FinanceApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
