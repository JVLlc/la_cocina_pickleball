"use client";
import React, { useState,useEffect } from "react";
import styles from "./catalogo.module.css";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { ContactUs } from "@/components/ContactUs";
import ProductCard from "@/components/ProductCard";

const products=[
    {
    name:"Paleta La Cocina",
    brand:"La Cocina",
    price:45,
    category:"paletas",
    set:4,
    setPrice:160,
    image:"/images/products/Artboard 1.webp",
    images:["/images/products/Artboard 1.webp","/images/products/Artboard 2.webp"]
},
{
    name:"Performance Serie",
    brand:"Holbrook",
    price:100,
    category:"paletas",
    set:0,
    setPrice:0,
    image:"/images/products/Artboard 7.webp",
    images:["/images/products/Artboard 7.webp","/images/products/Artboard 16.webp","/images/products/Artboard 17.webp","/images/products/Artboard 18.webp"]
},
{
    name:"Mach 1",
    brand:"Volair",
    price:160,
    category:"paletas",
    set:0,
    setPrice:0,
    image:"/images/products/Artboard 5.webp",
    images:["/images/products/Artboard 5.webp"]
},
{
    name:"MAV PRO",
    brand:"Holbrook",
    price:200,
    category:"paletas",
    set:0,
    setPrice:0,
    image:"/images/products/Artboard 6.webp",
    images:["/images/products/Artboard 6.webp"]
},
{
    name:"PXVAMOS",
    brand:"PELLO",
    price:200,
    category:"paletas",
    set:0,
    setPrice:0,
    image:"/images/products/Artboard 9.webp",
    images:["/images/products/Artboard 9.webp"]
},
{
    name:"MAV PRO E",
    brand:"Holbrook",
    price:200,
    category:"paletas",
    set:0,
    setPrice:0,
    image:"/images/products/Artboard 8.webp",
    images:["/images/products/Artboard 8.webp"]
},
{
    name:"PXVIV",
    brand:"PELLO",
    price:190,
    category:"paletas",
    set:0,
    setPrice:0,
    image:"/images/products/Artboard 10.webp",
    images:["/images/products/Artboard 10.webp"]
},
{
    name:"Malla",
    brand:"La Cocina",
    price:140,
    category:"mallas",
    set:0,
    setPrice:0,
    image:"/images/products/Artboard 14.webp",
    images:["/images/products/Artboard 14.webp"]
},
{
    name:"Paquete de 4 pelotas",
    brand:"La Cocina",
    price:10,
    category:"pelotas",
    set:0,
    setPrice:0,
    image:"/images/products/Artboard 4.webp",
    images:["/images/products/Artboard 4.webp"]
},
{
    name:"Pelota Individual",
    brand:"La Cocina",
    price:3,
    category:"pelotas",
    set:0,
    setPrice:0,
    image:"/images/products/Artboard 4.webp",
    images:["/images/products/Artboard 4.webp"]
},
{
    name:"Grip Individual",
    brand:"La Cocina",
    price:2,
    category:"grips",
    set:0,
    setPrice:0,
    image:"/images/products/Artboard 13.webp",
    images:["/images/products/Artboard 13.webp"]
},
{
    name:"Bolso",
    brand:"La Cocina",
    price:20,
    category:"accesorios",
    set:0,
    setPrice:0,
    image:"/images/products/Artboard 12.webp",
    images:["/images/products/Artboard 12.webp"]
},
{
    name:"Forro de Pala",
    brand:"La Cocina",
    price:10,
    category:"accesorios",
    set:0,
    setPrice:0,
    image:"/images/products/Artboard 15.webp",
    images:["/images/products/Artboard 15.webp"]
},
{
    name:"Gorra",
    brand:"La Cocina",
    price:20,
    category:"accesorios",
    set:0,
    setPrice:0,
    image:"/images/products/Artboard 3.webp",
    images:["/images/products/Artboard 3.webp"]
},
{
    name:"Visera",
    brand:"La Cocina",
    price:10,
    category:"accesorios",
    set:0,
    setPrice:0,
    image:"/images/products/Artboard 11.webp",
    images:["/images/products/Artboard 11.webp"]
},
]

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
         {/* <div className={styles.filterContainer}>
            <h2>Filtros</h2>
         </div> */}
       <div className={styles.productContainer}>
        <div className={styles.productOptions}>
        <h4>{products.length} productos</h4>
        <div>
            <h4>Ordenar por popularidad</h4>
        </div>
        </div>
       {products.map((product)=>{
        return    <ProductCard product={product}/>
       })}
     
  

       </div>

      <Footer/>
    </div>
    </>
  );
}
