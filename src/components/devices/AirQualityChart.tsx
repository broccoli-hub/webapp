import React, { useMemo } from 'react';
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
  const chartData = useMemo(() => {
    const labels = data.map(entry => new Date(entry.dateObserved.value).getTime());
    const co2Data = data.map(entry => entry.co2.value);

    return {
      labels,
      datasets: [
        {
          label: 'CO2 (ppm)',
          data: co2Data,
          borderColor: 'red',
          fill: false,
        }
      ]
    };
  }, [data]);

  const gradientFill = (ctx: any) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
    gradient.addColorStop(1, 'rgba(0, 255, 0, 0.6)');
    return gradient;
  };

  const options: ChartOptions<"line"> = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'hour',
          displayFormats: {
            hour: 'HH'
          }
        },
        grid: {
          display: false,
        },
        ticks: {
          color: 'white',
          stepSize: 1
        },
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: 'white',
          callback: function (value, _index, _values) {
            return value + ' ppm';
          }
        },
        title: {
          display: true,
          text: 'CO2 (ppm)',
          color: 'white'
        }
      }
    },
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: 'white',
        bodyColor: 'white',
      }
    },
    elements: {
      line: {
        tension: 0.4,
        borderColor: 'white',
        borderWidth: 2,
        fill: true,
        backgroundColor: function (context) {
          const ctx = context.chart.ctx;
          return gradientFill(ctx);
        },
      },
      point: {
        backgroundColor: 'white',
        hoverBackgroundColor: 'white',
        borderColor: 'white',
        hoverBorderColor: 'white',
        borderWidth: 2,
        hoverRadius: 7,
        radius: 5
      }
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return <Line data={chartData} options={options} />;
};

export default AirQualityChart;
