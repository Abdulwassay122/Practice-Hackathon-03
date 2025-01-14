import React from 'react'
import Image from "next/image";
import filter from './assets/Frame (8).svg'
import sort from './assets/Frame (9).svg'
import arrowup from './assets/Frame (10).svg'
import Item from './Item'
// import pic  from './assets/Rectangle.svg'
// import pic2  from './assets/Rectangle (1).svg'
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

export default async function Products({category}:{category:string}) {

    function CategoryFinder(param:string){
        if(param==="electronics"){return 'electronics'}else if(param==="jewelery"){return 'jewelery'}else if(param==="men"){return "men's clothing"}else if(param==='women'){return "women's clothing"}
    }

      const data = await client.fetch(
        `*[_type == "product" && "${CategoryFinder(category)}" in tags]{
          _id,
          name,
          price,
          discountPercentage,
          tags,
          rating,
          ratingCount,
          description,
          "imageUrl": image.asset->url
        }`
    );

    // console.log("this is id",)

  return (
    <section className='pt-[76px] 1400:px-12 sm:px-8 px-5 flex flex-col gap-4'>
        {/* header */}
        <div className='flex justify-between items-center'>
            <p className='text-[24px] leading-8 font-[500]'>New (500)</p>
            <div className='flex gap-6'>
                <div className='flex gap-2'>
                    <p className='text-[16px] leading-7 text-center'>Hide Filters</p>
                    <Image src={filter} alt="" />
                </div>
                <div className='flex gap-2'>
                    <p className='text-[16px] leading-7 text-center'>Sort By</p>
                    <Image src={sort} alt="" />
                </div>
            </div>
        </div>
        <div className='flex'>
        {/* sidebar */}
        <div className='w-[260px] h-full  flex-col gap-10 pr-5 lg:flex hidden'>
            <div className='w-[192px] h-[400.72px] flex flex-col gap-[14.59px] overflow-y-auto'>
                <p className='text-[15px] leading-[21.6px] font-[500]'>Shoes</p>
                <p className='text-[15px] leading-[21.6px] font-[500]'>Sports Bras</p>
                <p className='text-[15px] leading-[21.6px] font-[500]'>Tops & T-Shirts</p>
                <p className='text-[15px] leading-[21.6px] font-[500]'>Hoodies & Sweatshirts</p>
                <p className='text-[15px] leading-[21.6px] font-[500]'>Jackets</p>
                <p className='text-[15px] leading-[21.6px] font-[500]'>Trousers & Tights</p>
                <p className='text-[15px] leading-[21.6px] font-[500]'>Shorts</p>
                <p className='text-[15px] leading-[21.6px] font-[500]'>Tracksuits</p>
                <p className='text-[15px] leading-[21.6px] font-[500]'>Jumpsuits & Rompers</p>
                <p className='text-[15px] leading-[21.6px] font-[500]'>Skirts & Dresses</p>
                <p className='text-[15px] leading-[21.6px] font-[500]'>Socks</p>
                <p className='text-[15px] w-[150px] leading-[21.6px] font-[500]'>Accessories & Equipment</p>
            </div>
            <div className='w-[192px]'>
                {/* gender */}
                <div className='border-t-[1px] border-solid'>
                    <div className='h-12 flex justify-between items-center'>
                        <p className='text-[16px] leading-6 font-[500]'>Gender</p>
                        <Image src={arrowup} alt="" />
                    </div>
                    <div className='pb-6 pt-1 pr-[5.68px] pl-[2px]'>
                        <div className='flex gap-[6px] items-center'>
                            <input className='h-5 w-5' type="checkbox" /><label className='text-[15px] leading-6' htmlFor="input">Men</label>    
                        </div>
                        <div className='flex gap-[6px] items-center'>
                            <input className='h-5 w-5' type="checkbox" /><label className='text-[15px] leading-6' htmlFor="input">Women</label>    
                        </div>
                        <div className='flex gap-[6px] items-center'>
                            <input className='h-5 w-5' type="checkbox" /><label className='text-[15px] leading-6' htmlFor="input">Unisex</label>    
                        </div>
                    </div>  
                </div>
                {/* kids     */}
                <div className='border-t-[1px] border-solid'>
                    <div className='h-12 flex justify-between items-center'>
                        <p className='text-[16px] leading-6 font-[500]'>Kids</p>
                        <Image src={arrowup} alt="" />
                    </div>
                    <div className='pb-6 pt-1 pr-[5.68px] pl-[2px]'>
                        <div className='flex gap-[6px] items-center'>
                            <input className='h-5 w-5' type="checkbox" /><label className='text-[15px] leading-6' htmlFor="input">Boys</label>    
                        </div>
                        <div className='flex gap-[6px] items-center'>
                            <input className='h-5 w-5' type="checkbox" /><label className='text-[15px] leading-6' htmlFor="input">Girls</label>    
                        </div>
                    </div>  
                </div>
                {/* shop by price  */}
                <div className='border-t-[1px] border-solid'>
                    <div className='h-12 flex justify-between items-center'>
                        <p className='text-[16px] leading-6 font-[500]'>Shop By Price</p>
                        <Image src={arrowup} alt="" />
                    </div>
                    <div className='pb-6 pt-1 pr-[5.68px] pl-[2px]'>
                        <div className='flex gap-[6px] items-center'>
                            <input className='h-5 w-5' type="checkbox" /><label className='text-[15px] leading-6' htmlFor="input">Under ₹ 2 500.00</label>    
                        </div>
                        <div className='flex gap-[6px] items-center'>
                            <input className='h-5 w-5' type="checkbox" /><label className='text-[15px] leading-6' htmlFor="input">₹ 2 501.00 - ₹ 7 500.00</label>    
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        {/* Products */}
        <div className='grid 1400:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pb-[140px] border-b-[1px] border-solid'>
            {/* Product 01 */}
        {data.map((item:Product)=>(
            <Item key={item._id} id={item._id} rating={item.rating} ratingCount={item.ratingCount} name={item.name} catagory={item.tags} color={`1 Color`} price={item.price} picture={item.imageUrl}/>
        ))}
        </div>

        </div>
        <div className='py-16 flex flex-col gap-6 xl:pl-[300px] lg:pl-[150px] md:pl-[50px] pl-8'>
            <h2 className='text-[19px] leading-6 font-[500]'>Related Categories</h2>
            <div className='flex gap-2 flex-wrap    '>
                <p className='w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]'>Best Selling Products</p>
                <p className='w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]'>Best Shoes</p>
                <p className='w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]'>New Basketball Shoes</p>
                <p className='w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]'>New Football Shoes</p>
                <p className='w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]'>New Men&apos;s Shoes</p>
                <p className='w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]'>New Running Shoes</p>
                <p className='w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]'>Best Men&apos;s Shoes</p>
                <p className='w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]'>New Jordan Shoes</p>
                <p className='w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]'>Best Women&apos;s Shoes</p>
                <p className='w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]'>Best Training & Gym</p>
            </div>
        </div>
    </section>
  )
}
