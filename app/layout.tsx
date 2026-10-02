import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JEV AI Assistant — Demo",
  description: "Shopify-style storefront & admin dashboard demo",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-[var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
