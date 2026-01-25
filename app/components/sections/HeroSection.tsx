import Image from "next/image";

import { CTA, SOCIALS } from "@/content/site";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      <div className="absolute right-0 top-0 h-64 w-64 opacity-5" aria-hidden>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FF6B35"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.1,76.4C26.4,83.8,10,86,-6.5,85.1C-23,84.2,-46,80.2,-62.3,70.1C-78.6,60,-88.2,43.8,-91.9,26.4C-95.6,9,-93.4,-9.6,-86.8,-25.8C-80.2,-42,-69.2,-55.8,-56.1,-63.4C-43,-71,-28.8,-72.4,-14.1,-73.9C0.6,-75.4,1.2,-77,15.3,-75.8C29.4,-74.6,30.6,-83.6,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 h-64 w-64 opacity-5" aria-hidden>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#1F2937"
            d="M39.5,-65.6C52.3,-58.2,64.5,-50.2,71.8,-38.8C79.1,-27.4,81.5,-13.7,80.9,-0.3C80.3,13.1,76.7,26.2,69.4,37.8C62.1,49.4,51.1,59.5,38.2,66.8C25.3,74.1,10.5,78.6,-3.9,77.3C-18.3,76,-36.6,68.9,-49.9,58.4C-63.2,47.9,-71.5,33.9,-75.4,18.8C-79.3,3.7,-78.8,-12.5,-73.9,-27.2C-69,-41.9,-59.7,-55.1,-47.5,-62.8C-35.3,-70.5,-19.6,-72.7,-4.7,-72.4C10.2,-72.1,26.7,-73.0,39.5,-65.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1
              id="hero-heading"
              className="text-4xl font-bold leading-tight text-secondary sm:text-5xl lg:text-6xl"
            >
              We provide the best <span className="text-primary">food</span> for
              you
            </h1>
            <p className="max-w-lg text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
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

          <div className="flex gap-4 pt-4" aria-label="Social links">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 text-gray-600 transition-colors hover:border-primary hover:text-primary"
                aria-label={social.label}
              >
                <social.Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-[3rem] bg-gray-900">
            <Image
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop"
              alt="Delicious food"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 420px, 320px"
              priority
            />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden max-w-xs rounded-2xl bg-white p-4 shadow-2xl lg:block">
            <Image
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop"
              alt="Healthy salad"
              width={300}
              height={200}
              className="h-32 w-full rounded-xl object-cover"
            />
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-secondary">
                Fresh Salad Bowl
              </h3>
              <p className="text-sm text-gray-500">Healthy &amp; Delicious</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
