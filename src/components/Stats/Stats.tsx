import { useQuery } from "react-query";

interface CovidStats {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
  affectedCountries: number;
}
const Stats = () => {
  const fetchCovidData = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/all");
    const data: CovidStats = await response.json();
    return data;
  };

  const { data, isLoading, isError } = useQuery<CovidStats>(
    "statsData",
    fetchCovidData
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

  return (
    <div className="flex justify-center items-center gap-2 flex-wrap my-4">
      <div className="bg-white rounded-lg text-left shadow mb-4">
        <div className="bg-white p-5">
          <div className="sm:flex sm:items-start">
            <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
              <h3 className="text-sm leading-6 font-medium text-gray-400">
                Total Cases
              </h3>
              <p className="text-3xl font-bold text-black">
                {data.cases.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg text-left shadow mb-4">
        <div className="bg-white p-5">
          <div className="sm:flex sm:items-start">
            <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
              <h3 className="text-sm leading-6 font-medium text-gray-400">
                Today Cases
              </h3>
              <p className="text-3xl font-bold text-black">
                {data.todayCases.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg text-left shadow mb-4">
        <div className="bg-white p-5">
          <div className="sm:flex sm:items-start">
            <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
              <h3 className="text-sm leading-6 font-medium text-gray-400">
                Total Deaths
              </h3>
              <p className="text-3xl font-bold text-black">
                {data.deaths.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg text-left shadow mb-4">
        <div className="bg-white p-5">
          <div className="sm:flex sm:items-start">
            <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
              <h3 className="text-sm leading-6 font-medium text-gray-400">
                Today Deaths
              </h3>
              <p className="text-3xl font-bold text-black">
                {data.todayDeaths.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
