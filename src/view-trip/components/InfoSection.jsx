import { Button } from '@/components/ui/button'
import React from 'react'
import { IoIosSend } from "react-icons/io";

function InfoSection({ trip }) {
    return (
        <div className='p-10 md:px-20 lg:px-44 cl:px-56'>
            <img src='/placeholder.jpg' className='h-[340px] w-full object-cover rounded-xl' />

            <div className='flex justify-between items-center'>
                <div className='my-5 flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
                    <div className='flex gap-5'>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full  text-gray-500 text-xs md:text-md'>📅 {trip?.userSelection?.noOfDays} Day</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full  text-gray-500 text-xs md:text-md'>💰 {trip?.userSelection?.budget} Budget</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full  text-gray-500 text-xs md:text-md'>🥂 No. Of Traveler: {trip?.userSelection?.traveller}</h2>
                    </div>
                </div>
                <Button><IoIosSend /></Button>

            </div>
        </div>
    )
}

export default InfoSection