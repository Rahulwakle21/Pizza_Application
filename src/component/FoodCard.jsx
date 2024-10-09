import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {addToCart} from '../reduxToolkit/slicess/CartSlice'


const FoodCard = ({id,name,img,desc,rating,price,handleToast}) => {


  const dispatch = useDispatch();

  const handleAddToCart =()=>{
    handleToast(name)
    dispatch(addToCart({id,name,price,rating,img ,qty:1}))
   

  }

  return (
    <div className="font-bold w-[250px] p-5 bg-white rounded-lg">
      <img className="w-full h-[130px]  hover:scale-110 duration-500 cursor-grab"
        src={img}
        alt={name}
      />
      <div className="flex justify-between py-2">
        <h2>{name}</h2>
        <h2 className="text-green-600">Rs{price}</h2>
      </div>
      <div>
        <h3 className="text-sm font-normal">
         {desc.slice(0,50)}....
        </h3>
      </div>
      <div className="flex justify-between pt-3">
        <h2 className="flex justify-center items-center"><AiFillStar className="text-yellow-400 mr-2"/> {rating}</h2>
        <button onClick={handleAddToCart} className="px-3 py-1 rounded-md bg-green-500 font-bold hover:bg-green-800 hover:text-white duration-500 ">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
