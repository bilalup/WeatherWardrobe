// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Umbrella, 
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudDrizzle
} from 'lucide-react';

const WeatherCard = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card p-8 max-w-2xl mx-auto text-center"
      >
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-20 bg-gray-200 rounded-full w-20 mx-auto mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
        </div>
      </motion.div>
    );
  }

  if (!weatherData) return null;

// eslint-disable-next-line no-unused-vars
  const { location, temperature, condition, description, icon, humidity, wind, suggestions } = weatherData;

  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'clear': return <Sun className="w-20 h-20 text-yellow-400" />;
      case 'clouds': return <Cloud className="w-20 h-20 text-gray-400" />;
      case 'rain': return <CloudRain className="w-20 h-20 text-blue-400" />;
      case 'snow': return <CloudSnow className="w-20 h-20 text-blue-200" />;
      case 'drizzle': return <CloudDrizzle className="w-20 h-20 text-blue-300" />;
      default: return <Cloud className="w-20 h-20 text-gray-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="glass-card p-8 max-w-2xl mx-auto space-y-6"
    >
      {/* Location */}
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-gray-800 text-center"
      >
        {location}
      </motion.h2>

      {/* Main Weather */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        className="text-center"
      >
        <div className="animate-float">
          {getWeatherIcon(condition)}
        </div>
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-6xl font-bold text-gray-800 mt-4"
        >
          {temperature}°C
        </motion.h3>
        <p className="text-gray-600 text-lg capitalize">{description}</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-2 gap-4"
      >
        <div className="flex items-center space-x-2 p-4 bg-white/30 rounded-xl">
          <Thermometer className="w-6 h-6 text-red-400" />
          <div>
            <p className="text-sm text-gray-600">Feels like</p>
            <p className="font-semibold">{weatherData.feels_like}°C</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 p-4 bg-white/30 rounded-xl">
          <Droplets className="w-6 h-6 text-blue-400" />
          <div>
            <p className="text-sm text-gray-600">Humidity</p>
            <p className="font-semibold">{humidity}%</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 p-4 bg-white/30 rounded-xl">
          <Wind className="w-6 h-6 text-gray-400" />
          <div>
            <p className="text-sm text-gray-600">Wind</p>
            <p className="font-semibold">{wind} m/s</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 p-4 bg-white/30 rounded-xl">
          <Umbrella className="w-6 h-6 text-cyan-400" />
          <div>
            <p className="text-sm text-gray-600">Condition</p>
            <p className="font-semibold capitalize">{condition}</p>
          </div>
        </div>
      </motion.div>

      {/* Outfit Suggestions */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-2xl"
      >
        <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Sun className="w-5 h-5 mr-2 text-amber-500" />
          Outfit Suggestions
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {suggestions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="flex items-center space-x-2 p-3 bg-white/50 rounded-lg"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-700">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WeatherCard;