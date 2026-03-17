import React from 'react';
import { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);
    // console.log(pricingData);
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-2xl'>Get Our Membership</h2>

            <div className='md:grid grid-cols-3 gap-8 my-5'>
                {/* {
                    pricingData.map(pricing => <PricingCard
                        key={pricing.id}
                        pricing={pricing}
                    >
                    </PricingCard>)
                } */}



                {/* for daisy card */}

                {
                    pricingData.map(pricing => <DaisyPricingCard
                        key={pricing.id}
                        pricing={pricing}
                    ></DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;