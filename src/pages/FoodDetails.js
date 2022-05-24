import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IMAGE from '../assets/icon.png';
import FoodDetailsTable from '../components/FoodDetailsTable';


const FoodDetails = () => {

    const { state } = useLocation()
    // console.log('state-->', state);
    const { foodList } = state

    const navigate = useNavigate()

    return (
        <>
            <div className='flex flex-col items-center justify-center'>

                <div className='flex flex-row items-center space-x-6 p-2 mb-5'>
                    <div className='w-1/3'>
                        <img className='object-cover' src={IMAGE} alt='icon' />
                    </div>
                    <div className='flex flex-col items-start w-2/3 space-y-2 text-sm font-medium'>
                        <h1 className=''>
                            {foodList.product_name}
                        </h1>
                        <h1 className=''>
                            ({foodList.generic_name})
                        </h1>
                    </div>
                </div>

                <FoodDetailsTable foodList={foodList} />

                <button className='border-2 bg-emerald-300 rounded-lg p-2 mb-5 font-medium' type='button'
                    onClick={() => navigate('/')}
                >
                    Go Back to Food Lists
                    <i className="fa-solid fa-arrow-left-long pl-2" />
                </button>

            </div>
        </>
    )
}

export default FoodDetails;