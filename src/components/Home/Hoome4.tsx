import React from 'react'
import arrowleft from "./assets/Vector (8).svg";
import arrowright from "./assets/Vector (9).svg";
import image from "./assets/Image (4).svg";
import Image from "next/image";

export default function Hoome4() {
  return (
    <section className='px-12 flex flex-col gap-[25px]'>
        <h2 className='text-[23px] leading-7 font-[500]'>Gear Up</h2>
        <div className='flex 1284:flex-row flex-col  justify-between'>
        {/* Men Items list */}
        <div className='flex flex-col gap-3  1284:items-end items-center'>
            {/* top button */}
            <div className='flex gap-3 items-center mr-12'>
                <p className='text-[15px] leading-6 font-[500]'>Shop Men&quot;s</p>
                <button className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowleft} alt="" />
                </button>
                <button className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowright} alt="" />
                </button>
            </div>
            {/* items list */}
            <div className='flex 1400:pl-12 sm:flex-row flex-col pr-[6px] gap-3 pb-14'>
                {/* item 01 */}
                <div className='w-[300px] h-[393px] flex flex-col gap-[21px]'>
                    <Image src={image} alt="" />
                    <div className='pr-4'>
                        <div className='flex justify-between'>
                            <p className='text-[15px] leading-6 font-[500]'>Nike Dri-FIT ADV TechKnit Ultra</p>
                            <p className='text-[15px] leading-6 font-[500]'>₹ 3 895</p>
                        </div>
                        <p className='text-[15px] leading-6 font-[400] text-[#757575] w-[180px]'>Men&quot;s Short-Sleeve Running Top</p>
                    </div>
                </div>
                {/* item 01 */}
                <div className='w-[300px] h-[393px] flex flex-col gap-[21px]'>
                    <Image src={image} alt="" />
                    <div className='pr-4'>
                        <div className='flex justify-between'>
                            <p className='text-[15px] leading-6 font-[500]'>Nike Dri-FIT ADV TechKnit Ultra</p>
                            <p className='text-[15px] leading-6 font-[500]'>₹ 3 895</p>
                        </div>
                        <p className='text-[15px] leading-6 font-[400] text-[#757575] w-[180px]'>Men&quot;s Short-Sleeve Running Top</p>
                    </div>
                </div>
            </div>
        </div>
        {/* woMen Items list */}
        <div className='flex flex-col gap-3 1284:items-end items-center'>
            {/* top button */}
            <div className='flex gap-3 items-center mr-12'>
                <p className='text-[15px] leading-6 font-[500]'>Shop Women&quot;s</p>
                <button className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowleft} alt="" />
                </button>
                <button className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowright} alt="" />
                </button>
            </div>
            {/* items list */}
            <div className='flex 1400:pl-12 sm:flex-row flex-col  pr-[6px] gap-3 pb-14'>
                {/* item 01 */}
                <div className='w-[300px] h-[393px] flex flex-col gap-[21px]'>
                    <Image src={image} alt="" />
                    <div className='pr-4'>
                        <div className='flex justify-between'>
                            <p className='text-[15px] leading-6 font-[500]'>Nike Dri-FIT ADV TechKnit Ultra</p>
                            <p className='text-[15px] leading-6 font-[500]'>₹ 3 895</p>
                        </div>
                        <p className='text-[15px] leading-6 font-[400] text-[#757575] w-[180px]'>Men&quot;s Short-Sleeve Running Top</p>
                    </div>
                </div>
                {/* item 01 */}
                <div className='w-[300px] h-[393px] flex flex-col gap-[21px]'>
                    <Image src={image} alt="" />
                    <div className='pr-4'>
                        <div className='flex justify-between'>
                            <p className='text-[15px] leading-6 font-[500]'>Nike Dri-FIT ADV TechKnit Ultra</p>
                            <p className='text-[15px] leading-6 font-[500]'>₹ 3 895</p>
                        </div>
                        <p className='text-[15px] leading-6 font-[400] text-[#757575] w-[180px]'>Men&quot;s Short-Sleeve Running Top</p>
                    </div>
                </div>
            </div>
        </div>

        </div>
    </section>
  )
}
