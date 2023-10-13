import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import {
    Chart,
    LineElement,
    LinearScale,
    PointElement,
    LineController,
    TimeScale,
    Title,
    Tooltip
  } from 'chart.js';
  
  Chart.register(
    LineElement,
    LinearScale,
    PointElement,
    LineController,
    TimeScale,
    Title,
    Tooltip
  );

import 'chartjs-adapter-date-fns';

interface DataEntry {
    dateObserved: {
      value: string;
    };
    co2: {
      value: number;
    };
  }
  
  interface AirQualityChartData {
    data: DataEntry[];
  }

const AirQualityChart: React.FC<AirQualityChartData> = ({ data }) => {
    const labels = data.map(entry => new Date(entry.dateObserved.value).getTime());
    const co2Data = data.map(entry => entry.co2.value);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'CO2 (ppm)',
                data: co2Data,
                fill: false,
                borderColor: '#0AE194',  // Line color
                backgroundColor: 'rgba(10, 225, 148, 0.2)',  // Area color (a slightly transparent version of Verde)
                pointBackgroundColor: '#FAFAFA',  // Blanco for the data points
                pointBorderColor: '#0AE194',  // Verde border for the data points
            }
        ]
    };

    const options: ChartOptions<"line"> = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'minute'
                },
                ticks: {
                    color: '#FAFAFA',  // Blanco color for the ticks
                },
                grid: {
                    color: 'rgba(250, 250, 250, 0.1)'  // Slightly transparent Blanco for the grid lines
                }
            },
            y: {
                ticks: {
                    color: '#FAFAFA',
                    callback: function(value, index, values) {
                        return value + ' ppm';
                    }
                },
                title: {
                    color: '#FAFAFA'
                },
                grid: {
                    color: 'rgba(250, 250, 250, 0.1)'
                }
            }
        },
        borderColor: '#0AE194',  // Line color
        backgroundColor: 'rgba(10, 225, 148, 0.2)',  // Area color (a slightly transparent version of Verde)
        // pointBackgroundColor: '#FAFAFA',  // Blanco for the data points
        // pointBorderColor: '#0AE194',  // Verde border for the data points
        plugins: {
            legend: {
              display: false,  // Hide legend
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)', 
              titleColor: 'white',
              bodyColor: 'white',
            }
          },
    };

    return <Line data={chartData} options={options} />;
};

export default AirQualityChart;
