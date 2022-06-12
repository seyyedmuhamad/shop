import React from 'react'
import { ShoppingBagIcon, ChevronDownIcon } from '@heroicons/react/solid'

const Products = () => {
  return (
      <li className="products list-none">
          <a className="w-full block px-2 py-4" href="#">
              <span className="ml-2 opacity-65"><ShoppingBagIcon className="h-5 w-5 inline"></ShoppingBagIcon></span>
              <span>مدیریت محصولات</span>
              <span className='float-left'><ChevronDownIcon className="h-5 w-5 inline"></ChevronDownIcon></span>
          </a>
          <ul>
              <li className='py-2 px-2'>محصول جدید</li>
              <li className='py-2 px-2'>لیست محصولات</li>
              <li className='py-2 px-2'>دسته بندی‌ها</li>
              <li className='py-2 px-2'>پیشنهادهای ویژه</li>

          </ul>
      </li>
  )
}

export default Products
