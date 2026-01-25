import {
  BRAND,
  CONTACT_INFO,
  HELP_LINKS,
  OPENING_HOURS,
  POLICY_LINKS,
  SOCIALS,
} from "@/content/site";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-gray-100 bg-white py-12"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-orange-400 to-orange-600 text-xl font-bold text-white">
                {BRAND.icon}
              </div>
              <span
                id="footer-heading"
                className="text-xl font-bold text-secondary"
              >
                {BRAND.name}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat.
            </p>
            <div className="flex gap-3" aria-label="Social links">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-primary hover:text-white"
                  aria-label={social.label}
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-bold text-secondary">Address</h2>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="transition-colors hover:text-primary"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <address className="not-italic leading-relaxed">
                {CONTACT_INFO.address}
              </address>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-bold text-secondary">Help</h2>
            <nav aria-label="Help links">
              <ul className="space-y-3 text-gray-600">
                {HELP_LINKS.map((item) => (
                  <li key={item}>
                    <a
                      className="transition-colors hover:text-primary"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="mb-4 font-bold text-secondary">Opening Hours</h2>
            <dl className="space-y-3 text-sm text-gray-600">
              <div>
                <dt className="font-semibold text-secondary">
                  {OPENING_HOURS.weekdays}
                </dt>
                <dd className="font-medium text-secondary">
                  {OPENING_HOURS.weekdayHours}
                </dd>
              </div>
              <div className="mt-3">
                <dt className="font-semibold text-secondary">
                  {OPENING_HOURS.weekend}
                </dt>
                <dd className="font-medium text-secondary">
                  {OPENING_HOURS.weekendHours}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 md:flex-row">
            <p>© 2026 Restaurant. All Rights Reserved. Powered by Fusion</p>
            <div className="flex gap-6">
              {POLICY_LINKS.map((policy) => (
                <a
                  key={policy}
                  className="transition-colors hover:text-primary"
                  href="#"
                >
                  {policy}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
