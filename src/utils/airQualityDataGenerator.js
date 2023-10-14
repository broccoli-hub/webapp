import { useState, useEffect } from 'react';

const API_URL = "https://n920cg6a1m.execute-api.us-west-2.amazonaws.com/iot/things/IndoorEnvironment-AM103-24e124725c146797";

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
  const originalTemperature = apiData.entities[1].temperature.value;
  const originalCO2 = apiData.entities[1].co2.value;
  
  for (let i = 0; i < 5; i++) {
    const temperatureFluctuation = Math.random() * 2 - 1; // Random value between -1 and 1
    const co2Fluctuation = Math.random() * 20 - 10; // Random value between -10 and 10

    const newTemperature = originalTemperature + temperatureFluctuation;
    const newCO2 = originalCO2 + co2Fluctuation;

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
        value: new Date().toISOString()
      }
    };
    apiData.entities.push(newEntry);
  }

  return apiData;
};
