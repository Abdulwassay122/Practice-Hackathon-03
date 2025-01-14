"use client"
import {createContext, useContext, useState} from 'react'

interface CartContextType {

  cart: cartItem[];

  setCart: React.Dispatch<React.SetStateAction<cartItem[]>>;

}

const CartContext = createContext<CartContextType | undefined>(undefined)

interface cartItem{
  quantity:number,
  productId:string,
  name:string,
  description:string
  tags:string
  price:number,
  totalprice:number,
  image:string
}

export function CartWrapper ({children}:{
  children: React.ReactNode;
}){
  const [cart, setCart] = useState<cartItem[]>([])

  return(
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext(){
  return useContext(CartContext)
}