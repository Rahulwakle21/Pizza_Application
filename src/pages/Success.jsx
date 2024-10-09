import React, { useEffect, useState } from 'react'
import { DotLoader } from 'react-spinners'

const Success = () => {
    const[loading,setLoading] =useState(true)
    useEffect(()=>{
        setTimeout(()=>{
                setLoading(false)
        },3000)
    },[])
    return (
      <>
      <div className='flex justify-center items-center h-[100vh] flex-col font-bold '>
         {
            loading ? <DotLoader /> :   <div>
                <h1 className='text-4xl mb-5 animate-bounce text-center'>Order Succesfull....</h1>
                <p className='text-2xl animate-bounce text-center'>Your Order Placed..</p> 
            </div>
       
              
        }
        </div> 
      </>
    )
}

export default Success
