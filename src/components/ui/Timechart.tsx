// import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    data: { activity: string; hours: number }[];
}

const Timechart = ({data}:Props) => {
    const chartData = {
        labels: data.map(item => item.activity),
        datasets: [
            {
                label: 'Hours Spent',
                data: data.map(item => item.hours),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1,
            },
        ],
    }
  return <>
    <h2 className='text-xl font-semibold mb-4'>Time Distribution</h2>
        <Pie data={chartData}/>
  </>
    
  
}

export default Timechart