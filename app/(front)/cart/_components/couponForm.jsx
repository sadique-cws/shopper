"use client"

import { Button, Input, Typography } from "@material-tailwind/react"

export const CouponForm = () => {
    return (
        
            <form className="flex gap-2 p-3 border w-full mt-4">
                <Input type="text" placeholder="Enter Coupon Code" className="w-full flex-1"/>
                <Button type="submit" className="bg-black text-white px-3 py-2">Go</Button>
            </form>
        
    )
}