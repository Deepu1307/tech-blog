"use client"

import { useContext, useState } from 'react';
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from '@/app/context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  console.log("🚀 ~ file: ThemeToggle.jsx:9 ~ ThemeToggle ~ theme:", theme);

  return (
    <div className={styles.container} style={theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }} onClick={toggle}>
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div className={styles.ball} style={
        theme === "dark" ? { left: 1, backgroundColor: "#0f172a" } : { right: 1, backgroundColor: "white" }
      }></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  )
}

export default ThemeToggle;