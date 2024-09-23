import React from 'react'
import { ProductViewTop } from './_components/productviewtop'
import Product from '@/models/Product'
import DbConnect from '@/utils/dbConnect';
import { ProductSection } from '../components/product-section';

const page = async ({params}) => {
  const {product_slug} = params;
  DbConnect();
  const singleProduct = await Product.findOne({slug:product_slug, status:true})
  const relatedProduct = await Product.find({});
  return (
    <div className="px-[5%]">
    <div className='flex flex-1  mt-5'>
        <ProductViewTop data={singleProduct}/>
       
    </div>
      <div className="flex flex-1 flex-col mt-10">
        <h2 className="text-2xl">Related Products</h2>

        <ProductSection data={relatedProduct}/>
      </div>
    </div>
  )
}

export default page