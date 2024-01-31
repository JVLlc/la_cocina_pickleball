"use client";
import React, { useState, useEffect } from "react";
import styles from "./catalogo.module.css";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { ContactUs } from "@/components/ContactUs";
import ProductCard from "@/components/ProductCard";
import DoubleRangeSlider from "@/components/DoubleRangeSlider";
import { db, storage } from '../../firebase/firebase';
import { collection, getDocs, doc, getDoc,where, collectionGroup } from "firebase/firestore";


// const products = [
//   {
//     name: "Paleta La Cocina",
//     brand: "La Cocina",
//     price: 45,
//     category: "paletas",
//     set: 4,
//     setPrice: 160,
//     image: "/images/products/Artboard 1.webp",
//     images: [
//       "/images/products/Artboard 1.webp",
//       "/images/products/Artboard 2.webp",
//     ],
//   },
//   {
//     name: "Performance Serie",
//     brand: "Holbrook",
//     price: 100,
//     category: "paletas",
//     set: 0,
//     setPrice: 0,
//     image: "/images/products/Artboard 7.webp",
//     images: [
//       "/images/products/Artboard 7.webp",
//       "/images/products/Artboard 16.webp",
//       "/images/products/Artboard 17.webp",
//       "/images/products/Artboard 18.webp",
//     ],
//   },
//   {
//     name: "Mach 1",
//     brand: "Volair",
//     price: 160,
//     category: "paletas",
//     set: 0,
//     setPrice: 0,
//     image: "/images/products/Artboard 5.webp",
//     images: ["/images/products/Artboard 5.webp"],
//   },
//   {
//     name: "MAV PRO",
//     brand: "Holbrook",
//     price: 200,
//     category: "paletas",
//     set: 0,
//     setPrice: 0,
//     image: "/images/products/Artboard 6.webp",
//     images: ["/images/products/Artboard 6.webp"],
//   },
//   {
//     name: "PXVAMOS",
//     brand: "PELLO",
//     price: 200,
//     category: "paletas",
//     set: 0,
//     setPrice: 0,
//     image: "/images/products/Artboard 9.webp",
//     images: ["/images/products/Artboard 9.webp"],
//   },
//   {
//     name: "MAV PRO E",
//     brand: "Holbrook",
//     price: 200,
//     category: "paletas",
//     set: 0,
//     setPrice: 0,
//     image: "/images/products/Artboard 8.webp",
//     images: ["/images/products/Artboard 8.webp"],
//   },
//   {
//     name: "PXVIV",
//     brand: "PELLO",
//     price: 190,
//     category: "paletas",
//     set: 0,
//     setPrice: 0,
//     image: "/images/products/Artboard 10.webp",
//     images: ["/images/products/Artboard 10.webp"],
//   },
//   {
//     name: "Malla",
//     brand: "La Cocina",
//     price: 140,
//     category: "mallas",
//     set: 0,
//     setPrice: 0,
//     image: "/images/products/Artboard 14.webp",
//     images: ["/images/products/Artboard 14.webp"],
//   },
//   {
//     name: "Paquete de 4 pelotas",
//     brand: "La Cocina",
//     price: 10,
//     category: "pelotas",
//     set: 0,
//     setPrice: 0,
//     image: "/images/products/Artboard 4.webp",
//     images: ["/images/products/Artboard 4.webp"],
//   },
//   {
//     name: "Pelota Individual",
//     brand: "La Cocina",
//     price: 3,
//     category: "pelotas",
//     set: 0,
//     setPrice: 0,
//     image: "/images/products/Artboard 4.webp",
//     images: ["/images/products/Artboard 4.webp"],
//   },
//   {
//     name: "Grip Individual",
//     brand: "La Cocina",
//     price: 2,
//     category: "grips",
//     set: 0,
//     setPrice: 0,
//     image: "/images/products/Artboard 13.webp",
//     images: ["/images/products/Artboard 13.webp"],
//   },
//   {
//     name: "Bolso",
//     brand: "La Cocina",
//     price: 20,
//     category: "accesorios",
//     set: 0,
//     setPrice: 0,
//     image: "/images/products/Artboard 12.webp",
//     images: ["/images/products/Artboard 12.webp"],
//   },
//   {
//     name: "Forro de Pala",
//     brand: "La Cocina",
//     price: 10,
//     category: "accesorios",
//     set: 0,
//     setPrice: 0,
//     image: "/images/products/Artboard 15.webp",
//     images: ["/images/products/Artboard 15.webp"],
//   },
//   {
//     name: "2",
//     brand: "La Cocina",
//     price: 20,
//     category: "accesorios",
//     set: 0,
//     setPrice: 0,
//     image: "/images/products/Artboard 3.webp",
//     images: ["/images/products/Artboard 3.webp"],
//   },
//   {
//     name: "Visera",
//     brand: "La Cocina",
//     price: 10,
//     category: "accesorios",
//     set: 0,
//     setPrice: 0,
//     image: "/images/products/Artboard 11.webp",
//     images: ["/images/products/Artboard 11.webp"],
//   },
// ];

export default function Catalogo() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, selectCategory] = useState("todo");
  const [sort, setSort] = useState("default");
  const [selectedBrands, selectBrands] = useState([]);
  const [products1, setProducts1] = useState([]);
  const [rangeSelected, setRangeSelected] = useState([0,0]);
  const [uniqueCategories,setUniqueCategories] = useState([])
  const [uniqueBrands,setUniqueBrands] = useState([])



  const handleImageLoad = () => {
  
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
    let aux = products1;

    if (selectedBrands.length > 0) {
      aux = aux.filter((product) => {
        return selectedBrands.includes(getBrandName(product.brand));
      });
    }

    if (selectedCategory != "todo") {
      aux = aux.filter((product) => {
        return getCategoryName(product.category) == selectedCategory;
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

  const fetchProducts = async () => {
    try {
      let auxProducts = [];
      let auxBrands = [];
      let auxCategories = [];
      let uniqueBrandIds = new Set();
      let uniqueCategoriesIds = new Set();
  
      const querySnapshot = await getDocs(collectionGroup(db, 'products'));
  
      for (const productDoc of querySnapshot.docs) {
        let productData = productDoc.data();
        const brandId = productData.brand.id;
        const categoryId = productData.category.id;
  
        // Fetch brand and category data
        const [brandDoc, categoryDoc] = await Promise.all([
          getDoc(doc(db, 'brands', brandId)),
          getDoc(doc(db, 'categories', categoryId)),
        ]);
  
        const brandData = brandDoc.data();
        const categoryData = categoryDoc.data();
  
        // Check if the product, brand, and category are available
        if (
          productData.available &&
          brandData.available &&
          categoryData.available
        ) {
          productData.brand=brandId
          productData.category=categoryId
          auxProducts.push(productData);
  
          // Check if the brand ID is already in the Set
          if (!uniqueBrandIds.has(brandId)) {
            auxBrands.push({ ...brandData, id: brandDoc.id });
            uniqueBrandIds.add(brandId); // Add brand ID to the Set
          }
          if (!uniqueCategoriesIds.has(categoryId)) {
            auxCategories.push({ ...categoryData, id: categoryDoc.id });
            uniqueCategoriesIds.add(categoryId); // Add brand ID to the Set
          }
  
         
        }
      }
      setUniqueBrands(auxBrands);
      setUniqueCategories(auxCategories);
      setProducts1(auxProducts);
      setFilteredProducts(auxProducts);
      setRangeSelected([
        Math.min(...auxProducts.map((product) => product.price)),
        Math.max(...auxProducts.map((product) => product.price)),
      ]);
  
   
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  
  
  const fetch =async()=>{
    // await fetchBrands();
    // await fetchCategories();
    await fetchProducts();
  }

  useEffect(() => {

    fetch()
  
  }, []);

  const getBrandName = (id) => {
    console.log(id,uniqueBrands)
    const filteredBrands = uniqueBrands.filter((brand) => brand.id === id);
    return filteredBrands.length > 0 ? filteredBrands[0].brand_name : '';
  };
  

  const getCategoryName=(id)=>{
    return uniqueCategories.filter((category)=> {return category.id==id})[0].name
  }


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
              className={selectedCategory == category.name && styles.active}
              onClick={() => {
                selectCategory(category.name);
              }}
              key={index}
            >
              {category.name}
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
            products={products1}
            rangeSelected={rangeSelected}
            setRangeSelected={(value) => {
              setRangeSelected(value);
            }}
          />
          <h5>Marcas</h5>
          {uniqueBrands.map((brand, index) => (
            <div class="flex items-center mb-4">
              <input
                id={brand.id}
                type="checkbox"
                checked={selectedBrands.includes(brand.brand_name)}
                onChange={() => {
                  handleCheckboxChange(brand.brand_name);
                }}
              />
              <h7 for="default-checkbox">{brand.brand_name}</h7>
            </div>
          ))}
        </div>
     
     {uniqueBrands.length >0 && uniqueCategories.length > 0 &&
        <div className={styles.productContainer}>
          <div className={styles.productOptions}>
            <h4>{products1.length} productos</h4>
            <div>
            <select value={sort} onChange={(e)=>{setSort(e.target.value)}}>
              <option value={'default'}>Relevancia (default)</option>
              <option value={'menos'}>Precio de menos a más</option>
              <option value={'mas'}>Precio de más a menos</option>
            </select>
            </div>
          </div>
     
          {filteredProducts.map((product) => {
            return <ProductCard product={product} getBrandName={getBrandName}  />;
          })}
        </div>}

        <Footer />
      </div>
    </>
  );
}
