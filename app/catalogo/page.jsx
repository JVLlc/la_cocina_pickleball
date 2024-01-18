"use client";
import React, { useState, useEffect } from "react";
import styles from "./catalogo.module.css";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { ContactUs } from "@/components/ContactUs";
import ProductCard from "@/components/ProductCard";
import DoubleRangeSlider from "@/components/DoubleRangeSlider";

const products = [
  {
    name: "Paleta La Cocina",
    brand: "La Cocina",
    price: 45,
    category: "paletas",
    set: 4,
    setPrice: 160,
    image: "/images/products/Artboard 1.webp",
    images: [
      "/images/products/Artboard 1.webp",
      "/images/products/Artboard 2.webp",
    ],
  },
  {
    name: "Performance Serie",
    brand: "Holbrook",
    price: 100,
    category: "paletas",
    set: 0,
    setPrice: 0,
    image: "/images/products/Artboard 7.webp",
    images: [
      "/images/products/Artboard 7.webp",
      "/images/products/Artboard 16.webp",
      "/images/products/Artboard 17.webp",
      "/images/products/Artboard 18.webp",
    ],
  },
  {
    name: "Mach 1",
    brand: "Volair",
    price: 160,
    category: "paletas",
    set: 0,
    setPrice: 0,
    image: "/images/products/Artboard 5.webp",
    images: ["/images/products/Artboard 5.webp"],
  },
  {
    name: "MAV PRO",
    brand: "Holbrook",
    price: 200,
    category: "paletas",
    set: 0,
    setPrice: 0,
    image: "/images/products/Artboard 6.webp",
    images: ["/images/products/Artboard 6.webp"],
  },
  {
    name: "PXVAMOS",
    brand: "PELLO",
    price: 200,
    category: "paletas",
    set: 0,
    setPrice: 0,
    image: "/images/products/Artboard 9.webp",
    images: ["/images/products/Artboard 9.webp"],
  },
  {
    name: "MAV PRO E",
    brand: "Holbrook",
    price: 200,
    category: "paletas",
    set: 0,
    setPrice: 0,
    image: "/images/products/Artboard 8.webp",
    images: ["/images/products/Artboard 8.webp"],
  },
  {
    name: "PXVIV",
    brand: "PELLO",
    price: 190,
    category: "paletas",
    set: 0,
    setPrice: 0,
    image: "/images/products/Artboard 10.webp",
    images: ["/images/products/Artboard 10.webp"],
  },
  {
    name: "Malla",
    brand: "La Cocina",
    price: 140,
    category: "mallas",
    set: 0,
    setPrice: 0,
    image: "/images/products/Artboard 14.webp",
    images: ["/images/products/Artboard 14.webp"],
  },
  {
    name: "Paquete de 4 pelotas",
    brand: "La Cocina",
    price: 10,
    category: "pelotas",
    set: 0,
    setPrice: 0,
    image: "/images/products/Artboard 4.webp",
    images: ["/images/products/Artboard 4.webp"],
  },
  {
    name: "Pelota Individual",
    brand: "La Cocina",
    price: 3,
    category: "pelotas",
    set: 0,
    setPrice: 0,
    image: "/images/products/Artboard 4.webp",
    images: ["/images/products/Artboard 4.webp"],
  },
  {
    name: "Grip Individual",
    brand: "La Cocina",
    price: 2,
    category: "grips",
    set: 0,
    setPrice: 0,
    image: "/images/products/Artboard 13.webp",
    images: ["/images/products/Artboard 13.webp"],
  },
  {
    name: "Bolso",
    brand: "La Cocina",
    price: 20,
    category: "accesorios",
    set: 0,
    setPrice: 0,
    image: "/images/products/Artboard 12.webp",
    images: ["/images/products/Artboard 12.webp"],
  },
  {
    name: "Forro de Pala",
    brand: "La Cocina",
    price: 10,
    category: "accesorios",
    set: 0,
    setPrice: 0,
    image: "/images/products/Artboard 15.webp",
    images: ["/images/products/Artboard 15.webp"],
  },
  {
    name: "Gorra",
    brand: "La Cocina",
    price: 20,
    category: "accesorios",
    set: 0,
    setPrice: 0,
    image: "/images/products/Artboard 3.webp",
    images: ["/images/products/Artboard 3.webp"],
  },
  {
    name: "Visera",
    brand: "La Cocina",
    price: 10,
    category: "accesorios",
    set: 0,
    setPrice: 0,
    image: "/images/products/Artboard 11.webp",
    images: ["/images/products/Artboard 11.webp"],
  },
];

export default function Catalogo() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, selectCategory] = useState("todo");
  const [sort, setSort] = useState("default");
  const [selectedBrands, selectBrands] = useState([]);
  const [rangeSelected, setRangeSelected] = useState([
    Math.min(...products.map((product) => product.price)),
    Math.max(...products.map((product) => product.price)),
  ]);
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];
  const uniqueBrands = [...new Set(products.map((product) => product.brand))];

  const handleImageLoad = () => {
    console.log("jnhbgftghjkmlddd");
    const images = document.querySelectorAll("img");
    const allImagesLoaded = Array.from(images).every((image) => image.complete);

    if (allImagesLoaded) {
      setImagesLoaded(true);
    }
  };
  useEffect(() => {
    const images = document.querySelectorAll("img");

    images.forEach((image) => {
      const allImagesLoaded = Array.from(images).every(
        (image) => image.complete
      );

      if (allImagesLoaded) {
        setImagesLoaded(true);
      }
      image.addEventListener("load", handleImageLoad);
    });
  }, []); // Run this effect only once, when the component mounts

  const filter = () => {
    let aux = products;

    if (selectedBrands.length > 0) {
      aux = aux.filter((product) => {
        return selectedBrands.includes(product.brand);
      });
    }

    if (selectedCategory != "todo") {
      aux = aux.filter((product) => {
        return product.category == selectedCategory;
      });
    }

    aux = aux.filter((product) => {
      return (
        product.price >= rangeSelected[0] && product.price <= rangeSelected[1]
      );
    });

    if(sort=='menos'){
      aux.sort((a, b) => a.price - b.price);
    }else if(sort=='mas'){
      aux.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(aux);
  };

  useEffect(() => {
    filter();
  }, [rangeSelected, selectedCategory, selectedBrands,sort]);

  const handleCheckboxChange = (category) => {
    // Check if the category is already in the list
    if (selectedBrands.includes(category)) {
      // If yes, remove it
      selectBrands((prevSelected) =>
        prevSelected.filter((item) => item !== category)
      );
    } else {
      // If not, add it
      selectBrands((prevSelected) => [...prevSelected, category]);
    }
  };
  return (
    <>
      {/* <div className={!imagesLoaded ? "imageLoader" :"imageLoader notVisible"}>  <img className="spinner" src="/logo.webp"/>
      
      </div> */}
      <div className={styles.main}>
        <Menu />
        <img src="/images/filter.png" onClick={()=>{setFilterOpen(true)}} className={styles.filter} />
        <div className={filterOpen ? styles.filterContainer : `${styles.filterContainer} ${styles.close}`}>
          <img src="/images/close.png" onClick={()=>{setFilterOpen(false)}} className={styles.closeIcon} />
          <h2>Filtros</h2>
          {uniqueCategories.map((category, index) => (
            <h6
              className={selectedCategory == category && styles.active}
              onClick={() => {
                selectCategory(category);
              }}
              key={index}
            >
              {category}
            </h6>
          ))}
          <h6
            className={selectedCategory == "todo" && styles.active}
            onClick={() => {
              selectCategory("todo");
            }}
          >
            Todo
          </h6>

          <h5>Precio</h5>
          <DoubleRangeSlider
            products={products}
            rangeSelected={rangeSelected}
            setRangeSelected={(value) => {
              setRangeSelected(value);
            }}
          />
          <h5>Marcas</h5>
          {uniqueBrands.map((brand, index) => (
            <div class="flex items-center mb-4">
              <input
                id={brand}
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => {
                  handleCheckboxChange(brand);
                }}
              />
              <h7 for="default-checkbox">{brand}</h7>
            </div>
          ))}
        </div>
        <div className={styles.productContainer}>
          <div className={styles.productOptions}>
            <h4>{products.length} productos</h4>
            <div>
            <select value={sort} onChange={(e)=>{console.log(e.target.value);setSort(e.target.value)}}>
              <option value={'default'}>Relevancia (default)</option>
              <option value={'menos'}>Precio de menos a más</option>
              <option value={'mas'}>Precio de más a menos</option>
            </select>
            </div>
          </div>
          {filteredProducts.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>

        <Footer position={true}/>
      </div>
    </>
  );
}
