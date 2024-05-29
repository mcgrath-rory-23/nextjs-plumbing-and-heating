import Navigation from '../components/Navigation';
import { Carousel } from 'react-responsive-carousel'; // Make sure to install this package

export default function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex flex-col items-center p-8 bg-gray-100 flex-1">
        <section className="max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-5xl font-extrabold mb-4">Customer Testimonials</h1>
          <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
            <div className="my-4">
              <p className="text-lg">
                &quot;Excellent service! The plumber was on time, friendly, and fixed the leak quickly. Highly recommend!&quot; - Jane D.
              </p>
            </div>
            {/* Repeat for other testimonials */}
          </Carousel>
        </section>
      </main>
    </div>
  );
}
