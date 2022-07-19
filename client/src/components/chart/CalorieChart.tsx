import { Bar } from 'react-chartjs-2';
import { ChartInfo } from '../../customType/chart.type';

function CalorieChart({ data, labels }: ChartInfo) {
  const rounded = data.kcalAvg.map((val) => Math.round(val));
  const CalorieData = {
    labels,
    datasets: [
      {
        base: 0,
        backgroundColor: 'green',
        data: rounded,
        maxBarThickness: 10,
        min: 0,
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: '섭취 칼로리 평균',
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          label: (context: any) => {
            let label = context.formattedValue + '' || '';
            if (label) {
              label += ' kcal';
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
        beginAtZero: true,
        max: Math.max(...data.kcalAvg) + 100,
      },
    },
  };

  return <Bar data={CalorieData} options={options} />;
}

export default CalorieChart;
