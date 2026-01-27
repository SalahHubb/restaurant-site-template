"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { NavLink, siteData } from "@/content/site";

type SiteHeaderProps = {
  navLinks?: NavLink[];
};

export function SiteHeader({
  navLinks = siteData.business.navLinks,
}: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const filteredLinks = navLinks.filter(
    (link) => link.href !== siteData.contact.href,
  );

  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-100 bg-white"
      role="banner"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          className="flex items-center gap-2"
          href="/"
          aria-label={`${siteData.business.brand.name} home`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-orange-400 to-orange-600 text-xl font-bold text-white">
            {siteData.business.brand.icon}
          </span>
          <span className="text-xl font-bold text-secondary">
            {siteData.business.brand.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:flex">
          <ul className="flex items-center gap-8">
            {filteredLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-600 font-medium transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={siteData.contact.href}
            className="hidden rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600 sm:block"
          >
            {siteData.business.cta.primary}
          </a>
          <button
            type="button"
            className="p-2 text-gray-600 transition-colors hover:text-primary md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-gray-100 py-4 md:hidden">
          <nav
            id="mobile-navigation"
            aria-label="Mobile"
            className="flex flex-col space-y-4 px-4 sm:px-6 lg:px-8"
          >
            <ul className="space-y-4">
              {filteredLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={siteData.contact.href}
              className="w-full rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600 sm:hidden text-center"
              onClick={closeMobileMenu}
            >
              {siteData.business.cta.primary}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
