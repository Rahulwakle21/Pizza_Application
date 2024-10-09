import React from 'react'
import { useDispatch } from 'react-redux';
import { setSearch } from '../reduxToolkit/slicess/SearchSlice';

const Navbar = () => {

    const dispatch = useDispatch();

   const  handleSearchChange=(e)=>{
            dispatch(setSearch(e.target.value))
    }

    return (
        <nav className='flex justify-between flex-col lg:flex-row items-center px-5 py-3'>
            <div className='mb-4 lg:mb-0'>
                <h3 className='text-3xl font-bold text-gray-600'>{new Date().toUTCString().slice(0, 16)}</h3>
                <h1 className='text-2xl font-bold text-black'>Pizza Mania</h1>
            </div>
            <div className='w-full lg:w-auto'>
                <input 
                    className='border border-gray-700 p-2 rounded w-full lg:w-[300px] lg:transition-all lg:duration-300 lg:ease-in-out lg:focus:w-[400px] outline-none'
                    onChange={handleSearchChange} 
                    type="text" 
                    placeholder='Search pizzas...' 
                />
            </div>
        </nav>
    )
}

export default Navbar;
