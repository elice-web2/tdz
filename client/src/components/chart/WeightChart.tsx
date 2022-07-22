// dependencies
import { Line } from 'react-chartjs-2';
// types
import { ChartInfo } from 'customType/chart.type';

export default function WeightChart({ data, labels }: ChartInfo) {
  const weightData = {
    labels,
    datasets: [
      {
        base: 0,
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        data: data.weight,
        tension: 0.1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: '체중 평균',
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          label: (context: any) => {
            let label = context.formattedValue + '' || '';

            if (label) {
              label += ' kg';
            }

            return label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: Math.max(...data.weight) + 10,
      },
    },
  };

  return <Line data={weightData} options={options} />;
}
