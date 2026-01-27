import Image from "next/image";

import { siteData } from "@/content/site";

export function ChefSection() {
  const { chef } = siteData.about;

  return (
    <section
      aria-labelledby="chef-heading"
      className="bg-gray-50 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2
              id="chef-heading"
              className="text-3xl font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl"
            >
              {chef.heading}
            </h2>
            <p className="text-lg text-gray-600">{chef.lead}</p>
            <p className="text-gray-600">{chef.body}</p>
          </div>

          <div className="flex gap-3 sm:gap-4">
            <button className="flex-1 rounded-lg bg-secondary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-secondary/90 sm:flex-none sm:px-8 sm:py-3.5 sm:text-base">
              {siteData.business.cta.secondary}
            </button>
            <a
              href={siteData.contact.href}
              className="flex-1 rounded-lg bg-primary px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-orange-600 sm:flex-none sm:px-8 sm:py-3.5 sm:text-base"
            >
              {siteData.business.cta.primary}
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="relative h-48 w-48 rounded-full bg-linear-to-br from-orange-400 to-orange-600 shadow-2xl sm:h-64 sm:w-64 md:h-80 md:w-80">
              <Image
                src={chef.image.src}
                alt={chef.image.alt}
                fill
                className="rounded-full object-cover"
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 256px, 192px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
