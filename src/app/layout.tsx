import "./globals.css";
import type {Metadata} from "next";
import Navbar from "@/components/navbar";
import PageTransitionEffect from "@/components/page-transition-effect";
import { Suspense } from "react";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Solid Foundations",
    description: "A website for exploring the fundamentals of mathematics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar/>
        <PageTransitionEffect>
            <Suspense fallback={null}>
                <div className="max-w-screen-xl m-auto">
                    {children}
                </div>
                <Footer/>
            </Suspense>
        </PageTransitionEffect>
      </body>
    </html>
  );
}
