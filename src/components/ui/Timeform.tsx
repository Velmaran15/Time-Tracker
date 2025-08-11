// import React, { use } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface Props {
    onAdd: (activity: string, hours: number) => void;
} 

const Timeform = ( { onAdd }:Props) => {
const [activity,setactivity] =useState('')
const [hours,sethours] =useState('')

const handlesubmit = () => {
    if (!activity.trim() || !hours) {
        alert('Please fill in both fields');
        
    } else {
        console.log(`Activity: ${activity}, Hours: ${hours}`);
        onAdd(activity, Number(hours));
        setactivity('');
        sethours('');
    }
  };

  return (
    <div className=' space-y-4'>
        
        <h2 className='text-xl font-semibold'>Log Your Time</h2>
        <Input
        placeholder='Activity (e.g sleep)'
        value={activity}
        onChange={(e) => setactivity(e.target.value)}/>

         <Input
         type='number'
        placeholder='Hours (e.g 8)'
        value={hours}
        onChange={(e) => sethours(e.target.value)}/>

        <Button className='w-full' onClick={handlesubmit}>
            Add Activity
        </Button>
    </div> 
  )
}

export default Timeform