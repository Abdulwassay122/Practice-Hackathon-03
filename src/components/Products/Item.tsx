import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import star from './assets/reshot-icon-star-ZH7KM9EGN8.svg'
import graystar from './assets/graystar.svg'
import graystarhalf from './assets/graystarhalf.svg'

export default function Item({type, name, rating, ratingCount, catagory, id, color, price, picture}: {id:string, ratingCount:number, rating:number, picture: string, type: string, name:string, price:number, color:string, catagory:string }) {
  function ratingSystem (Rating:number){
    if(Rating === 0){
      return <div className='flex gap-1'>
        <Image className='h-5 w-5' src={graystar} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
      </div>
    } 
    else if(Rating > 0 && Rating < 1) {
      return <div className='flex gap-1'>
        <Image className='h-5 w-5' src={graystarhalf} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
      </div>
    } 
    else if(Rating ===1){
      return <div className='flex gap-1'>
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
      </div>
    } 
    else if(Rating > 1 && Rating < 2) {
      return <div className='flex gap-1'>
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={graystarhalf} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
      </div>
    } 
    else if(Rating === 2){
      return <div className='flex gap-1'>
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
      </div>
    } 
    else if(Rating > 2 && Rating < 3) {
      return <div className='flex gap-1'>
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={graystarhalf} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
      </div>
    }     
    else if(Rating === 3){
      return <div className='flex gap-1'>
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
      </div>
    } 
    else if(Rating > 3 && Rating < 4) {
      return <div className='flex gap-1'>
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={graystarhalf} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
      </div>
    }   
    else if(Rating === 4){
      return <div className='flex gap-1'>
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={graystar} alt="" />
      </div>
    } 
    else if(Rating > 4 && Rating < 5) {
      return <div className='flex gap-1'>
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={graystarhalf} alt="" />
      </div>
    }   
    else if(Rating === 5){
      return <div className='flex gap-1'>
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={star} alt="" />
        <Image className='h-5 w-5' src={star} alt="" />
      </div>
    } 
  }
  return (
    <Link href={`/productdetail/${id}`}>
    <div className='w-[348px] hover:shadow-lg rounded-sm shadow-sm'>
      <div className='flex items-center justify-center '>
        <Image className='h-[250px] w-auto' height={200} width={200} src={picture} alt="" />
      </div>
      <div className='pl-2 pt-[9px] pb-[22px] flex flex-col gap-5'>
        <div className='flex flex-col gap-1'>
            <p className='text-[20px] leading-7 font-[500] text-[#9E3500]'>{`$ ${price}`}</p>
            <p className='text-[15px] leading-6 font-[500] text-[#111111]'>{name}</p>
            <p className='text-[15px] leading-6 text-[#757575]'>{catagory}</p>
            <p className='text-[15px] leading-6  text-[#757575]'>{color}</p>
        </div>
        <div className='flex gap-1 items-center mr-2'>
          {ratingSystem(rating)}
          <p className='text-[15px] leading-6  text-[#757575]'>{`(${ratingCount})`}</p>
        </div>
      </div>
    </div>
    </Link> 
  )
}
