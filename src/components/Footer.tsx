import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <span className="font-display font-semibold">S. Bharath Ram</span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} S. Bharath Ram. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
