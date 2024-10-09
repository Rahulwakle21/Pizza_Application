import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../dummyData/pizzaData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodItems = () => {

    const category = useSelector((state)=> state.category.category)

    const search = useSelector((state)=> state.search.search)

    const handleToast =(name)=>{
        toast.success(` ${name} Add Succesfully`)
    }



    return (
        <>
        <Toaster/>
        <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
            {
               FoodData.filter((food)=>{
                    if(category === "All"){
                        return food.name.toLowerCase().includes(search.toLowerCase());
                    }else{
                        return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
                    }
               }).map((food)=>{
                    return (
                        <FoodCard key={food.id} id={food.id} name={food.name} price={food.price}
                    desc={food.desc} img={food.img} category={food.category} rating={food.rating}
                    handleToast ={handleToast}
                    />
                    )
               })
            }


          
        </div>
            </>
    )
}

export default FoodItems
