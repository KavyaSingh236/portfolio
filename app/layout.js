"use client";
import React, { useState, useEffect } from "react";
import Loader from "./components/helper/loader";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./components/helper/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setLoading(false);

      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 100); // Short delay before starting content display

      return () => clearTimeout(contentTimer);
    }, 500); // Duration of loader visibility

    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        {loading ? (
          <Loader />
        ) : (
          <>
           <Navbar />
            <main
              className={`min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white ${
                showContent ? 'content-show' : 'content-hide'
              }`}
            >
              
              {children}
              <ScrollToTop />
            </main>
            <Footer />
          </>
        )}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
        <style>
          {`
            .content-show {
              opacity: 1;
              transform: scale(1);
              transition: opacity 1s ease-in-out, transform 1s ease-in-out;
            }
            .content-hide {
              opacity: 0;
              transform: scale(0.8);
              transition: opacity 1s ease-in-out, transform 1s ease-in-out;
            }
          `}
        </style>
      </body>
    </html>
  );
}
