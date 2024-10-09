import React from 'react'
import CategoryMenu from '../component/CategoryMenu'
import FoodItems from '../component/FoodItems'
import Cart from '../component/Cart'
import Navbar from '../component/Navbar'

const Home = () => {
    return (
        <>
                   <Navbar/>
            <CategoryMenu/>  
            <FoodItems/> 
            <Cart/>
        </>
    )
}

export default Home
