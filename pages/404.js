import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-5xl font-extrabold mb-4">Page Not Found</h1>
      <p className="text-lg mb-4">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
      <Link href="/">
        <span className="text-blue-600 hover:underline text-lg cursor-pointer">Go back home</span>
      </Link>
      <p className="mt-4">
        If you think this was a mistake, please contact our support team or try refreshing the page.
      </p>
    </div>
  );
}
