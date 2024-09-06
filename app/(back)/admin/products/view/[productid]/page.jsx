import Product from '@/models/Product';
import DbConnect from '@/utils/dbConnect';
import {TitleForm} from './_components/TitleForm';
import { DescriptionForm } from './_components/DescriptionForm';

const page = async ({params}) => {
  const {productid} = params;
  DbConnect();
  const product = await Product.findById(productid);
  console.log(product);
  return (
    <div>
      <div className="flex flex-1">
        <h2 className="text-xl font-semi-bold">Edit Product</h2>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="flex flex-col flex-1">
            <TitleForm label="Product Title" field={product.name}/>
            <DescriptionForm label="Product Description" field={product.description}/>
        </div>
      </div>
    </div>
  )
}

export default page