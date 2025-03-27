import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function WeatherApp() {
    // Accessing an environment variable (optional)
    const apiUrl = process.env.WEATHER_API_KEY;
    const [data, setData] = useState(null); // Store weather data
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [cityName, setCityName] = useState("");
    const inputRef = useRef(null);

    // Handle input change and update cityName state
    function inputChangeHandler() {
        if (inputRef && inputRef.current) {
            setCityName(inputRef.current.value.trim());
        }
    }

    // Fetch weather data when cityName changes
    useEffect(() => {
        if (!cityName) return; // Do nothing if cityName is empty

        setErrorMessage(""); // Clear previous errors
        setIsLoading(true); // Set loading state

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e23a98758999ab84b6a5649613f141b4&units=metric`)
            .then((res) => {
                if (res.ok) {
                    return res.json(); // Parse JSON response
                } else {
                    throw new Error("City not found or invalid API key");
                }
            })
            .then((data) => {
                setData(data); // Update state with fetched data
                setIsLoading(false); // Stop loading
            })
            .catch((error) => {
                setErrorMessage(error.message); // Handle errors
                setIsLoading(false); // Stop loading
            });
    }, [cityName]);

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100">
            {/* Search Bar */}
            <div className="w-[600px] min-h-[200px] py-5 px-5 flex flex-col items-center justify-center bg-white rounded-md shadow-lg">
                <h1 className="text-2xl font-bold text-blue-900 mb-4">Weather App</h1>
                <div className="relative w-full max-w-md mx-auto">
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        {/* Input Field */}
                        <input
                            type="text"
                            ref={inputRef}
                            placeholder="Search for a city..."
                            className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-400 bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                        {/* Search Button */}
                        <button
                            className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-r-lg transition-colors duration-300"
                            onClick={inputChangeHandler}
                        >
                            <FaSearch />
                        </button>
                    </div>
                </div>

                {/* Loading State */}
                {isLoading && <p className="mt-4 text-blue-500">Loading...</p>}

                {/* Error Message */}
                {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}

                {/* Display Weather Data */}
                {data && (
                    <div className="mt-6 p-4 bg-blue-100 rounded-lg shadow-md w-full">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">
                            Weather in {data.name}, {data.sys.country}
                        </h2>
                        <p className="text-gray-700">
                            Temperature: {data.main.temp}°C
                        </p>
                        <p className="text-gray-700">
                            Feels Like: {data.main.feels_like}°C
                        </p>
                        <p className="text-gray-700">
                            Humidity: {data.main.humidity}%
                        </p>
                        <p className="text-gray-700">
                            Wind Speed: {data.wind.speed} m/s
                        </p>
                        <p className="text-gray-700">
                            Weather: {data.weather[0].description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}