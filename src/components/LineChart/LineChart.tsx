import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";

interface ApiData {
  cases: {
    [key: string]: number;
  };
}
const LineChart = () => {
  const fetchChartData = async () => {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    const data: ApiData = await response.json();
    return data;
  };

  const { data, isLoading, isError } = useQuery<ApiData>(
    "chartData",
    fetchChartData
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }
  if (!data) {
    return <div>No data found</div>;
  }

  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: "Cases",
        data: Object.values(data.cases),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full lg:w-[90%] h-[500px] p-3 mb-10">
      <h2 className="my-2 font-semibold text-2xl">Cases Chart</h2>
      <Line data={chartData} options={chartOptions} />;
    </div>
  );
};

export default LineChart;
