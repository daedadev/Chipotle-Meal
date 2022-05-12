import React from 'react'
import type { PricedItem, Item } from '../OrderItems.types';

interface Props{
    item: Item | PricedItem
}

export default function OrderItem({item}:Props) {
  return (
    <div className='flex flex-row w-full border-solid items-center border-slate-300 border-[1px] mb-5 mt-1'>
        <img className='w-32' src={item.image}/>
        <div className='flex flex-col justify-center'>
            <h1 className='text-slate-900 font-bold text-xl'>{item.name.toUpperCase()}</h1>
            <h1 className='text-slate-500 font-semibold '>{item.calories} cal</h1>
        </div>
    </div>
  )
}
