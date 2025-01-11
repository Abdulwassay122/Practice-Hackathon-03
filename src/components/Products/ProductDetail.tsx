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
import Link from "next/link";

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

export default async function ProductDetail({ params: { id } }: PageProps) {

  const [item, setItem] = useState<Product[] | null>(null);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await client.fetch(`*[_type == 'product' && _id == '${id}']{
  _id,
  name,
  price,
  discountPercentage,
  tags,
  rating,
  ratingCount,
  description,
  "imageUrl": image.asset->url
}`);
    
setItem(data)
  };

  const [cart, setCart] = useState({
    name: item ? item[0].name : "",
    price: item ? item[0].price : 0,
    totalprice: item ? item[0].price : 0,
    tags: item ? item[0].tags : "",
    description: item ? item[0].description : "",
    quantity: 1,
  });

  function ratingSystem(Rating: number) {
    if (Rating === 0) {
      return (
        <div className="flex gap-1">
          <Image className="h-8 w-8" src={graystar} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
        </div>
      );
    } else if (Rating > 0 && Rating < 1) {
      return (
        <div className="flex gap-1">
          <Image className="h-8 w-8" src={graystarhalf} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
        </div>
      );
    } else if (Rating === 1) {
      return (
        <div className="flex gap-1">
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
        </div>
      );
    } else if (Rating > 1 && Rating < 2) {
      return (
        <div className="flex gap-1">
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={graystarhalf} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
        </div>
      );
    } else if (Rating === 2) {
      return (
        <div className="flex gap-1">
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
        </div>
      );
    } else if (Rating > 2 && Rating < 3) {
      return (
        <div className="flex gap-1">
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={graystarhalf} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
        </div>
      );
    } else if (Rating === 3) {
      return (
        <div className="flex gap-1">
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
        </div>
      );
    } else if (Rating > 3 && Rating < 4) {
      return (
        <div className="flex gap-1">
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={graystarhalf} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
        </div>
      );
    } else if (Rating === 4) {
      return (
        <div className="flex gap-1">
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={graystar} alt="" />
        </div>
      );
    } else if (Rating > 4 && Rating < 5) {
      return (
        <div className="flex gap-1">
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={graystarhalf} alt="" />
        </div>
      );
    } else if (Rating === 5) {
      return (
        <div className="flex gap-1">
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={star} alt="" />
          <Image className="h-8 w-8" src={star} alt="" />
        </div>
      );
    }
  }

  return (
    <>
      <Navbar />

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
            {item ? `$${item[0].price}` : ""}
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
          <div className="flex flex-col gap-2">
            <div className="border-[1px] flex w-[174px] items-center  justify-between rounded-full">
              <button className="pl-6 text-[25px] text-gray-800">-</button>
              <p className="text-[20px] p-auto border-x-[1px]  h-full text-gray-800 px-5 leading-10">
                14
              </p>
              <button className="pr-6 text-[25px] text-gray-800">+</button>
            </div>
            <div className="relative flex items-center">
              <Link href="/cart">
                <button className="bg-black text-white text-[15px] leading-6 w-[174px] pl-6 h-[44px] rounded-full">
                  {" "}
                  Add To Cart
                </button>
              </Link>
              <Image className="absolute left-5" src={cartt} alt="" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
