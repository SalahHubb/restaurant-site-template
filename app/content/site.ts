import { Facebook, Instagram, Twitter } from "lucide-react";
import { ElementType } from "react";

export type NavLink = { label: string; href: string };
export type Dish = { name: string; price: string; image: string };
export type Testimonial = {
  name: string;
  role: string;
  image: string;
  rating: number;
};
export type Social = { label: string; href: string; Icon: ElementType };

export const BRAND = { name: "D-restaurant", icon: "\uD83C\uDF5C" };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#gallery" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const CTA = { primary: "Contact", secondary: "More" };

export const DISHES: Dish[] = [
  {
    name: "Lomein with Salad",
    price: "$9",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
  },
  {
    name: "Fish and Veggies",
    price: "$12",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop",
  },
  {
    name: "Tuna Dish",
    price: "$15",
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=400&fit=crop",
  },
  {
    name: "Egg and cucumber",
    price: "$8",
    image:
      "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=400&h=400&fit=crop",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Arun Sreenivasan",
    role: "CEO Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
  },
  {
    name: "James Q.",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
  },
  {
    name: "James Q.",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
  },
];

export const SOCIALS: Social[] = [
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Twitter", href: "#", Icon: Twitter },
];

export const HELP_LINKS = ["Terms & Conditions", "Privacy"];

export const POLICY_LINKS = ["Terms of Use", "Privacy Policy"];

export const OPENING_HOURS = {
  weekdays: "Monday - Friday",
  weekdayHours: "8:00 am to 9:00 pm",
  weekend: "Saturday - Sunday",
  weekendHours: "8:00 am to 11:00 pm",
};

export const CONTACT_INFO = {
  phone: "+251 923-4567",
  address: "128 Harbor Street, Seaside Town, CA 93900",
};
