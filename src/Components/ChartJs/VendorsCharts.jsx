import React from 'react';
import { Bar,Pie } from 'react-chartjs-2';
import {Chart} from "chart.js/auto"
import 'chartjs-plugin-datalabels';

// Weekly Order for Vendors
const  WeeklyOrdersChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Daily Orders',
        data: [20, 35, 50, 45, 60, 55, 30],
        backgroundColor: 'hsla(0, 63%, 89%, 0.6)',
        borderColor: 'black',
        borderWidth: 1,
        barThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Orders',
        },
        ticks: {
            stepSize: 10, // Adjust the step size to control the height of the bars
          },
      },
      x: {
        title: {
          display: true,
          text: 'Day of the Week',
        },
        grid: {
            drawTicks: false, // Remove horizontal grid lines to make bars taller
          },
      },
    },
  };
    return(
    <div className=''>
      {Chart}
      <Bar data={data} options={options} />
     </div>
    )
};
export default WeeklyOrdersChart;



// Monthly Orders for Vendors
export const MonthlyOrdersChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Orders',
        data: [150, 200, 180, 250, 300, 280, 320, 270, 290, 220, 240, 190],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Orders',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};


export const DailyChart = () => {
  // Sample data for the chart
  const data = {
    labels: ['Morn', 'After', 'Even'], // Labels for the pie chart sectors (time periods)
    datasets: [
      {
        label: 'Total Orders',
        data: [20, 30, 15], // Values representing the total orders for each time period
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ], // Colors for each sector
        borderColor: 'white', // Border color for each sector
        borderWidth: 1, // Border width for each sector
      },
    ],
  };

   // Chart options
   const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'start',
        formatter: (value) => value, // Display the value directly on the chart
        color: '#fff', // Color of the labels
        font: {
          weight: 'bold', // Font weight of the labels
        },
      },
    },
  };
  
  return <Pie data={data} options={options} />;
};