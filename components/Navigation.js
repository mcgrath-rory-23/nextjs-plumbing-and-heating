import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <nav className="flex justify-center space-x-8 py-4 bg-gray-100">
      {['about', 'services', 'gallery', 'testimonials', 'contact'].map((link) => (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={link}>
          <Link href={`#${link}`}>
            <span className="text-blue-600 hover:underline cursor-pointer">
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </span>
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}
