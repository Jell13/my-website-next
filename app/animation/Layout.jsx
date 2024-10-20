// Layout.tsx
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <motion.main
        initial={{ opacity: 0, backgroundColor: 'black' }}
        animate={{ opacity: 1, backgroundColor: 'white' }}
        exit={{ opacity: 0, backgroundColor: 'black' }}
        transition={{ type: 'linear' }}
        className='h-full'
    >
      {children}
    </motion.main>
  );
};

export default Layout;