"use client"
import { Button, Input, Textarea, Typography } from '@material-tailwind/react'
import { useState } from 'react';

export function DescriptionForm ({label, field}) {
    const [isEdit, setIsEdit] = useState(false);



  return (
    <form className="mt-8 mb-2 flex-1 bg-gray-200 p-5 rounded-lg">
    <div className="mb-1 flex flex-col gap-6">
      <div className="flex justify-between items-center pb-2 border-b">
      <Typography variant="h6" color="blue-gray" className="-mb-3 flex-1">
        {label}
      </Typography>
      <Button size="sm" onClick={() => setIsEdit(!isEdit)}>Edit</Button>
      </div>
     {
        isEdit ? <div className="flex flex-col justify-end">
        <Textarea
          size="lg"
          value={field}
          className="rounded-none flex-1 bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
          <Button className="rounded-none self-end">
            Go
          </Button>
        </div> : ((field) ? <p className="text-xl">{field}</p> : <p className="text-xl font-lighter italic">{label} in empty</p>)
     }
      </div>
      </form>
  )
}
