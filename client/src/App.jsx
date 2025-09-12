// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import useWeather from './hooks/useWeather';

function App() {
  const { weatherData, loading, error, fetchWeather } = useWeather();

  const handleSearch = async (city) => {
    await fetchWeather(city);
    if (error) {
      toast.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-12 px-4">
      <Toaster position="top-center" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="text-center mb-12"
        >
          <motion.h1 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4"
          >
            WeatherWardrobe
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg"
          >
            Discover the perfect outfit for any weather
          </motion.p>
        </motion.header>

        {/* Search */}
        <SearchBar onSearch={handleSearch} isLoading={loading} />

        {/* Weather Display */}
        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <WeatherCard isLoading={loading} />
            </motion.div>
          )}
          
          {weatherData && !loading && (
            <motion.div
              key="weather"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <WeatherCard weatherData={weatherData} isLoading={loading} />
            </motion.div>
          )}

          {error && !loading && (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-red-500 bg-red-50 p-6 rounded-2xl"
            >
              ⚠️ {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-16 text-gray-500"
        >
          <p className='text-2xl '>
            &copy; {new Date().getFullYear()} WeatherWardrobe. All rights reserved.
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
}

export default App;