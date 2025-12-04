'use client'
import React, { useEffect, useState } from 'react'
import Title from './Title'
import ProductCard from './ProductCard'
import { productsDummyData } from '@/assets/assets'

const BestSelling = () => {

    const [products, setProducts] = useState([]);
    const displayQuantity = 8

    useEffect(() => {
        // Sort by rating count or just random for now since we don't have real sales data
        // For dummy data, let's just reverse the list or pick some
        setProducts(productsDummyData.slice().reverse().slice(0, 10));
    }, []);

    return (
        <div className='px-6 my-30 max-w-6xl mx-auto'>
            <Title title='Best Selling' description={`Showing ${products.length < displayQuantity ? products.length : displayQuantity} of ${products.length} products`} href='/shop' />
            <div className='mt-12  grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12'>
                {products.slice(0, displayQuantity).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default BestSelling