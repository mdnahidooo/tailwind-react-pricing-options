import React from 'react';
import { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);
    // console.log(pricingData);
    return (
        <div>
            <h2 className='text-2xl'>Get Our Membership</h2>

            <div className='md:grid grid-cols-3 gap-8 my-5'>
                {
                    pricingData.map(pricing => <PricingCard
                        key={pricing.id}
                        pricing={pricing}
                    >
                    </PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;