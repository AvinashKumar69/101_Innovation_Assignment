import React from 'react';
import FoodListCard from '../components/FoodListCard';
import data from '../data.json';

const FoodList = () => {

    return (
        <div className=''>
            {
                data && data.length > 0 && data.map((foodList) => {
                    return (
                        <FoodListCard key={foodList.code} foodList={foodList} />
                    )
                })
            }
        </div>
    )
}

export default FoodList;