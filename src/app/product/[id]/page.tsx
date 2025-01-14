import React from 'react'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Header/Navbar'
import Products from '@/components/Products/ProductCategory'

interface PageProps {
    params: Params;
  }
  
  interface Params {
    id: string;
  }

export default function page({ params: { id } }: PageProps) {
  return (
    <div>
      <>
        <Navbar/>
        <Products category={id}/>
        <Footer/>
      </>
    </div>
  )
}
