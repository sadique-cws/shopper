import DbConnect from "@/utils/dbConnect";
import Heading from "../components/heading";
import { CartList } from "./_components/cartlist";
import { CouponForm } from "./_components/couponForm";
import { PriceBreak } from "./_components/priceBreak";
import Order from "@/models/Order";
import { auth } from "@/auth";
import User from "@/models/User";
 

export const metadata = {
    title: "My Cart",
    description: "View and manage your shopping cart"
}

export default async function page(){
   

    // Fetching cart data from database and rendering it in the CartList component

    
    return (
        <>
        <Heading color="bg-black" title="My Cart" subtitle="Manage your cart by adding some products"/>
        <div className="px-[5%] flex flex-1 gap-4 mt-5">
            <div className="w-9/12">
                <CartList/> 
                
            </div>
            <div className="w-3/12">
                <PriceBreak/>
                <CouponForm/>
            </div>
        </div>
        </>
    )
}