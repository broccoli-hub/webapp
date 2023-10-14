import { useState, useEffect } from 'react';

const API_URL = "https://n920cg6a1m.execute-api.us-west-2.amazonaws.com/iot/things/IndoorEnvironment-AM103-24e124725c146797";


export const fetchDataAndGenerateVariations = async () => {
    try {
      const response = await fetch(API_URL);
      const apiData = await response.json();

      const generatedData = generateDataVariations(apiData);
      return generatedData;
    } catch (error) {
      console.error("Error fetching the API:", error);
    }
  };

export const useGeneratedData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAndGenerateVariations = async () => {
      try {
        const response = await fetch(API_URL);
        const apiData = await response.json();

        const generatedData = generateDataVariations(apiData);
        setData(generatedData);
        console.log('API fetched: ', { apiData });
      } catch (error) {
        console.error("Error fetching the API:", error);
      }
    };

    fetchDataAndGenerateVariations();
  }, []);

  return data;
};

const generateDataVariations = (apiData) => {
    const MAX_TEMPERATURE_FLUCTATION = 8;
    const MAX_CO2_FLUCTATION = 20;
  const originalTemperature = apiData.entities[1].temperature.value;
  const originalCO2 = apiData.entities[1].co2.value;
  
  for (let i = 0; i < 5; i++) {
    const temperatureIncrease = Math.random() * 10; // Random value between 0 and 1
    const co2Increase = Math.random() * 10; // Random value between 0 and 2

    const newTemperature = originalTemperature + Math.min(originalTemperature + temperatureIncrease, MAX_TEMPERATURE_FLUCTATION) + i;
    const newCO2 = originalCO2 + Math.min(originalCO2 + co2Increase, MAX_CO2_FLUCTATION) + i * 2;

    const date = new Date();
    date.setHours(date.getHours() - i);
    const newEntry = {
      ...apiData.entities[1],
      id: `urn:ngsi-ld:IndoorEnvironmentObserved:IndoorEnvironment-AM103-24e124725c146797-variation${i}`,
      temperature: {
        ...apiData.entities[1].temperature,
        value: newTemperature,
      },
      co2: {
        ...apiData.entities[1].co2,
        value: newCO2,
      },
      dateObserved: {
        type: "Property",
        value: date.toISOString()
      }
    };
    apiData.entities.push(newEntry);
  }

  return apiData;
};
