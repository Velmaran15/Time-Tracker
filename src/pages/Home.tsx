import { useState } from 'react'
import Timeform from '../components/ui/Timeform'
// import { Input } from '@/components/ui/input'
import Timechart from '../components/ui/Timechart'

const Home = () => { 
 
    const [data,setdata]=useState<{activity:string ; hours:number}[]>([]);

    const handleadd = (activity: string, hours: number) => {

        setdata((prev) => [...prev, { activity, hours }]);
    };

  return (
    <div className='max-w-md mx-auto p-6 mt-10 bg-white shadow-md rounded space-y-4'>
        <h1 className='text-3xl font-bold'>Time Tracker</h1>
        <Timeform onAdd={handleadd}/>
        <Timechart data={data}/>
    </div>
  )
}

export default Home