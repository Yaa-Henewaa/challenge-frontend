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
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M57.944 25V14.048L66.4 25H70.112L78.4 14.144V25H82.784V0.319999H78.4L68.736 13.184L59.168 0.319999H54.88V25H57.944ZM95.584 25.48C97.888 25.48 99.904 25.024 101.632 24.112C103.36 23.2 104.704 21.888 105.664 20.176C106.624 18.464 107.104 16.432 107.104 14.08V11.2C107.104 8.84799 106.624 6.81599 105.664 5.10399C104.704 3.39199 103.36 2.07999 101.632 1.16799C99.904 0.255994 97.888 -0.200006 95.584 -0.200006C93.28 -0.200006 91.264 0.255994 89.536 1.16799C87.808 2.07999 86.464 3.39199 85.504 5.10399C84.544 6.81599 84.064 8.84799 84.064 11.2V14.08C84.064 16.432 84.544 18.464 85.504 20.176C86.464 21.888 87.808 23.2 89.536 24.112C91.264 25.024 93.28 25.48 95.584 25.48ZM95.584 21.952C94.272 21.952 93.152 21.696 92.224 21.184C91.296 20.672 90.592 19.936 90.112 18.976C89.632 18.016 89.392 16.864 89.392 15.52V9.76C89.392 8.416 89.632 7.264 90.112 6.304C90.592 5.344 91.296 4.608 92.224 4.096C93.152 3.584 94.272 3.328 95.584 3.328C96.896 3.328 98.016 3.584 98.944 4.096C99.872 4.608 100.576 5.344 101.056 6.304C101.536 7.264 101.776 8.416 101.776 9.76V15.52C101.776 16.864 101.536 18.016 101.056 18.976C100.576 19.936 99.872 20.672 98.944 21.184C98.016 21.696 96.896 21.952 95.584 21.952ZM117.888 25.48C119.84 25.48 121.568 25.088 123.072 24.304C124.576 23.52 125.76 22.416 126.624 21.008C127.488 19.6 127.936 17.968 127.968 16.128V0.319999H122.64V15.616C122.64 16.768 122.368 17.728 121.824 18.496C121.28 19.264 120.528 19.648 119.568 19.648C118.608 19.648 117.856 19.264 117.312 18.496C116.768 17.728 116.496 16.768 116.496 15.616V0.319999H111.168V16.128C111.2 17.968 111.648 19.6 112.512 21.008C113.376 22.416 114.56 23.52 116.064 24.304C117.568 25.088 119.296 25.48 117.888 25.48Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.33701 23.994C11.4023 23.994 14.694 20.7023 14.694 16.637C14.694 12.5717 11.4023 9.28 7.33701 9.28C3.27172 9.28 -0.0200195 12.5717 -0.0200195 16.637C-0.0200195 20.7023 3.27172 23.994 7.33701 23.994Z"
                  fill="#D87D4A"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.0129 23.994C29.0782 23.994 32.3699 20.7023 32.3699 16.637C32.3699 12.5717 29.0782 9.28 25.0129 9.28C20.9476 9.28 17.6559 12.5717 17.6559 16.637C17.6559 20.7023 20.9476 23.994 25.0129 23.994Z"
                  fill="#D87D4A"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.6888 23.994C46.7541 23.994 50.0458 20.7023 50.0458 16.637C50.0458 12.5717 46.7541 9.28 42.6888 9.28C38.6235 9.28 35.3318 12.5717 35.3318 16.637C35.3318 20.7023 38.6235 23.994 42.6888 23.994Z"
                  fill="#D87D4A"
                />
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
