import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-secondary">404</h1>
        <p className="mb-6 text-xl text-gray-600">Oops! Page not found</p>
        <Link
          href="/"
          className="text-primary underline transition-colors hover:text-orange-600"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
