import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-col items-center justify-center py-8 bg-blue-600 text-white">
        <h1 className="text-5xl font-extrabold">Welcome to Clinton Plumbing & Heating</h1>
        <p className="text-xl mt-4">Reliable plumbing services in your area</p>
      </header>

      <Navigation />

      <main className="flex flex-col items-center p-8 bg-gray-100 flex-1">
        <section className="max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-semibold mb-4">Our Services</h2>
          <p className="text-lg mb-4">
            We offer a wide range of plumbing services including pipe repairs, leak detection, installation of new fixtures, and more.
          </p>
          <Link href="/services" legacyBehavior>
            <a className="text-blue-600 hover:underline">Learn more about our services</a>
          </Link>
        </section>

        <section className="max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-semibold mb-4">Customer Testimonials</h2>
          <p className="text-lg mb-4">
            See what our customers are saying about us. We take pride in our excellent customer service and high-quality work.
          </p>
          <Link href="/testimonials" legacyBehavior>
            <a className="text-blue-600 hover:underline">Read testimonials</a>
          </Link>
        </section>

        <section className="max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-semibold mb-4">Our Work Gallery</h2>
          <p className="text-lg mb-4">
            Check out some of the work we have done for our satisfied customers.
          </p>
          <Link href="/gallery" legacyBehavior>
            <a className="text-blue-600 hover:underline">View our gallery</a>
          </Link>
        </section>

        <section className="max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">
            Have a plumbing issue? Contact us today to schedule a service or get a free estimate.
          </p>
          <Link href="/contact" legacyBehavior>
            <a className="text-blue-600 hover:underline">Get in touch</a>
          </Link>
        </section>
      </main>

      <footer className="flex flex-col items-center py-8 bg-blue-600 text-white">
        <p className="mb-2">Call us today: <a href="tel:+123456789" className="underline">+123456789</a></p>
        <p>&copy; 2024 Clinton Plumbing & Heating</p>
      </footer>
    </div>
  );
}
