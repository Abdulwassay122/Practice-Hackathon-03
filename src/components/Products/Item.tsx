import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export default function Item({type, name, catagory, color, price, picture}: { picture: string, type: string, name:string, price:string, color:string, catagory:string }) {
  return (
    <Link href="/productdetail">
    <div className='w-[348px] h-[533px]'>
      <div>
        <Image src={picture} alt="" />
      </div>
      <div className='pt-[9px] pb-[42px] flex flex-col gap-5'>
        <div>
            <p className='text-[15px] leading-7 font-[500] text-[#9E3500]'>{type}</p>
            <p className='text-[15px] leading-6 font-[500] text-[#111111]'>{name}</p>
            <p className='text-[15px] leading-6 text-[#757575]'>{catagory}</p>
            <p className='text-[15px] leading-6  text-[#757575]'>{color}</p>
        </div>
            <p className='text-[15px] leading-7 font-[500] text-[#111111]'>{`MRP : ₹ ${price}`}</p>
      </div>
    </div>
    </Link>
  )
}
