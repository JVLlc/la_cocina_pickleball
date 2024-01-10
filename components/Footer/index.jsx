"use client";
import React, { useState } from "react";
import styles from "./footer.module.css";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router=useRouter()
  return (
    <div className={styles.footer}>
      <h3 className={styles.navItem}>Â©2024</h3>
      <div className={styles.navigation}>
        <h3 className={styles.navItem}>FACEBOOK</h3>
        <h3 className={styles.navItem} onClick={()=>{router.push("https://www.instagram.com/lacocina.pickleball");}}>INSTAGRAM</h3>
        <h3 className={styles.navItem} onClick={()=>{router.push('/sobre-nosotros')}}>SOBRE NOSOTROS</h3>
        <h3 className={styles.navItem} onClick={()=>{router.push('/catalogo')}}>CATALOGO</h3>
        <h3 className={styles.navItem} onClick={()=>{router.push('/eventos')}}>EVENTOS</h3>
      </div>
    </div>
  );
}
