import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const navigate  = useNavigate()

  const cartItemss = useSelector((state) => {
    // console.log("State:", state);
    return state.cart.cart;
  });
  console.log("cartItemss:", cartItemss);

  const totalQty = cartItemss.reduce((totalqty,item)=> totalqty + item.qty,0)
  const totalPrice = cartItemss.reduce((total, item)=> total + item.qty * item.price,0 )

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full bg-white p-4 h-full lg:w-[20vw] mb-4 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 text-xl rounded-md hover:text-red-600 cursor-pointer
            hover:border-red-700 
          "
          />
        </div>

        <div>
          { cartItemss.length > 0 ? cartItemss.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                qty={item.qty}
              />
            );
          }): <><h2 className="text-center text-2xl font-bold">Cart is Empty</h2></>}
        </div>

        <div className="absolute bottom-0 mb-5">
          <h3>Items:  {totalQty} </h3>
          <h3>Total Amount : {totalPrice} </h3>
          <button  onClick={()=>navigate("/success")} className="bg-green-500 font-bold px-3 text-white py-2 rounded-md w-[90vw] lg:w-[18vw] mt-3">
            Checkout
          </button>
        </div>
      </div>
      <div>
        <FaShoppingCart
          onClick={() => setActiveCart(!activeCart)}
          className={`rounded-full bg-white shadow-md text-4xl p-3 cursor-pointer
          fixed bottom-4 right-4 ${totalQty > 0 ? "animate-bounce" : "none" } `}
        />
      </div>
    </>
  );
};

export default Cart;
