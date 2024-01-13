import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from "./doubleRangeSlider.module.css"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  

const PriceRangeSlider = ({ products,rangeSelected, setRangeSelected }) => {
  const [range, setRange] = useState([ Math.min(...products.map((product) => product.price)), Math.max(...products.map((product) => product.price))]); // Initialize with zeros
  const [priceDistribution, setPriceDistribution] = useState([]);

  // Update range and price distribution when products change
  useEffect(() => {
    const minPrice = Math.min(...products.map((product) => product.price));
    const maxPrice = Math.max(...products.map((product) => product.price));

    setRange([minPrice, maxPrice]);

    const distribution = Array.from({ length: 10 }, (_, index) => {
      const lowerBound = minPrice + (index / 10) * (maxPrice - minPrice);
      const upperBound = minPrice + ((index + 1) / 10) * (maxPrice - minPrice);
      const count = products.filter((product) => product.price >= lowerBound && product.price < upperBound).length;
      return count;
    });

    setPriceDistribution(distribution);
  }, [products]);

  const handleChange = (newRange) => {
    setRange(newRange);
  };

  const renderDistributionChart = () => {
    const data = {
      labels: Array.from({ length: 10 }, (_, index) => {
        const lowerBound = range[0] + (index / 10) * (range[1] - range[0]);
        const upperBound = range[0] + ((index + 1) / 10) * (range[1] - range[0]);
        return `${lowerBound.toFixed(2)} - ${upperBound.toFixed(2)}`;
      }),
      datasets: [
        {
          label: 'Number of Products',
          backgroundColor: '#B9B9B9',
          borderRadius: 3,
          data: priceDistribution,
        },
      ],
    };
console.log(rangeSelected)
    const options = {
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
      };

    return <Bar data={data} options={options} />;
  };

  return (
    <div >
            {renderDistributionChart()}
      <Slider      
          onChangeComplete={(v) => {
            console.log('kmjnbhvghbjnk',v)
            setRangeSelected(v)
          }}
          min={Math.min(...products.map((product) => product.price))}
          max={Math.max(...products.map((product) => product.price))}
          defaultValue={range}
          step={1} range count={1} allowCross={false} pushable={true}  />

          <div className={styles.dateRange}>
            <input type='number' disabled min={range[0]} max={rangeSelected[1]-1} value={rangeSelected[0]} onChange={(e)=>{setRangeSelected([e.target.value,rangeSelected[1]])}} />
            <h2>-</h2>
            <input type='number' disabled min={rangeSelected[0]+1} max={range[1]} value={rangeSelected[1]} onChange={(e)=>{setRangeSelected([rangeSelected[0],e.target.value])}}/>
          </div>
  
    </div>
  );
};

export default PriceRangeSlider;
