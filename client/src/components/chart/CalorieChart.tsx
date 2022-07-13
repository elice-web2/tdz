import { Bar } from 'react-chartjs-2';

export default function CalorieChart({ data }: any) {
  const CalorieData = {
    labels: ['6/30', '7/1', '7/2', '7/3', '7/4', '7/5', '7/6'],
    datasets: [
      {
        base: 0,
        backgroundColor: 'green',
        data: data.칼로리평균,
        maxBarThickness: 10,
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: '섭취 칼로리',
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
      },
    },
  };

  return <Bar data={CalorieData} options={options} />;
}
