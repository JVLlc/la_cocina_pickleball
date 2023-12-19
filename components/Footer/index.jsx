"use client";
import React, { useState } from "react";
import styles from "./footer.module.css";

export default function Footer() {


  return (
<div className={styles.footer}>
<h3 className={styles.navItem}>©2024</h3>
<div className={styles.navigation}>
<h3 className={styles.navItem}>FACEBOOK</h3>
<h3 className={styles.navItem}>INSTAGRAM</h3>
<h3 className={styles.navItem}>SOBRE NOSOTROS</h3>
<h3 className={styles.navItem}>CATALOGO</h3>
<h3 className={styles.navItem}>EVENTOS</h3>
</div>
</div>

  );
}
