import React from 'react';
import Feature from '../Feature/Feature';




const PriceCard = ({price}) => {
    return (
        <div className='bg-blue-700 p-4 mx-4 text-center'>
           <h3 > 
            <span className='text-4xl text-red-400 '>{price.price}</span>
           <span>/month</span>

           </h3> 
           <h3 className='text-white text-4xl'>{price.name}</h3>
           <p className='underline font-bole text-2xl text-white mt-2 text-left'>Features: </p>

           {
            price.features.map((feature, idx) => <Feature 
            key={idx}
            feature={feature}
            ></Feature>)
            
           }
          
         
        </div>
    );
};

export default PriceCard;