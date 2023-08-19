import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Rechart = () => {
    const students = [
        {
          id: 1,
          name: 'Student 1',
          physics: 85,
          chemistry: 92,
          mathematics: 78,
        },
        {
          id: 2,
          name: 'Student 2',
          physics: 75,
          chemistry: 88,
          mathematics: 92,
        },
        {
          id: 3,
          name: 'Student 3',
          physics: 90,
          chemistry: 82,
          mathematics: 95,
        },
        {
          id: 4,
          name: 'Student 4',
          physics: 78,
          chemistry: 76,
          mathematics: 89,
        },
        {
          id: 5,
          name: 'Student 5',
          physics: 88,
          chemistry: 90,
          mathematics: 84,
        },
        {
          id: 6,
          name: 'Student 6',
          physics: 92,
          chemistry: 85,
          mathematics: 91,
        },
        {
          id: 7,
          name: 'Student 7',
          physics: 77,
          chemistry: 81,
          mathematics: 93,
        },
        {
          id: 8,
          name: 'Student 8',
          physics: 81,
          chemistry: 89,
          mathematics: 87,
        },
        {
          id: 9,
          name: 'Student 9',
          physics: 86,
          chemistry: 94,
          mathematics: 79,
        },
        {
          id: 10,
          name: 'Student 10',
          physics: 72,
          chemistry: 83,
          mathematics: 88,
        },
        {
          id: 11,
          name: 'Student 11',
          physics: 93,
          chemistry: 77,
          mathematics: 85,
        },
        {
          id: 12,
          name: 'Student 12',
          physics: 80,
          chemistry: 91,
          mathematics: 76,
        },
      ];
      
     
      
    return (
        <div>
            <LineChart
         
            width={1000}
            height={500}
            data={students}
            
            >
                <CartesianGrid strokeDasharray="3 3" />
           <Line dataKey="physics"></Line>
           <Line stroke="#8884d8" dataKey="mathematics"></Line>
           <Line dataKey="chemistry"></Line>
           <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

            </LineChart>
        </div>
    );
};

export default Rechart;