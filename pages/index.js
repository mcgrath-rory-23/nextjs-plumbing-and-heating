import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div>
      <header className="flex flex-col items-center justify-center py-8 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Welcome to Clinton Plumbing & Heating</h1>
        <p className="text-lg mt-2">Reliable plumbing services in your area</p>
      </header>

      <Navigation />

      <main className="flex flex-col items-center p-8">
        <section className="max-w-4xl mb-8">
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <p className="text-lg mb-4">
            I offer a wide range of plumbing services including pipe repairs, leak detection, installation of new fixtures, and more.
          </p>
          <Link href="/services" legacyBehavior>
            <a className="text-blue-600 hover:underline">Learn more about my services</a>
          </Link>
        </section>

        <section className="max-w-4xl mb-8">
          <h2 className="text-3xl font-bold mb-4">Customer Testimonials</h2>
          <p className="text-lg mb-4">
            See what my customers are saying about me. I take pride in my excellent customer service and high-quality work.
          </p>
          <Link href="/testimonials" legacyBehavior>
            <a className="text-blue-600 hover:underline">Read testimonials</a>
          </Link>
        </section>

        <section className="max-w-4xl mb-8">
          <h2 className="text-3xl font-bold mb-4">My Work Gallery</h2>
          <p className="text-lg mb-4">
            Check out some of the work I have done for my satisfied customers.
          </p>
          <Link href="/gallery" legacyBehavior>
            <a className="text-blue-600 hover:underline">View my gallery</a>
          </Link>
        </section>

        <section className="max-w-4xl mb-8">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg mb-4">
            Have a plumbing issue? Contact me today to schedule a service or get a free estimate.
          </p>
          <Link href="/contact" legacyBehavior>
            <a className="text-blue-600 hover:underline">Get in touch</a>
          </Link>
        </section>
      </main>

      <footer className="flex flex-col items-center py-8 bg-blue-600 text-white">
        <p className="mb-2">Call me today: <a href="tel:+123456789" className="underline">+123456789</a></p>
        <p>&copy; 2024 Clinton Plumbing & Heating</p>
      </footer>
    </div>
  );
}
