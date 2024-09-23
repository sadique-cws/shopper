import Product from "@/models/Product";
import { ProductCard } from "./product-card";

export async function ProductSection({searchTerm}){

    
    let query = (searchTerm ? {status:true, category: searchTerm} : {status:true})
    let products = await Product.find(query);
 
    return (
        <div  className="grid gap-5  grid-cols-2 md:grid-cols-4">
           {(products.length > 0) ? 
           
            products.map((product, index) => (<ProductCard data={product} key={index}/>)) : 

            <h2>No Product found </h2>
        }
        </div>
    )
}