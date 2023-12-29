"use client";
import React, { useState } from "react";
import styles from "./eventos.module.css";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export default function Eventos() {
 


  return (
    <div className={styles.main}>
      <Menu/>
     
      <Footer/>
    </div>
  );
}
