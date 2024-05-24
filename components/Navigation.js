import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex justify-center space-x-8 py-4 bg-gray-100">
      <Link href="/about" legacyBehavior>
        <a className="text-blue-600 hover:underline">About Us</a>
      </Link>
      <Link href="/services" legacyBehavior>
        <a className="text-blue-600 hover:underline">Our Services</a>
      </Link>
      <Link href="/gallery" legacyBehavior>
        <a className="text-blue-600 hover:underline">Gallery</a>
      </Link>
      <Link href="/testimonials" legacyBehavior>
        <a className="text-blue-600 hover:underline">Testimonials</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a className="text-blue-600 hover:underline">Contact Us</a>
      </Link>
    </nav>
  );
}
