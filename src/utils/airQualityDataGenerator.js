const generateMockData = () => {
    const baseTemperature = 17; // Base temperature in Celsius
    const baseCO2 = 480; // Base CO2 in ppm
    const currentDate = new Date();

    const data = {
        thingName: "IndoorEnvironment-AM103-24e124725c146797",
        entities: [{
            type: "Device",
            id: "urn:ngsi-ld:Device:IndoorEnvironment-AM103-24e124725c146797",
            batteryLevel: {
                type: "Property",
                value: 87,
                unitCode: "P1"
            },
            location: {
                type: "GeoProperty",
                value: {
                    type: "Point",
                    coordinates: [
                        -34.449912,
                        -58.920659
                    ]
                }
            },
            devicestate: {
                type: "Property",
                value: "active"
            },
            serialNumber: {
                type: "Property",
                value: "24e124725c146797"
            },
            name: {
                type: "Property",
                value: "IndoorEnvironment-AM103-24e124725c146797"
            },
            category: {
                type: "Property",
                value: [
                    "sensor"
                ]
            }
        }]
    };

    for (let i = 0; i < 240; i = i + 15) {
        const hourAgo = new Date(currentDate);
        hourAgo.setMinutes(currentDate.getMinutes() - i);

        const temperatureFluctuation = Math.random() * 2 - 1; // Random value between -1 and 1
        const co2Fluctuation = Math.random() * 20 - 10; // Random value between -10 and 10

        const temperature = baseTemperature + temperatureFluctuation;
        const co2 = baseCO2 + co2Fluctuation;

        console.log({ timeSet: hourAgo.toISOString() })
        console.log({ plainTime: hourAgo })

        const entry = {
            type: "IndoorEnvironmentObserved",
            id: `urn:ngsi-ld:IndoorEnvironmentObserved:IndoorEnvironment-AM103-24e124725c146797-${i}`,
            dateObserved: {
                type: "Property",
                value: hourAgo.toISOString()
            },
            refDevice: {
                type: "Relationship",
                object: "urn:ngsi-ld:Device:IndoorEnvironment-AM103-24e124725c146797"
            },
            temperature: {
                type: "Property",
                value: temperature,
                unitCode: "CEL"
            },
            relativeHumidity: {
                type: "Property",
                value: 45, // keeping this constant for simplicity
                unitCode: "P1"
            },
            co2: {
                type: "Property",
                value: co2,
                unitCode: "59"
            },
            location: {
                type: "GeoProperty",
                value: {
                    type: "Point",
                    coordinates: [
                        -34.449912,
                        -58.920659
                    ]
                }
            }
        };
        data.entities.push(entry);
    }

    return data;
}

export { generateMockData }