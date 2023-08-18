import React, {  useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
     fetch('price.json')
     .then(res => res.json())
     .then(data => setPrices(data))
    }, [])
    return (
        <div>
          <h1 className='text-purple-500 text-5xl p-12'>Price List Hear</h1>  

          <div className='grid md:grid-cols-3 gap-3 p-8'>

            {
           prices.map(price => <PriceCard 
           key={price.id}
           price={price}
           
           ></PriceCard>)

            }
          </div>
        </div>
    );
};

export default PriceList;