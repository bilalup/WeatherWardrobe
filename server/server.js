import express from 'express';
import axios from 'axios'; // <-- MISSING IMPORT ADDED
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Hello World!')
})

app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Your API is running',
        timestamp: new Date().toISOString()
    });
});

// Weather Endpoint
app.get('/api/weather/:city', async (req, res) => { // Changed to /api/weather for consistency
    try {
        const city = req.params.city;

        if (!city) {
            return res.status(400).json({
                success: false,
                error: 'City parameter is required'
            });
        }

        console.log(`Weather request for city: ${city}`);

        const API_KEY = process.env.OPENWEATHER_API_KEY;

        // FIXED: Simplified the API key check
        if (!API_KEY) {
            return res.status(500).json({
                success: false,
                error: 'Server configuration error: API key not configured. Please check your .env file.'
            });
        }

        // Make request to OpenWeatherMap
        const response = await axios.get(
            'https://api.openweathermap.org/data/2.5/weather',
            {
                params: {
                    q: city,
                    units: 'metric',
                    appid: API_KEY
                }
            }
        );

        // Extract relevant data from response
        const weatherData = response.data;

        const result = {
            location: weatherData.name,
            country: weatherData.sys.country,
            temperature: Math.round(weatherData.main.temp),
            feels_like: Math.round(weatherData.main.feels_like),
            condition: weatherData.weather[0].main,
            description: weatherData.weather[0].description,
            icon: weatherData.weather[0].icon,
            humidity: weatherData.main.humidity,
            wind: weatherData.wind.speed,
            suggestions: generateOutfitSuggestions(weatherData)
        };

        // Send response
        res.json({
            success: true,
            data: result
        });

    } catch (error) {
        console.error('API Error:', error.message);

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            res.status(error.response.status).json({
                success: false,
                error: error.response.data.message || 'Failed to fetch weather data'
            });
        } else if (error.request) {
            // The request was made but no response was received
            res.status(503).json({
                success: false,
                error: 'Weather service unavailable. Please check your internet connection.'
            });
        } else {
            // Something happened in setting up the request that triggered an Error
            res.status(500).json({
                success: false,
                error: 'Internal server error: ' + error.message
            });
        }
    }
});

// Function to generate outfit suggestions
function generateOutfitSuggestions(weatherData) {
    const temp = weatherData.main.temp;
    const condition = weatherData.weather[0].main;
    const suggestions = [];

    // Temperature-based suggestions
    if (temp < 0) {
        suggestions.push('Heavy winter coat', 'Thermal underwear', 'Warm gloves', 'Winter hat', 'Insulated boots');
    } else if (temp < 10) {
        suggestions.push('Warm jacket', 'Sweater', 'Long pants', 'Warm shoes');
    } else if (temp < 20) {
        suggestions.push('Light jacket', 'Long-sleeve shirt', 'Jeans');
    } else {
        suggestions.push('T-shirt', 'Shorts', 'Sun hat', 'Sunglasses');
    }

    // Condition-based suggestions
    if (condition === 'Rain') {
        suggestions.push('Umbrella', 'Waterproof jacket', 'Waterproof shoes');
    } else if (condition === 'Snow') {
        suggestions.push('Winter boots', 'Scarf', 'Waterproof gloves');
    } else if (condition === 'Clear') {
        suggestions.push('Sunscreen');
    }

    // Remove duplicates
    return [...new Set(suggestions)];
}

const port = process.env.PORT || 5000; // Added default port

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})