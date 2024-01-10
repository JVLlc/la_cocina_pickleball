"use client";
import React, { useState,useEffect } from "react";
import styles from "./catalogo.module.css";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export default function Catalogo() {
    const [imagesLoaded, setImagesLoaded] = useState(false);
          const handleImageLoad = () => {
            console.log('jnhbgftghjkmlddd')
          const images = document.querySelectorAll('img');
          const allImagesLoaded = Array.from(images).every((image) => image.complete);
    
          if (allImagesLoaded) {
            setImagesLoaded(true);
          }
        };
    useEffect(() => {
  
    
        const images = document.querySelectorAll('img');
 
        images.forEach((image) => {
            const allImagesLoaded = Array.from(images).every((image) => image.complete);
    
            if (allImagesLoaded) {
              setImagesLoaded(true);
            }
          image.addEventListener('load', handleImageLoad);
        });
    
 

        
      }, []); // Run this effect only once, when the component mounts
    
  return (
    <>
       {/* <div className={!imagesLoaded ? "imageLoader" :"imageLoader notVisible"}>  <img className="spinner" src="/logo.webp"/>
      
      </div> */}
    <div className={styles.main}>
      <Menu/>
         <div className={styles.filterContainer}>
            <h2>Filtros</h2>
         </div>
       <div className={styles.productContainer}>
        <div className={styles.productOptions}>
        <h4>7 productos</h4>
        <div>
            <h4>Ordenar por popularidad</h4>
        </div>
        </div>
       
        <div className={styles.product}>
            <img src="/images/paddle.webp" onLoad={handleImageLoad}/>
            <div className={styles.productInfo}>
                <h2>VOLAIR MATCH 1</h2>
                <h3>$160</h3>
            </div>

        </div>
        <div className={styles.product}>
            <img src="/images/paddle.webp" onLoad={handleImageLoad}/>
            <div className={styles.productInfo}>
                <h2>VOLAIR MATCH 1</h2>
                <h3>$160</h3>
            </div>

        </div>
        <div className={styles.product}>
            <img src="/images/paddle.webp" onLoad={handleImageLoad}/>
            <div className={styles.productInfo}>
                <h2>VOLAIR MATCH 1</h2>
                <h3>$160</h3>
            </div>

        </div>
        <div className={styles.product}>
            <img src="/images/paddle.webp" onLoad={handleImageLoad}/>
            <div className={styles.productInfo}>
                <h2>VOLAIR MATCH 1</h2>
                <h3>$160</h3>
            </div>

        </div>
        <div className={styles.product}>
            <img src="/images/paddle.webp" onLoad={handleImageLoad}/>
            <div className={styles.productInfo}>
                <h2>VOLAIR MATCH 1</h2>
                <h3>$160</h3>
            </div>

        </div>

        <div className={styles.product}>
            <img src="/images/paddle.webp" onLoad={handleImageLoad}/>
            <div className={styles.productInfo}>
                <h2>VOLAIR MATCH 1</h2>
                <h3>$160</h3>
            </div>

        </div>
        <div className={styles.product}>
            <img src="/images/paddle.webp" onLoad={handleImageLoad}/>
            <div className={styles.productInfo}>
                <h2>VOLAIR MATCH 1</h2>
                <h3>$160</h3>
            </div>

        </div>

       </div>

      <Footer/>
    </div>
    </>
  );
}
