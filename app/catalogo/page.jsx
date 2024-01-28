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
      let auxProducts=[]
      const querySnapshot = await getDocs(collectionGroup(db, 'products'));
  
      querySnapshot.forEach(async (productDoc) => {
        let productData = productDoc.data();
        const brandId = productData.brand.id;
        const categoryId = productData.category.id;

       productData.brand=brandId
       productData.category=categoryId

      auxProducts.push(productData)
       
      });

      setProducts1(auxProducts)
      setFilteredProducts(auxProducts)
      setRangeSelected([
        Math.min(...auxProducts.map((product) => product.price)),
        Math.max(...auxProducts.map((product) => product.price)),
      ])
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchBrands = async () => {
    try {
      let auxBrands=[]
      const querySnapshot = await getDocs(collectionGroup(db, 'brands'));
  
      querySnapshot.forEach(async (brandDoc) => {

        let brandData = brandDoc.data();
        brandData.id=brandDoc.id

  

       auxBrands.push(brandData)
       
      });

      setUniqueBrands(auxBrands)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      let auxCategories=[]
      const querySnapshot = await getDocs(collectionGroup(db, 'categories'));
  
      querySnapshot.forEach(async (categoryDoc) => {
        let categoryData = categoryDoc.data();
        categoryData.id=categoryDoc.id

  

        auxCategories.push(categoryData)
       
      });

      setUniqueCategories(auxCategories)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {

    fetchBrands();
    fetchCategories();
    fetchProducts();
  
  }, []);

  const getBrandName=(id)=>{
    return uniqueBrands.filter((brand)=> {return brand.id==id})[0].brand_name
  }

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
        </div>

        <Footer />
      </div>
    </>
  );
}
