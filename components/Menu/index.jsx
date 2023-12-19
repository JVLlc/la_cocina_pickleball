"use client";
import React, { useState } from "react";
import styles from "./menu.module.css";

export default function Menu() {
    const [open,setOpen]=useState(false)

  return (
    <>
    <div className={open ? `${styles.menu} ${styles.menuActive}`:styles.menu} onClick={()=>{setOpen(!open)}}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
    </div>


<div className={open ? `${styles.menuContainer} ${styles.menuContainerOpen}`: `${styles.menuContainer} ${styles.menuContainerClose}`}>
    <h2 className={styles.aboutUs} >Sobre Nosotros</h2>
    <h2 className={styles.events} >Eventos</h2>
    <h2 className={styles.catalogue} >Catalogo</h2>
    <h2 className={styles.contact} >Contacto</h2>

</div>
    </>

  );
}
