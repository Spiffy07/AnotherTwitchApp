import React, { useState, useEffect } from "react";
import Error from "@/components/Error/Error";
import MyNavMenu from "@/components/MyNavMenu/MyNavMenu";

export function FetchData() {
  const [forecasts, setForecasts] = useState({ forecasts: [], loading: true });

  useEffect(() => {
    populateWeatherData();
  }, []);

  function renderForecastsTable(forecasts) {
    if (forecasts.length === 0)
      return <Error outputMessage="Unauthorized User" />;

    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  const contents = forecasts.loading ? (
    <p>
      <em>Loading...</em>
    </p>
  ) : (
    renderForecastsTable(forecasts.forecasts)
  );

  return (
    <>
      <MyNavMenu />
      <div>
        <h1 id="tableLabel">Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    </>
  );

  async function populateWeatherData() {
    const response = await fetch("/api/weatherforecast");

    if (response.status == "401") {
      setForecasts({ forecasts: [], loading: false });
      return;
    }
    const data = await response.json();
    setForecasts({ forecasts: data, loading: false });
  }
}
