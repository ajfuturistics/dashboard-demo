import "chart.js/auto";
import LineChart from "../../components/LineChart/LineChart";
import Map from "../../components/Map/Map";
import Stats from "../../components/Stats/Stats";

const Charts = () => {
  return (
    <section className="w-full">
      <Stats />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 p-1 lg:p-4">
        <LineChart />
        <Map />
      </div>
    </section>
  );
};

export default Charts;
