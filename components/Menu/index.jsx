"use client";
import React, { useState } from "react";
import styles from "./menu.module.css";
import { useRouter } from "next/navigation";

export default function Menu({logo}) {
    const [open,setOpen]=useState(false)
    const router =useRouter()

  return (
    <>
    {!logo &&
    <img src="/logo.webp" className={styles.logo} onClick={()=>{router.push('/')}}/>}
    <div className={open ? `${styles.menu} ${styles.menuActive}`:styles.menu} onClick={()=>{setOpen(!open)}}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
    </div>


<div className={open ? `${styles.menuContainer} ${styles.menuContainerOpen}`: `${styles.menuContainer} ${styles.menuContainerClose}`}>
    <h2 className={styles.aboutUs} onClick={()=>{router.push('/sobre-nosotros')}} >Sobre Nosotros</h2>
    <h2 className={styles.events} onClick={()=>{router.push('/eventos')}}>Eventos</h2>
    <h2 className={styles.catalogue} onClick={()=>{router.push('/catalogo')}}>Catálogo</h2>
    <h2 className={styles.contact} onClick={()=>{router.push('/contacto')}}>Contacto</h2>

</div>
    </>

  );
}
