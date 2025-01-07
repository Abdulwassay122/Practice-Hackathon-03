"use client"
import React from 'react'
import Image from "next/image";
import arrowleft from "./assets/Vector (8).svg";
import arrowright from "./assets/Vector (9).svg";
import image from "./assets/Image (2).svg";

export default function Hoome2() {
  return (
    <section className='h-[604.36px] pl-12'>
        <div className='flex justify-between sm:flex-row flex-col pr-12 sm:gap-0 gap-4 sm:items-center'>
            <h3 className='text-[22px] leading-7 font-[600]'>Best of Air Max</h3>
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
        <div className='pt-[30px] flex gap-3 overflow-x-auto'>
            {/* Item 01 */}
            <div className='w-[441.36px] h-[510.36px] flex flex-col gap-[21px]'>
                <div className='h[441.36px] bg-[#E5E5E5]'>
                    <Image src={image} alt="" />
                </div>
                <div className='w-[425px] h-12'>
                    <div className='flex justify-between'>
                        <p className='text-[15px] leading-6 font-[500]'>Nike Air Max Pulse</p>
                        <p className='text-[15px] leading-6 font-[500]'>₹ 13 995</p>
                    </div>
                    <p className='text-[15px] leading-6 font-[400] text-[#757575]'>Women&quot;s Shoes</p>
                </div>
            </div>
            {/* Item 02 */}
            <div className='w-[441.36px] h-[510.36px] flex flex-col gap-[21px]'>
                <div className='h[441.36px] bg-[#E5E5E5]'>
                    <Image src={image} alt="" />
                </div>
                <div className='w-[425px] h-12'>
                    <div className='flex justify-between'>
                        <p className='text-[15px] leading-6 font-[500]'>Nike Air Max Pulse</p>
                        <p className='text-[15px] leading-6 font-[500]'>₹ 13 995</p>
                    </div>
                    <p className='text-[15px] leading-6 font-[400] text-[#757575]'>Women&quot;s Shoes</p>
                </div>
            </div>
            {/* Item 03 */}
            <div className='w-[441.36px] h-[510.36px] flex flex-col gap-[21px]'>
                <div className='h[441.36px] bg-[#E5E5E5]'>
                    <Image src={image} alt="" />
                </div>
                <div className='w-[425px] h-12'>
                    <div className='flex justify-between'>
                        <p className='text-[15px] leading-6 font-[500]'>Nike Air Max Pulse</p>
                        <p className='text-[15px] leading-6 font-[500]'>₹ 13 995</p>
                    </div>
                    <p className='text-[15px] leading-6 font-[400] text-[#757575]'>Women&quot;s Shoes</p>
                </div>
            </div>
            {/* Item 04 */}
            <div className='w-[441.36px] h-[510.36px] flex flex-col gap-[21px]'>
                <div className='h[441.36px] bg-[#E5E5E5]'>
                    <Image src={image} alt="" />
                </div>
                <div className='w-[425px] h-12'>
                    <div className='flex justify-between'>
                        <p className='text-[15px] leading-6 font-[500]'>Nike Air Max Pulse</p>
                        <p className='text-[15px] leading-6 font-[500]'>₹ 13 995</p>
                    </div>
                    <p className='text-[15px] leading-6 font-[400] text-[#757575]'>Women&quot;s Shoes</p>
                </div>
            </div>
        </div>
    </section>
  )
}
