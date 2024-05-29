import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();  // Get the current path from the router

  // Function to determine if the link is active
  const isActive = (pathname) => router.asPath === `#${pathname}`;

  return (
    <nav className="flex justify-center space-x-8 py-4 bg-gray-100" aria-label="Main navigation">
      {['about', 'services', 'gallery', 'testimonials', 'contact'].map((link) => (
        <motion.div 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }} 
          key={link}
          role="button"  // Make divs act like buttons for accessibility
          tabIndex="0"  // Make the navigation focusable
          onKeyPress={(event) => event.key === 'Enter' && router.push(`#${link}`)}  // Handle keypress for accessibility
        >
          <Link href={`#${link}`}>
            <span className={`text-blue-600 hover:underline cursor-pointer ${isActive(link) ? 'font-bold' : ''}`}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </span>
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}
