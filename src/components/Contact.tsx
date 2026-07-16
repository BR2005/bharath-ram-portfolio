import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "77bharathcyber@gmail.com",
      href: "mailto:77bharathcyber@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "8610088995 / 7530068995",
      href: "tel:8610088995",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/s-bharath-ram-561827280/",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/BR2005", label: "GitHub" },
  ];

  return (
    <section id="contact" className="py-24 bg-hero-gradient" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold mb-2 block">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Contact Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl sm:items-center"
                >
                  <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary sm:mt-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium leading-relaxed hover:text-primary transition-colors break-words"
                      >
                        {item.label === "Phone" ? (
                          <span className="block">
                            {item.value.split(" / ").map((phone) => (
                              <span key={phone} className="block">
                                {phone}
                              </span>
                            ))}
                          </span>
                        ) : (
                          item.value
                        )}
                      </a>
                    ) : (
                      <p className="font-medium leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-12 h-12 bg-card hover:bg-primary rounded-lg flex items-center justify-center group transition-all duration-300 hover:shadow-glow"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
