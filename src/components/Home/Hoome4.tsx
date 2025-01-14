"use client"
import React, { useEffect, useState } from 'react'
import arrowleft from "./assets/Vector (8).svg";
import arrowright from "./assets/Vector (9).svg";
import Image from "next/image";
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Loading from './assets/Loading';
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
export default function Hoome4() {
    const[loading, setLoading] = useState<boolean>(true)

    const[menSlide, setMenSlide] = useState<number>(0)
    const[womenSlide, setwomenSlide] = useState<number>(0)
    // console.log(menSlide)

    const[menData, setMenData] = useState<Product[]>()
    const[womenData, setWomenData] = useState<Product[]>()

    useEffect(()=>{
        fetchApi()
        setLoading(false)
    })

    async function fetchApi(){
    const menDataa = await client.fetch(`*[_type == "product" && "men's clothing" in tags ]{
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
    const womenDataa = await client.fetch(`*[_type == "product" && "women's clothing" in tags ]{
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

    setMenData(menDataa)
    setWomenData(womenDataa)
    }
  return (
    <section className='px-12 flex flex-col gap-[25px]'>
        <h2 className='text-[23px] leading-7 font-[500]'>Gear Up</h2>
        <div className='flex 1284:flex-row flex-col  justify-between'>
        {/* Men Items list */}
        <div key={'men'} className='flex flex-col gap-3  1284:items-end items-center relative'>
            {/* top button */}
            <div className='flex gap-3 items-center mr-12'>
                <p className='text-[15px] leading-6 font-[500]'>Shop Men&quot;s</p>
                <button onClick={()=>setMenSlide(menSlide !==0 ? menSlide - 333: 0)} className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowleft} alt="" />
                </button>
                <button onClick={()=>setMenSlide(menSlide <  (menData?.length ?? 0) * 166.5 ? menSlide + 333:0)} className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowright} alt="" />
                </button>
            </div>
            {/* items list */}
            {loading && <Loading/>}
            {!loading && <div className='flex w-[666px] overflow-x-hidden 1400:pl-12 sm:flex-row flex-col pr-[6px] gap-3 pb-14'>
                {/* item 01 */}
                {menData?.map((ele)=>{ return (
                    <Link key={ele._id} href={`/productdetail/${ele._id}`}><div className={`min-w-[300px] -translate-x-[${menSlide}px] h-[393px] transition-transform duration-300 flex flex-col gap-[21px]`}>
                    <div className='w-full h-[301px] flex items-center justify-center p-2 bg-[#E5E5E5]'>
                        <Image className='h-[293px] w-[auto]' width={200} height={200} src={ele.imageUrl} alt="" />    
                    </div>
                    <div className='pr-4'>
                        <div className='flex justify-between'>
                            <p className='text-[15px] leading-6 font-[500]'>{ele.name}</p>
                            <p className='text-[15px] leading-6 font-[500]'>{ele.price}</p>
                        </div>
                        <p className='text-[15px] leading-6 font-[400] text-[#757575] w-[180px]'>{ele.tags}</p>
                    </div>
                </div></Link>)})}
            </div>}
        </div>
        {/* woMen Items list */}
        <div key={'women'} className='flex flex-col gap-3 1284:items-end items-center'>
            {/* top button */}
            <div className='flex gap-3 items-center mr-12'>
                <p className='text-[15px] leading-6 font-[500]'>Shop Women&quot;s</p>
                <button onClick={()=>setwomenSlide(womenSlide !==0 ? womenSlide - 333: 0)} className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowleft} alt="" />
                </button>
                <button onClick={()=>setwomenSlide(womenSlide < (womenData?.length ?? 0) * 222 ? womenSlide + 333:0)} className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowright} alt="" />
                </button>
            </div>
            {/* items list */}
            {loading && <Loading/>}
            {!loading && <div className='flex 1400:pl-12 w-[666px] overflow-x-hidden  sm:flex-row flex-col  pr-[6px] gap-3 pb-14'>
                {/* item 01 */}
                {womenData?.map((ele)=>{return( 
                    <Link key={ele._id} href={`/productdetail/${ele._id}`}><div className={`min-w-[300px] h-[393px] -translate-x-[${womenSlide}px] transition-transform duration-300 flex flex-col gap-[21px]`}>
                    <div className='w-full h-[301px] flex items-center justify-center p-2 bg-[#E5E5E5]'>
                        <Image className='h-[293px] w-[auto]' width={200} height={200} src={ele.imageUrl} alt="" />    
                    </div>
                    <div className='pr-4'>
                        <div className='flex justify-between'>
                            <p className='text-[15px] leading-6 font-[500]'>{ele.name}</p>
                            <p className='text-[15px] leading-6 font-[500]'>{ele.price}</p>
                        </div>
                        <p className='text-[15px] leading-6 font-[400] text-[#757575] w-[180px]'>{ele.tags}</p>
                    </div>
                </div></Link>)})}
            </div>}
        </div>

        </div>
    </section>
  )
}
