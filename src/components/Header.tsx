import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Cart from "./Cart";

const Header = () => {
  const [cartItems] = useState(0);
   const [isCartOpen, setIsCartOpen] = useState(false)

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "HEADPHONES", href: "/headphones" },
    { name: "SPEAKERS", href: "/speakers" },
    { name: "EARPHONES", href: "/earphones" },
  ];

  const MobileMenu = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-sm bg-white">
        <nav className="flex flex-col space-y-4 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-lg font-bold uppercase tracking-wide text-black hover:text-brand-orange transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="bg-black border-b border-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-24">
          {/* Mobile menu button */}
          <MobileMenu />

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <svg
              width="143"
              height="25"
              viewBox="0 0 143 25"
              fill="none"
              xmlns=""
            >

 
            </svg>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
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

           {/* Cart */}
          <Button
            variant="ghost"
            size="icon"
            className="relative text-white hover:text-brand-orange"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </Button>

          {/* Cart Modal */}
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
