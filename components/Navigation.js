import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <nav className="flex justify-center space-x-8 py-4 bg-blue-700 text-white shadow-md">
      {['about', 'services', 'gallery', 'testimonials', 'contact'].map((link) => (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={link}>
          <Link href={`/${link}`} legacyBehavior>
            <a className="text-xl">{link.charAt(0).toUpperCase() + link.slice(1)}</a>
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}
