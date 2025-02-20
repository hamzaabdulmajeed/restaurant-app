"use client"
import localFont from "next/font/local";
import "./globals.css";
// import Navbar from "./components/navbar/page.js"
import Footer from "../components/footer/Footer"
import { FavoriteItem } from "./context";
import ResponsiveAppBar from "../components/Navbar/Navbar";
import React, {useState} from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }) {

  const [favorites, setFavorites] = useState([]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <FavoriteItem.Provider value={{ favorites, setFavorites }}>
     
        {/* <ResponsiveAppBar /> */}
        {children}
        {/* <Footer /> */}
        </FavoriteItem.Provider>
     
      </body>
    </html>
  );
}
