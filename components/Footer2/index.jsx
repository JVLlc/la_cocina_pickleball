"use client";
import React, { useState } from "react";
import styles from "./footer.module.css";
import { useRouter } from "next/navigation";

export default function Footer({position}) {
  const router=useRouter()
  console.log(position)
  return (
    <div className={styles.footer} style={{position:position ? 'relative !important':"",bottom:!position ? 0:""}}>
      <h3 className={styles.navItem}>©2024</h3>
      <div className={styles.navigation}>
      <h3 className={styles.navItem} onClick={()=>{router.push("https://api.whatsapp.com/send?phone=584129557600");}}>WHATSAPP</h3>
        <h3 className={styles.navItem} onClick={()=>{router.push("https://www.instagram.com/lacocina.pickleball");}}>INSTAGRAM</h3>
        <h3 className={styles.navItem} onClick={()=>{router.push('/sobre-nosotros')}}>SOBRE NOSOTROS</h3>
        <h3 className={styles.navItem} onClick={()=>{router.push('/catalogo')}}>CATÁLOGO</h3>
        <h3 className={styles.navItem} onClick={()=>{router.push('/eventos')}}>EVENTOS</h3>
      </div>
    </div>
  );
}
