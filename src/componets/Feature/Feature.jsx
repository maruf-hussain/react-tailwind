import React from 'react';
import {CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='text-yellow-200 flex'>
          <CheckCircleIcon className="h-6 w-6 text-red-500" /> 
            {feature}
        </div>
    );
};

export default Feature;