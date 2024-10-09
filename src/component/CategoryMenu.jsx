import React, { useEffect, useState } from "react";
import FoodData from "../dummyData/pizzaData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../reduxToolkit/slicess/CategorySlice";

const CategoryMenu = () => {

  const[categories,setCategories] = useState([]);

  const diffCat =()=>{
    const uniCategories = [
     ...new Set(FoodData.map((food)=> food.category))]
      setCategories(uniCategories)
      console.log(uniCategories)
  }

  useEffect(()=>{
    diffCat()
  },[])

  const dispatch = useDispatch();

  const handleCategories =(cat)=>{
    dispatch(setCategory(cat))
  }

  const seletedCat = useSelector((state) => state.category.category)

  return (
    <div>
      <div className="ml-6">
        <h3 className="text-2xl font-semibold"> Find The Best Food</h3>
        <div className="my-5 flex gap-2 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button onClick={()=>handleCategories("All")} 
             className="px-3 py-1 rounded-md bg-gray-400 font-bold hover:bg-green-800 hover:text-white duration-500 ">
              All
            </button>
        
         {
          categories.map((cat,i)=>{
            return (
              <button onClick={()=>handleCategories(cat)} 
              key={i} className="px-3 py-1 rounded-md bg-gray-400 font-bold hover:bg-green-800 hover:text-white duration-500 ">
                {cat}
            </button>
            )
          })
         }
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
