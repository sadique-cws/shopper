"use client"
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function ProductViewTop({data}) {
    return (
      <Card className="w-full flex flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={`/productImages/${data.image}`}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {data.name}
          </Typography>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {data.category}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
           {data.description}
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex text-xl font-normal bg-orange-600 text-white hover:bg-orange-800 items-center gap-2">
              Add To Cart
            </Button>
          </a>
          <a href="" className="inline-block ml-2">
          <Button variant="text" className="flex text-xl font-normal bg-teal-600 text-white hover:bg-teal-800 items-center gap-2">
             Buy Now
            </Button>
          </a>
        </CardBody>
      </Card>
    );
  }