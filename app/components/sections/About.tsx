import Image from "next/image";

import { CTA } from "@/content/site";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="welcome-heading"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-[3rem] bg-gray-900">
            <Image
              src="https://images.unsplash.com/photo-1562059390-a761a084768e?w=800&h=800&fit=crop"
              alt="Delicious noodles"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 420px, 320px"
            />
          </div>
        </div>

        <div className="order-1 space-y-8 lg:order-2">
          <div className="space-y-4">
            <h2
              id="welcome-heading"
              className="text-3xl font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl"
            >
              Welcome to Our Restaurant
            </h2>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
            <p className="text-gray-600">
              Ullamcorper viverra ipsum nunc aliquet bibendum enim facilisis
              gravida neque velit euismod in pellentesque.
            </p>
          </div>

          <div className="flex gap-3 sm:gap-4">
            <button className="flex-1 rounded-lg bg-secondary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-secondary/90 sm:flex-none sm:px-8 sm:py-3.5 sm:text-base">
              {CTA.secondary}
            </button>
            <a
              href="#contact"
              className="flex-1 rounded-lg bg-primary px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-orange-600 sm:flex-none sm:px-8 sm:py-3.5 sm:text-base"
            >
              {CTA.primary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
