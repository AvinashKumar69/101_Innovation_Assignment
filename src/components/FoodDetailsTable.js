import React from 'react';

const FoodDetailsTable = (props) => {
    const { foodList } = props

    return (
        <div className='overflow-x-auto rounded-lg mb-5'>
            <table className='w-screen'>
                <tbody className='border-2 border-gray-300 divide-y-2'>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>URL</td>
                        <td className='text-left font-semibold'>
                            <a className='text-blue-400' href={foodList.url}>Link</a>
                        </td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Creator</td>
                        <td className='text-left font-semibold'>{foodList.creator}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Quantity</td>
                        <td className='text-left font-semibold'>{foodList.quantity}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>packaging</td>
                        <td className='text-left font-semibold'>{foodList.packaging}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Serving Size</td>
                        <td className='text-left font-semibold'>{foodList.serving_size}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Energy/100g</td>
                        <td className='text-left font-semibold'>{foodList.energy_100g}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Energy_From_Fat/100g</td>
                        <td className='text-left font-semibold'>
                            {(foodList.energy_from_fat_100g != null) ? foodList.energy_from_fat_100g : '-'}
                        </td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Fat/100g</td>
                        <td className='text-left font-semibold'>{foodList.fat_100g}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Saturated_Fat/100g</td>
                        <td className='text-left font-semibold'>{foodList.saturated_fat_100g}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Monounsaturated_Fat/100g</td>
                        <td className='text-left font-semibold'>{foodList.monounsaturated_fat_100g}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Polyunsaturated_Fat/100g</td>
                        <td className='text-left font-semibold'>{foodList.polyunsaturated_fat_100g}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Omega_3_Fat/100g</td>
                        <td className='text-left font-semibold'>{foodList.omega_3_fat_100g}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Omega_6_Fat/100g</td>
                        <td className='text-left font-semibold'>{foodList.omega_6_fat_100g}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Trans_Fat/100g</td>
                        <td className='text-left font-semibold'>{foodList.trans_fat_100g}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Cholesterol/100g</td>
                        <td className='text-left font-semibold'>{foodList.cholesterol_100g}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Carbohydrates/100g</td>
                        <td className='text-left font-semibold'>{foodList.carbohydrates_100g}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Sugars/100g</td>
                        <td className='text-left font-semibold'>{foodList.sugars_100g}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Fiber/100g</td>
                        <td className='text-left font-semibold'>{foodList.fiber_100g}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Proteins/100g</td>
                        <td className='text-left font-semibold'>{foodList.proteins_100g}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Salt/100g</td>
                        <td className='text-left font-semibold'>{foodList.salt_100g}</td>
                    </tr>
                    <tr className='flex flex-row items-center justify-start p-2'>
                        <td className='w-4/5 text-left font-semibold'>Sodium/100g</td>
                        <td className='text-left font-semibold'>{foodList.sodium_100g}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FoodDetailsTable;