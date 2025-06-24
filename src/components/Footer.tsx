import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "HEADPHONES", href: "/headphones" },
    { name: "SPEAKERS", href: "/speakers" },
    { name: "EARPHONES", href: "/earphones" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Orange accent line */}
        <div className="w-24 h-1 bg-brand-orange mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-8">
              <svg
                width="143"
                height="25"
                viewBox="0 0 143 25"
                fill="none"
                xmlns=""
              >
 
              </svg>
            </Link>

            <p className="body text-white/75 max-w-md mb-8 lg:mb-0">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-subtitle font-bold uppercase tracking-wide text-white hover:text-brand-orange transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div className="flex justify-start lg:justify-end items-start">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-brand-orange transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-brand-orange transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-brand-orange transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <p className="body text-white/50">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
