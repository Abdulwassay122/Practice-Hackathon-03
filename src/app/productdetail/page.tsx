import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Header/Navbar'
import ProductDetail from '@/components/Products/ProductDetail'
import React from 'react'

export default function page() {
  return (
    <>
      <Navbar/>
      <ProductDetail/>
      <Footer/>
    </>
  )
}