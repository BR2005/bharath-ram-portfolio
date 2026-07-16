import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-effect shadow-medium py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#home" className="font-display text-xl font-bold text-foreground hover:text-primary transition-colors">
          S. Bharath Ram
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
        >
          Get In Touch
        </a>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className="rounded-lg px-3 py-2 text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}

                <SheetClose asChild>
                  <a
                    href="#contact"
                    className="mt-2 inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all duration-300"
                  >
                    Get In Touch
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
