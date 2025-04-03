import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Sperax Mobile',
  description: 'Mobile-first Sperax application',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-['Bricolage_Grotesque'] text-white min-h-screen">
        <div className="fixed inset-0 bg-[#1B2022]">
          <div className="absolute inset-0 opacity-[0.1]">
            <div className="absolute top-0 left-[10%] w-[30%] h-[40%] rounded-full bg-[#00756B] blur-[150px]" />
            <div className="absolute top-[20%] right-[20%] w-[25%] h-[30%] rounded-full bg-[#00B4CF] blur-[150px]" />
            <div className="absolute bottom-[10%] left-[20%] w-[25%] h-[35%] rounded-full bg-[#FF1D74] blur-[150px]" />
            <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[40%] rounded-full bg-[#FF8993] blur-[150px]" />
          </div>
        </div>
        <div className="relative mx-auto max-w-md">
          {children}
        </div>
      </body>
    </html>
  );
}
