// "use client"
import React from 'react'
import Image from "next/image";
import arrowleft from "./assets/Vector (8).svg";
import arrowright from "./assets/Vector (9).svg";
import Link from "next/link";
import { client } from '@/sanity/lib/client';

interface Product {
    _id: string;
    name: string;
    price: number;
    discountPercentage: number;
    tags: string;
    rating: number;
    ratingCount: number;
    description: string;
    imageUrl: string
}

export default async function Hoome2() {
    const data = await client.fetch(`*[_type == "product" && "electronics" in tags ]{
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
  return (
    <section className='h[604.36px] pl-12'>
        <div className='flex justify-between sm:flex-row flex-col pr-12 sm:gap-0 gap-4 sm:items-center'>
            <h3 className='text-[22px] leading-7 font-[600]'>Best of Electronics</h3>
            <div className='flex gap-3 items-center'>
                <p className='text-[15px] leading-6 font-[500]'>Shop</p>
                <button className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowleft} alt="" />
                </button>
                <button className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowright} alt="" />
                </button>
            </div>
        </div>
        {/* Item List */}
        <div className='pt-[30px] flex gap-3 overflow-x-auto '>
            {/* Item 01 */}
           {data.map((ele:Product, index:number)=>{
            return (<Link key={index} href={`/productdetail/${ele._id}`}><div className='w-[441.36px] h[510.36px] flex flex-col gap-[21px]'>
                    <div className='h[441.36px] bg-[#E5E5E5] flex items-center justify-center'>
                        <Image className='w-auto h-[425px] p-5' height={200} width={200} src={ele.imageUrl} alt="" />
                    </div>
                    <div className='w-[425px] h12'>
                        <div className='flex justify-between'>
                            <p className='text-[15px] leading-6 font-[500]'>{ele.name}</p>
                            <p className='text-[15px] leading-6 font-[500]'>{ele.price}</p>
                        </div>
                        <p className='text-[15px] leading-6 font-[400] text-[#757575]'>{ele.tags}</p>
                    </div>
            </div></Link>)})}
            
        </div>
    </section>
  )
}
