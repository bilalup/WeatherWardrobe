// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';

const SearchBar = ({ onSearch, isLoading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.city.value.trim();
    if (city) {
      onSearch(city);
      e.target.reset();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 max-w-2xl mx-auto mb-8"
    >
      <form onSubmit={handleSubmit} className="relative">
        <motion.div
          whileFocus={{ scale: 1.02 }}
          className="flex items-center space-x-3"
        >
          <MapPin className="w-6 h-6 text-blue-500" />
          <input
            type="text"
            name="city"
            placeholder="Enter city name..."
            disabled={isLoading}
            className="flex-1 p-4 text-lg border-none bg-white/50 rounded-2xl focus:ring-2 focus:ring-blue-300 outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading}
            className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50"
          >
            <Search className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default SearchBar;