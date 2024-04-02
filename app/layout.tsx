import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel app",
  description: "Frontend Travel app. Built by Agada Francis Louis, CED Louis Technology LT next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        
      </body>
    </html>
  );
}
