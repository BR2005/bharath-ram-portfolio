import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold mb-2 block">
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-blue-light rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Education</h3>
                  <p className="text-muted-foreground">Current Studies</p>
                </div>
              </div>

              <h4 className="font-semibold text-lg mb-2">
                B.E. Computer Science & Engineering
              </h4>
              <p className="text-primary font-medium mb-4">
                Specialization in Cybersecurity
              </p>

              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Dhanalakshmi College of Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Final Year Student</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Final Year Computer Science student with a keen
              interest in Blockchain Development and Cybersecurity. With more than
              one year of internship experience, I strive to build secure,
              efficient, and user-friendly applications.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech has led me through multiple internships where
              I've gained practical experience in software engineering and web
              development. I'm constantly learning and exploring new
              technologies to stay ahead in this ever-evolving field.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-background rounded-xl">
                <div className="font-display text-3xl font-bold text-primary">
                  1.5+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center p-4 bg-background rounded-xl">
                <div className="font-display text-3xl font-bold text-primary">
                  3+
                </div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
              <div className="text-center p-4 bg-background rounded-xl">
                <div className="font-display text-3xl font-bold text-primary">
                  10+
                </div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
