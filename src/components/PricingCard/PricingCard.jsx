import React from 'react';
import Feature from './Feature';

const PricingCard = ({ pricing }) => {
    // console.log(pricing);
    const { name, price, description, features } = pricing;
    return (
        <div className='flex flex-col border mb-8 p-4 space-y-2 bg-green-600 rounded-2xl'>
            <div>
                <h2 className='text-5xl'>{name}</h2>
                <h4 className='text-2xl'>{price}</h4>
            </div>
            <div className='bg-green-300 p-4 rounded-2xl text-black flex-1'>
                <p >{description}</p>

                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>

            <button className="btn w-full mt-4">Subscribe</button>
        </div>
    );
};

export default PricingCard;