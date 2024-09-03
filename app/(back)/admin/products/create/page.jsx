import React from 'react'
import { ProductForm } from '../_components/productform'
import DbConnect from '@/utils/dbConnect';
import slugify from 'slugify';
import { redirect } from 'next/navigation';
import Product from '@/models/Product';

const page = () => {

    const handleProductCreate = async (name) => {
        "use server";
        DbConnect();

        let data = Product.create({name, slug: slugify(name)});

        redirect('/admin/products');
    }
  return (
    <div className='flex flex-1 justify-center'>
        <ProductForm handleProductCreate={handleProductCreate}/>
    </div>
  )
}

export default page