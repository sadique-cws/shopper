import Product from '@/models/Product';
import DbConnect from '@/utils/dbConnect';
import {TitleForm} from './_components/TitleForm';
import { DescriptionForm } from './_components/DescriptionForm';
import { PriceForm } from './_components/PriceForm';
import { DiscountPriceForm } from './_components/DiscountPrice';
import { CategoryForm } from './_components/CategoryForm';
import Category from '@/models/Category';
import { StockForm } from './_components/StockForm';
import { BarCodeForm } from './_components/BarCodeForm';
import { BrandForm } from './_components/BrandForm';
import { ImageUploadForm } from './_components/ImageUploadForm';
import PublishButton from './_components/publish-button';

const page = async ({params}) => {
  const {productid} = params;
  DbConnect();
  const category = await Category.find({});
  const product = await Product.findById(productid).populate('category');

  const total_fields = ["name","description","price","discount_price","stock","brand","barcode","category","image"];
  const filledFields = total_fields.filter((field) => product[field]).length;
  const remainingFields = total_fields.filter((field) =>!product[field]);
  return (
    <div className="w-full">
      <div className="flex flex-1 flex-col">  
        <div className="flex flex-1 justify-between">
        <h2 className="text-xl font-semi-bold">Edit Product</h2>
        <PublishButton productid={productid} className={remainingFields.length ?  "cursor-not-allowed" : "cursor-pointer"} isDisabled={remainingFields.length}/>
        </div>
       <div className="flex flex-1 gap-2">
       <p>Total fields: {total_fields.length}</p>
       <p>Filled fields: {filledFields}</p>
       </div>
      </div>
      <div className="grid grid-cols-2 gap-5 w-full">
        <div className="flex flex-col flex-1">
            <TitleForm 
            label="Product Title" 
            field={product.name} 
            productid={productid}/>

            <DescriptionForm 
            label="Product Description" 
            productid={productid} 
            field={product.description}/>

            <PriceForm label="Product Price" productid={productid} field={product.price}/>
            <DiscountPriceForm label="Discount Price" productid={productid} field={product.discount_price}/>
            <CategoryForm data={category} label="Product Category" productid={productid} field={product.category?.cat_title} cat_id={product.category?._id}/>
            
        </div>
        <div className="flex flex-1 flex-col gap-4">
        
        <StockForm 
            label="Product Stock" 
            field={product.stock} 
            productid={productid}/>
            
            <BarCodeForm
            label="Product BARCODE" 
            field={product.barcode} 
            productid={productid}/>
            
            <BrandForm 
            label="Product Brand" 
            field={product.brand} 
            productid={productid}/>
            
           

            <ImageUploadForm
            label="Product Image" 
            field={product.image}
            productid={productid}/>
           
        </div>
      </div>
    </div>
  )
}

export default page