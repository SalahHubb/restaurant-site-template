import Image from "next/image";

import { siteData } from "@/content/site";

export function TestimonialsSection() {
  const { heading, description, items, indicatorCount } =
    siteData.about.testimonials;

  return (
    <section
      id="gallery"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      <div
        className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 opacity-5"
        aria-hidden
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#1F2937"
            d="M43.3,-72.8C56.3,-65.5,67.5,-54.8,75.1,-41.8C82.7,-28.8,86.7,-14.4,86.8,0.1C86.9,14.6,83.1,29.2,75.4,42.1C67.7,55,56.1,66.2,42.8,73.8C29.5,81.4,14.8,85.4,0.5,84.5C-13.8,83.6,-27.6,77.8,-40.8,70.1C-54,62.4,-66.6,52.8,-74.9,40.1C-83.2,27.4,-87.2,11.6,-86.6,-3.9C-86,-19.4,-80.8,-34.6,-72.3,-47.5C-63.8,-60.4,-52,-71,-38.9,-77.9C-25.8,-84.8,-11.4,-88,1.7,-90.7C14.8,-93.4,30.3,-80.1,43.3,-72.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2
            id="testimonials-heading"
            className="mb-4 text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl"
          >
            {heading}
          </h2>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="md:overflow-x-auto md:pb-4">
          <div className="flex flex-col gap-8 md:min-w-max md:flex-row">
            {items.map((testimonial, index) => {
              const testimonialId = `${testimonial.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}-title-${index}`;

              return (
                <article
                  key={testimonialId}
                  className="shrink-0 rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl md:w-96"
                  aria-labelledby={testimonialId}
                >
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  </div>

                  <div className="mb-4 flex justify-center gap-1">
                    {Array.from({ length: testimonial.rating }).map(
                      (_, index) => (
                        <svg
                          key={`${testimonial.name}-star-${index}`}
                          className="h-5 w-5 fill-yellow-400"
                          viewBox="0 0 20 20"
                          aria-hidden
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ),
                    )}
                  </div>

                  <p className="mb-6 text-center leading-relaxed text-gray-600">
                    {testimonial.quote}
                  </p>

                  <div className="text-center">
                    <h3
                      id={testimonialId}
                      className="text-lg font-bold text-secondary"
                    >
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {Array.from({ length: indicatorCount }).map((_, index) => (
            <span
              key={`testimonial-dot-${index}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${index === 0 ? "bg-primary" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
