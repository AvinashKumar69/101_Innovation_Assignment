import React from 'react';
import { useNavigate } from 'react-router-dom';
import IMAGE from '../assets/icon.png';


const FoodListCard = (props) => {

    const navigate = useNavigate()

    const { foodList } = props
    // console.log('FoodListCard Props-->', foodList);

    const handleClick = () => {
        let foodListId = foodList.code
        navigate(`/${foodListId}`, { state: { foodList } })
    }


    return (
        <div className='flex flex-row items-center space-x-6 p-2 divide-y-2'>
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
                <button type='button' className='border-2 border-gray-300 rounded-lg px-2 font-medium bg-emerald-300'
                    onClick={handleClick}
                >
                    View Details
                    <i className="fa-solid fa-arrow-right-long pl-2" />
                </button>
            </div>
        </div>
    )
}

export default FoodListCard;