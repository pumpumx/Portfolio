import { motion } from 'framer-motion';
import HeatMap from '@uiw/react-heat-map';

// Generate fake high-activity data over 365 days
const generateFullYearHeatmap = () => {
  const start = new Date('2024-01-01');
  const data = [];
  for (let i = 0; i < 365; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    data.push({
      date: date.toISOString().split('T')[0], // Format: 'YYYY-MM-DD'
      count: Math.floor(Math.random() * 12) + 1 // 1 to 12 commits
    });
  }
  return data;
};

const value = generateFullYearHeatmap();

const Demo = () => {
  return (
    <motion.div
      className="w-full h-full flex justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <HeatMap
        value={value}
        weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
        startDate={new Date('2024-01-01')}
        panelColors={{
          0: '#e8f5e9',    // light green
          2: '#a5d6a7',
          4: '#66bb6a',
          6: '#43a047',
          8: '#2e7d32',
          10: '#1b5e20',   // darkest green
        }}
        rectProps={{
          rx: 4,
          ry: 4,
        }}
        style={{
          width: '100%',
          maxWidth: '60%',
          height: '100%',
          maxHeight: ' 100%'
        }}
      />
    </motion.div>
  );
};

export default Demo;
