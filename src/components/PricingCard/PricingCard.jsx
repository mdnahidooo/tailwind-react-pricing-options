import React from 'react';
import Feature from './Feature';

const PricingCard = ({ pricing }) => {
    // console.log(pricing);
    const { name, price, description, features } = pricing;
    return (
        <div className='border p-4 space-y-2 bg-green-600 rounded-2xl'>
            <div>
                <h2 className='text-5xl'>{name}</h2>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            <div className='bg-green-300 p-4 rounded-2xl text-black'>
                <p >{description}</p>

                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>

        </div>
    );
};

export default PricingCard;