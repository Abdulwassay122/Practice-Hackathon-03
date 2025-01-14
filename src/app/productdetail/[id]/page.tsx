"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import star from "./assets/reshot-icon-star-ZH7KM9EGN8.svg";
import graystar from "./assets/graystar.svg";
import graystarhalf from "./assets/graystarhalf.svg";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import cartt from "./assets/Buy 2.svg";
import loader from "./assets/Animation - 1736611675285.gif";
import Link from "next/link";
import { useCartContext } from "@/app/Contexts/CartContext";

interface Product {
  _id: string;
  name: string;
  price: number;
  discountPercentage: number;
  tags: string;
  rating: number;
  ratingCount: number;
  description: string;
  imageUrl: string;
}

interface PageProps {
  params: Params;
}

interface Params {
  id: string;
}

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

export default function Page({ params: { id } }: PageProps) {

  const cartContext = useCartContext();
  if (!cartContext) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  const { setCart } = cartContext;
  
  const [item, setItem] = useState<Product[]>()

  const [loading, setLoading] = useState<boolean>(true)
  
  const [qty, setQty] = useState(1)

  useEffect(()=>{
    fetchApi()
  })
  const fetchApi = async () => {
    const itemm = await client.fetch(`*[_type == 'product' && _id == '${id}']{
      _id,
      name,
      price,
      discountPercentage,
      tags,
      rating,
      ratingCount,
      description,
      "imageUrl": image.asset->url
      }`)
      setItem(itemm)
      setLoading(false)
    }
    
    
  function addToCart(){
  const cartItem = {
    quantity: qty,
    productId: id,
    name: item ? item[0].name : '',
    description: item ? item[0].description : '',
    tags: item ? item[0].tags : '',
    price: item ? item[0].price : 0,
    totalprice: item ? item[0].price * qty : 0,
    image: item ? item[0].imageUrl : '',
  }
  setCart((prevCart: cartItem[]) => [...prevCart, cartItem]);
  alert('Product Added to cart Successfully!')
}
// function addToCart (){
//   const storedUser = JSON.parse(localStorage.getItem("user") || '{}');
//   if(Object.keys(storedUser).length === 0){
//     getUser()
//   }else{
//     setCart({...cart, user:storedUser})
//   }
// }

// function getUser(){
  
// }

  function ratingSystem(Rating: number) {
    const totalStars = 5;
    const stars = [];
  
    for (let i = 0; i < totalStars; i++) {
      if (Rating >= i + 1) {
        // Full star
        stars.push(<Image key={i} className="h-8 w-8" src={star} alt="" />);
      } else if (Rating > i && Rating < i + 1) {
        // Half star
        stars.push(<Image key={i} className="h-8 w-8" src={graystarhalf} alt="" />);
      } else {
        // Gray star
        stars.push(<Image key={i} className="h-8 w-8" src={graystar} alt="" />);
      }
    }
  
    return <div className="flex gap-1">{stars}</div>;
  }

  return (
    <>
      <Navbar />

        {loading && <div className="h-screen w-screen flex items-center justify-center"><Image src={loader} alt="" /></div>}
      <section className="flex xl:gap-[137px] gap-10 1160:flex-row items-center flex-col xl:px-[110px] 450:px-10 px-5 pt-[110px] pb-[162px]">
        {item && (
          <Image
            width={400}
            height={400}
            className="h-auto w-[450px]"
            src={item[0].imageUrl}
            alt=""
          />
        )}
        <div className="flex flex-col gap-8">
          <h1 className="sm:text-[48px] text-[28px] font-[500] leading-[58px]">
            {item ? item[0].name : ""}
          </h1>
          <p className="text-[20px] font-normal leading-7 1160:w-[530px]">
            {item ? item[0].description : ""}
          </p>
          <p className="sm:text-[36px] text-[26px] leading-7">
            {item ? `$${(item[0].price * qty).toFixed(2)}` : ""}
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              {item && ratingSystem(item[0].rating)}
              <p className="text-[20px]">{item ? `(${item[0].rating})` : ""}</p>
            </div>
            <p className="text-[#9E3500] pl-1">
              {item ? `Ratings ${item[0].ratingCount}` : ""}
            </p>
          </div>
          {!loading && <div className="flex flex-col gap-2">
            <div className="border-[1px] flex w-[174px] items-center  justify-between rounded-full">
              <button onClick={()=>setQty(qty<=1?1:qty-1)} className="pl-6 text-[25px] text-gray-800">-</button>
              <p className="text-[20px] p-auto border-x-[1px]  h-full text-gray-800 px-5 leading-10">
                {qty}
              </p>
              <button onClick={()=>setQty(qty+1)} className="pr-6 text-[25px] text-gray-800">+</button>
            </div>
            <div className="relative flex items-center">
              <Link href="/cart">
                <button  onClick={addToCart} className="bg-black text-white text-[15px] leading-6 w-[174px] pl-6 h-[44px] rounded-full">
                  {" "}
                  Add To Cart
                </button>
              </Link>
              <Image className="absolute left-5" src={cartt} alt="" />
            </div>
          </div>}
        </div>
      </section>

      <Footer />
    </>
  );
}

