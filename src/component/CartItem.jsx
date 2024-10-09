import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { decrementQty, incrementQty, removeFromCart } from '../reduxToolkit/slicess/CartSlice'

const CartItem = ({id,name,img,price,qty}) => {


    const dispatch = useDispatch()
    const handleDeleteItem =()=>{
        dispatch(removeFromCart({id,img,price,qty,name}))
    }

    const handleIncreItem =()=>{
        dispatch(incrementQty({id}))
    }

    
    const handleDecreItem =()=>{
          if(qty > 1 ){
            dispatch(decrementQty({id}))
          }
    }

    return (
        <div className='flex gap-2 shadow-md rounded-md p-2'>

            <MdDelete onClick={handleDeleteItem} className='rounded-md hover:bg-red-600 py-1 text-xl hover:text-white hover:border-none hover:duration-500 transition-all ease-linear cursor-pointer absolute right-7'/>
         
            <img src={img} alt="" 
            className='w-[50px] h-[50px]'
            />

            <div>
                <h2 className='font-bold '>{name}</h2>
                <div className='flex justify-between items-center'>
                    <span className='text-green-500 font-bold'> Rs{price}</span>
                   <div className='flex justify-between items-center gap-1 absolute right-8'>

                   <AiOutlinePlus onClick={handleIncreItem} className='border border-gray-600 rounded-md hover:bg-green-600 py-1 text-xl hover:text-white hover:border-none hover:duration-500 transition-all ease-linear cursor-pointer'/>


                    <span>{qty}</span>


                    <AiOutlineMinus onClick={handleDecreItem} className='border border-gray-600 rounded-md hover:bg-green-600 py-1 text-xl hover:text-white hover:border-none hover:duration-500 transition-all ease-linear cursor-pointer' />
                   </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
