"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ResponsiveAppBar from "../components/Navbar/Navbar";
import BoxBasic from "../components/banner/Banner";
import Main from "../components/dashbord/Dashbord";
import Footer from "../components/footer/Footer";
import React, { useContext, useState, useEffect } from 'react';
import { FavoriteItem } from "./context";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };
  
    const user = getCookie('user'); 
  
    if (!user) {
      router.push('/signin'); 
    }
  }, [router]);
  

  return (
    <FavoriteItem.Provider value={{ favorites, setFavorites }}>
      <div>
        <ToastContainer />
        <ResponsiveAppBar />
        <BoxBasic />
        <Main />
        <Footer />
      </div>
    </FavoriteItem.Provider>
  );
}
