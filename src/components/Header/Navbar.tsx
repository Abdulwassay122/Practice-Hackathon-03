"use client"
import React from 'react'
import Image from "next/image";
import logo1 from './assets/Vector (6).svg'
import nike from './assets/Vector (7).svg'
import wishlidt from './assets/Frame.svg'
import cartt from './assets/Frame (1).svg'
import search from './assets/Frame (2).svg'
import Link from 'next/link'
import { useCartContext } from '@/app/Contexts/CartContext';

export default function Navbar() {
  const cartContext = useCartContext();
      if (!cartContext) {
        throw new Error("useCartContext must be used within a CartProvider");
      }
      const { cart } = cartContext;

  return (
    <header className=''>
      <div className='w-full h-9 flex justify-between items-center px-10 bg-[#F5F5F5]'>
        <div className='h-6 w-6 flex justify-center items-center'>
            <Link href="/"><Image src={logo1} alt="" /></Link>
        </div>
        <nav className='w-[272.81px] flex justify-center'>
            <ul className=' flex items-center'> 
                <Link href="/about"><li className='text-[11px] leading-[14px] font-[500]'>Find a Store</li></Link>
                <span className='ml-4 mr-[11px]'>|</span>
                <Link href="/about"><li className='text-[11px] leading-[14px] font-[500]'>Help</li></Link>
                <span className='ml-3 mr-[11px]'>|</span>
                <Link href="/joinus"><li className='text-[11px] leading-[14px] font-[500]'>Join Us</li></Link>
                <span className='ml-3 mr-[14px]'>|</span>
                <Link href="/login"><li className='text-[11px] leading-[14px] font-[500]'>Sign In</li></Link>
            </ul>
        </nav>
      </div>
      <div className='w-full h-[60px] flex items-center px-10 gap-10 justify-between'>
        <Link href="/"><Image className='mx-2' src={nike} alt="" /></Link>
        <div className='lg:w-[1211px] h-full flex items-center justify-end gap-60'>
            <div className='flex items-center xl:w-[890px] gap-10 justify-between'>
            <nav className='md:block hidden'>
                <ul className=' text-[16px] leading-6 font-[500] gap-7 flex '>
                    <Link href="/products"><li>All Products</li></Link>
                    <Link href={`/product/men`}><li>Men</li></Link>
                    <Link href="/product/women"><li>Women</li></Link>
                    <Link href="/product/jewelery"><li>Jewellery</li></Link>
                    <Link href="/product/electronics"><li>Electronic</li></Link>
                </ul>
            </nav>
            <div className='relative lg:block hidden'>
                <input className='bg-[#F5F5F5] w-[180px] pl-10 h-10 rounded-full text-[#CCCCCC]' placeholder='Search' type="text" />
                <Image className='absolute left-2 top-2 ' src={search} alt="" />
            </div>
            </div>
        </div>
        <div className='w-[84px] flex justify-between'>
            <div className='h-9 w-9 flex justify-center items-center'><Image src={wishlidt} alt="" /></div>
            <div className='h-9 w-9 flex justify-center items-center relative'><Link href="/cart"><Image src={cartt} alt="" /></Link>{cart.length ===0 ?'':<span className='absolute h-4 w-4 flex items-center justify-center rounded-full text-[12px] top-0 right-0 bg-red-500 text-white'>{cart.length}</span>}</div>
        </div>
      </div>
        <div className='relative mx-10 lg:hidden block mb-4'>
                <input className='bg-[#F5F5F5] w-full pl-10 h-10 rounded-full text-[#CCCCCC]' placeholder='Search' type="text" />
                <Image className='absolute left-2 top-2 ' src={search} alt="" />
            </div>
    </header>
  )
}
