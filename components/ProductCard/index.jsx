import React, { useState } from "react";
import styles from "./productCard.module.css";

const ProductCard = ({ product }) => {
  const [margin, setMargin] = useState(0);
  const [slide, setSlide] = useState(0);
  const swipeRight = () => {
    setSlide((prevSlide) => {
      const newSlide = prevSlide < product.images.length - 1 ? prevSlide + 1 : 0;
      setMargin(-newSlide * 100);
      return newSlide;
    });
  };
  
  const swipeLeft = () => {
    setSlide((prevSlide) => {
      const newSlide = prevSlide > 0 ? prevSlide - 1 : 0;
      setMargin(-newSlide * 100);
      return newSlide;
    });
  };
  

  return (
    <div className={styles.product}>
      <div className={styles.productSlider}>
        {product.images.length > 1 && slide>0 && (
          <div className={styles.arrowLeft}    onClick={() => {
            swipeLeft();
          }}>
            <img src="/images/chevron.webp" />
          </div>
        )}

        {product.images.map((img, index) => {
          if (index == 0) {
            return (
              <div
                className={styles.productSlide}
                style={{ marginLeft: margin.toString() + "%" }}
              >
                <img src={img} />
              </div>
            );
          } else {
            return (
              <div className={styles.productSlide}>
                <img src={img} />
              </div>
            );
          }
        })}

        {product.images.length > 1 && slide < product.images.length-1 && (
          <div
            className={styles.arrowRight}
            onClick={() => {
              swipeRight();
            }}
          >
            <img src="/images/chevron.webp" />
          </div>
        )}
      </div>

      <div className={styles.productInfo}>
        <h2>{product.name}</h2>
        <h4>{product.brand}</h4>
        <h3>${product.price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
