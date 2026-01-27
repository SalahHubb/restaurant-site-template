import Image from "next/image";

import { siteData } from "@/content/site";

export function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="special-dishes-heading"
      className="bg-gray-50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2
            id="special-dishes-heading"
            className="mb-4 text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl"
          >
            {siteData.gallery.heading}
          </h2>
          <p className="text-gray-600">{siteData.gallery.description}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.gallery.dishes.map((dish) => {
            const dishId = `${dish.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`;

            return (
              <article
                key={dish.name}
                className="group"
                aria-labelledby={dishId}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
                  {/* <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-white shadow-lg">
                    {dish.price}
                  </div> */}

                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(min-width: 1280px) 250px, (min-width: 1024px) 220px, (min-width: 640px) 280px, 100vw"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h3
                      id={dishId}
                      className="mb-2 text-lg font-bold text-secondary"
                    >
                      {dish.name}
                    </h3>
                    <p className="text-sm text-gray-500">{dish.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
