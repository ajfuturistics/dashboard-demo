import { useQuery } from "react-query";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

interface CovidData {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
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
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

const Map = () => {
  const fetchCovidData = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/countries");
    const data: CovidData[] = await response.json();
    return data;
  };

  const { data, isLoading, isError } = useQuery<CovidData[]>(
    "covidMapData",
    fetchCovidData
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }
  if (!data) {
    return <div>No map data found</div>;
  }

  return (
    <div className="w-full mt-4">
      <h2 className="my-2 font-semibold text-2xl">COVID-19 Statistics Map</h2>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.map((country) => (
          <Marker
            key={`${country.cases}-${country.countryInfo.lat}${country.countryInfo.long}`}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Total Cases: {country.cases}</p>
                <p>Total Deaths: {country.deaths}</p>
                <p>Total Recovered: {country.recovered}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
