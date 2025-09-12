# 🌤️ WeatherWardrobe - Your Smart Outfit Planner

A beautiful, responsive weather application that suggests perfect outfits based on real-time weather conditions. Built with the MERN stack and featuring stunning animations.

Live demo = https://WeatherWardrobe.bilalsi.com

## ✨ Features

- **🌤️ Real-time Weather Data** - Get current weather conditions for any city worldwide
- **👔 Smart Outfit Suggestions** - Personalized clothing recommendations based on temperature and weather conditions
- **🎨 Stunning UI/UX** - Glassmorphism design with beautiful gradients and animations
- **📱 Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **⚡ Lightning Fast** - Built with React and optimized for performance
- **🎭 Smooth Animations** - Framer Motion animations throughout the application
- **🔍 Intelligent Search** - Easy city search with error handling
- **📊 Weather Details** - Comprehensive weather information including humidity, wind speed, and feels-like temperature

## 🛠️ Tech Stack

### Frontend

- **React** with Vite
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for beautiful icons
- **Axios** for API calls
- **React Hot Toast** for notifications

### Backend

- **Node.js** with Express
- **MongoDB** (ready for user features)
- **CORS** for cross-origin requests
- **OpenWeatherMap API** for weather data

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/weatherwardrobe.git
   cd weatherwardrobe

   ```

2. **Set up the backend**
   cd weatherwardrobe-backend
   npm install

3. **Configure environment variables**

   # Create .env file in backend directory

   OPENWEATHER_API_KEY=your_api_key_here
   PORT=5000

4. **Set up the frontend**
   cd ../weatherwardrobe-frontend
   npm install

5. **Start the development servers**

   # Terminal 1 - Backend

   cd weatherwardrobe-backend
   npm run dev

   # Terminal 2 - Frontend

   cd weatherwardrobe-frontend
   npm run dev

6. **Open your browser**
   Navigate to http://localhost:5173

7. **Project Structure**
   weatherwardrobe/
   ├── weatherwardrobe-backend/
   │ ├── server.js
   │ ├── package.json
   │ ├── .env
   │ └── .gitignore
   ├── weatherwardrobe-frontend/
   │ ├── src/
   │ │ ├── components/
   │ │ │ ├── WeatherCard.jsx
   │ │ │ └── SearchBar.jsx
   │ │ ├── hooks/
   │ │ │ └── useWeather.js
   │ │ ├── App.jsx
   │ │ └── main.jsx
   │ ├── index.html
   │ ├── package.json
   │ └── tailwind.config.js
   └── README.md

⭐ If you find this project helpful, please give it a star on GitHub!
