import { motion } from "framer-motion";
import { Shield, Code, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-hero-gradient flex items-center relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-blue-medium/30 rounded-full blur-3xl" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-1/4 text-primary/20"
        >
          <Sparkles size={24} />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 right-1/3 text-primary/15"
        >
          <Shield size={32} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-light rounded-full mb-6"
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">
                Blockchain & Cybersecurity Enthusiast
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Hello, I'm
              <br />
              <span className="text-gradient">Bharath Ram</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-lg mb-8"
            >
              A Final Year B.E.CSE(Cybersecurity) Student at Dhanalakshmi College of Engineering,
              enthusiastic about Blockchain Development and Cybersecurity. I have
              more than one year of hands-on experience as an intern.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-sm text-muted-foreground max-w-lg mb-8"
            >
              Also known online as BharathRam, I focus on building secure and practical digital products.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm font-medium text-foreground max-w-lg mb-8"
            >
              Languages: Sowrastra, English, Tamil, Japanese
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <Code className="w-5 h-5" />
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right content - Profile illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-primary to-blue-dark rounded-full flex items-center justify-center shadow-glow">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-card rounded-full flex items-center justify-center">
                  <span className="font-display text-6xl md:text-8xl font-bold text-gradient">
                    BR
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-4 top-1/4 bg-card shadow-medium rounded-xl px-4 py-3 flex items-center gap-2"
              >
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-semibold text-sm">Cybersecurity</span>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -right-4 bottom-1/4 bg-card shadow-medium rounded-xl px-4 py-3 flex items-center gap-2"
              >
                <Code className="w-5 h-5 text-primary" />
                <span className="font-semibold text-sm">Developer</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
