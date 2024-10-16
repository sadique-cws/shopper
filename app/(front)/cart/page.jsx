import DbConnect from "@/utils/dbConnect";
import Heading from "../components/heading";
import { CartList } from "./_components/cartlist";
import { CouponForm } from "./_components/couponForm";
import { auth } from "@/auth";
import User from "@/models/User";


export const metadata = {
    title: "My Cart",
    description: "View and manage your shopping cart"
}

export default async function page() {


    let user = null;
    const session = await auth();
    if (session) {
        user = await User.findOne({ email: session.user.email });
    }
    // Fetching cart data from database and rendering it in the CartList component


    return (
        <>
            <Heading color="bg-black" title="My Cart" subtitle="Manage your cart by adding some products" />
            <CartList user={user} />
        </>
    )
}