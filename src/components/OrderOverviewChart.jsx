import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export default function OrderOverviewChart() {
  const data = {
    labels: ['Day 1', 'Day 5', 'Day 10', 'Day 15', 'Day 20', 'Day 25', 'Day 30'],
    datasets: [{
      label: 'Total spent',
      data: [15000, 20000, 18000, 25765, 30000, 28000, 42000],
      borderColor: '#22C55E',
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
      tension: 0.4,
      fill: true,
      pointBackgroundColor: '#22C55E',
      pointBorderColor: '#fff',
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#22C55E',
      pointRadius: 5
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function(value) {
            return (value / 1000) + 'k';
          },
          color: 'rgba(107, 114, 128, 1)'
        },
        grid: { color: 'rgba(229, 231, 235, 1)' }
      },
      x: {
        ticks: { color: 'rgba(107, 114, 128, 1)' },
        grid: { display: false }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `$${context.parsed.y.toLocaleString()} total spent`;
          }
        }
      }
    }
  };

  return (
    <>
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">Total Order Overview</h3>
          <div className="flex items-center gap-4">
            <div className="text-sm text-text-muted-light dark:text-text-muted-dark">Last update: May 12, 2024</div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-1/4 pr-4 border-r border-border-light dark:border-border-dark flex flex-col">
            <div className="bg-primary/10 p-4 rounded-lg mb-6">
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Total Orders</p>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">128</p>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">Last order: April 20, 2022</p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Lifetime Spent</p>
                <p className="text-lg font-bold text-text-light dark:text-text-dark">$45,289.00</p>
                <p className="text-xs text-green-500">+12.0% from last month</p>
              </div>
              <div>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Average Orders</p>
                <p className="text-lg font-bold text-text-light dark:text-text-dark">$689.00</p>
                <p className="text-xs text-green-500">+12.0% from last month</p>
              </div>
            </div>
          </div>
          <div className="w-3/4 pl-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-sm">Statistics</h4>
            </div>
            <div className="relative h-64">
                <Line data={data} options={options} />
            </div>
          </div>
        </div>
    </>
  );
}