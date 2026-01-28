import { Facebook, Instagram, Twitter } from "lucide-react";
import { ElementType } from "react";

export type NavLink = { label: string; href: string };
export type SocialLink = { label: string; href: string; Icon: ElementType };
export type Dish = {
  name: string;
  price: string;
  image: string;
  description: string;
};
export type Testimonial = {
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
};
export type SimpleLink = { label: string; href: string };

export const siteData = {
  business: {
    brand: { name: "AL BAIK", icon: "\uD83C\uDF5C" },
    navLinks: [
      { label: "Home", href: "#" },
      { label: "About", href: "#about" },
      { label: "Testimonials", href: "#gallery" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ] as NavLink[],
    cta: { primary: "Contact us", secondary: "More" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.",
    helpLinks: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy", href: "#" },
    ] as SimpleLink[],
    policyLinks: [
      { label: "Terms of Use", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ] as SimpleLink[],
    openingHours: {
      weekdays: "Monday - Friday",
      weekdayHours: "8:00 am to 9:00 pm",
      weekend: "Saturday - Sunday",
      weekendHours: "8:00 am to 11:00 pm",
    },
    footerHeadings: {
      address: "Address",
      help: "Help",
      openingHours: "Opening Hours",
    },
    copyright: "© 2026 Restaurant. All Rights Reserved. Powered by Fusion",
  },
  hero: {
    heading: {
      prefix: "We provide the best",
      highlight: "food",
      suffix: "for you",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.",
    primaryImage: {
      src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop",
      alt: "Delicious food",
    },
    secondaryCard: {
      image: {
        src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
        alt: "Healthy salad",
      },
      title: "Fresh Salad Bowl",
      subtitle: "Healthy & Delicious",
    },
  },
  about: {
    section: {
      heading: "Welcome to Our Restaurant",
      lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.",
      body: "Ullamcorper viverra ipsum nunc aliquet bibendum enim facilisis gravida neque velit euismod in pellentesque.",
      image: {
        src: "https://images.unsplash.com/photo-1562059390-a761a084768e?w=800&h=800&fit=crop",
        alt: "Delicious noodles",
      },
    },
    chef: {
      heading: "Our Experts Chef",
      lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.",
      body: "Ullamcorper viverra ipsum nunc aliquet bibendum enim facilisis gravida neque velit euismod in pellentesque massa placerat.",
      image: {
        src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=800&fit=crop&crop=faces",
        alt: "Expert Chef",
      },
    },
    testimonials: {
      heading: "Our Happy Customers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.",
      indicatorCount: 5,
      items: [
        {
          name: "Arun Sreenivasan",
          role: "CEO Founder",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
          rating: 5,
          quote:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. To quo magna eget felis. Ullamcorper pretium sed erat feugiat. In hac habitasse platea dictumst. Dictum mauris lorem ultricies.",
        },
        {
          name: "James Q.",
          role: "Business Owner",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
          rating: 5,
          quote:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. To quo magna eget felis. Ullamcorper pretium sed erat feugiat. In hac habitasse platea dictumst. Dictum mauris lorem ultricies.",
        },
        {
          name: "James Q.",
          role: "Business Owner",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
          rating: 5,
          quote:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. To quo magna eget felis. Ullamcorper pretium sed erat feugiat. In hac habitasse platea dictumst. Dictum mauris lorem ultricies.",
        },
      ] as Testimonial[],
    },
  },
  gallery: {
    heading: "Our Special Dishes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.",
    dishes: [
      {
        name: "Lomein with Salad",
        price: "$9",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Fish and Veggies",
        price: "$12",
        image:
          "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Tuna Dish",
        price: "$15",
        image:
          "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=400&fit=crop",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Egg and cucumber",
        price: "$8",
        image:
          "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=400&h=400&fit=crop",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ] as Dish[],
  },
  contact: {
    href: "#contact",
    phone: "0960771111",
    address: "Adama 11 kebele Nearby Kitur 4 School, Adama",
  },
  social: [
    { label: "Facebook", href: "#", Icon: Facebook },
    { label: "Instagram", href: "#", Icon: Instagram },
    { label: "Twitter", href: "#", Icon: Twitter },
  ] as SocialLink[],
  map: {
    heading: "Adama 11 kebele Nearby  ",
    address: "Kitur 4 School, Adama",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.29166593225!2d39.26864934539101!3d8.540775683900337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b21fe2c5899ab%3A0x353cc0159cbdef1!2sAL%20BAIK%20ADAMA%20RESTAURANT!5e0!3m2!1sen!2set!4v1769612456003!5m2!1sen!2set",
  },
};
