import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-col items-center justify-center py-8 bg-blue-600 text-white">
        <h1 className="text-5xl font-extrabold">Welcome to Clinton Plumbing & Heating</h1>
        <p className="text-xl mt-4">Reliable plumbing services by a dedicated professional</p>
      </header>

      <Navigation />

      <main className="flex flex-col items-center p-8 bg-gray-100 flex-1">
        <section id="services" className="max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-semibold mb-4">My Services</h2>
          <p className="text-lg mb-4">
            I offer a wide range of plumbing services including pipe repairs, leak detection, installation of new fixtures, and more.
          </p>
        </section>

        <section id="testimonials" className="max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-semibold mb-4">Customer Testimonials</h2>
          <p className="text-lg mb-4">
            See what my customers are saying about my services. I take pride in providing excellent customer service and high-quality work.
          </p>
        </section>

        <section id="gallery" className="max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-semibold mb-4">My Work Gallery</h2>
          <p className="text-lg mb-4">
            Check out some of the work I have done for my satisfied customers.
          </p>
        </section>

        <section id="contact" className="max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-semibold mb-4">Contact Me</h2>
          <p className="text-lg mb-4">
            Have a plumbing issue? Contact me today to schedule a service or get a free estimate.
          </p>
        </section>
      </main>

      <footer className="flex flex-col items-center py-8 bg-blue-600 text-white">
        <p className="mb-2">Call me today: <a href="tel:+123456789" className="underline">+123456789</a></p>
        <p>&copy; 2024 Clinton Plumbing & Heating</p>
      </footer>
    </div>
  );
}
