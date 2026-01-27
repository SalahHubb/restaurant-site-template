import { siteData } from "@/content/site";

export function MapSection() {
  const { embedUrl, address, heading } = siteData.map;

  return (
    <section aria-labelledby="map-heading" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2
            id="map-heading"
            className="text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl"
          >
            {heading}
          </h2>
          <p className="mt-3 text-base text-gray-600">{address}</p>
        </div>

        <div className="relative overflow-hidden rounded-[3rem] bg-linear-to-br from-gray-900 to-gray-800">
          <div className="relative aspect-video sm:aspect-5/2 md:aspect-21/9">
            <iframe
              title="Restaurant location on Google Maps"
              src={embedUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
