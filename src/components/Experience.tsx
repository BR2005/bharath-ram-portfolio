import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "ANA Technology Solutions India Private Limited",
    role: "Software Engineer Internship",
    type: "On-site",
    duration: "Sep 2024 - Present",
    period: "1 yr 5 mos",
    location: "Tamil Nadu, India",
    description:
      "Working on software development projects and gaining hands-on experience in building scalable solutions.",
    color: "from-primary to-blue-dark",
  },
  {
    company: "ANA Technology Solutions India Private Limited",
    role: "Software Engineer",
    type: "On-site",
    duration: "Sep 2024 - Mar 2025",
    period: "7 mos",
    location: "Kovilambakkam",
    skills: ["Linux", "Microsoft Visual Studio Code"],
    description:
      "Developed software solutions using various technologies and tools.",
    color: "from-blue-dark to-blue-navy",
  },
  {
    company: "Vulture Lines Tech Management Private Limited",
    role: "Web Development Intern",
    type: "Hybrid",
    duration: "Mar 2025 - Apr 2025",
    period: "2 mos",
    location: "Chennai, Tamil Nadu, India",
    description:
      "Started a new position as Web Development intern, working on frontend and backend web technologies.",
    color: "from-primary to-accent",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-hero-gradient" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold mb-2 block">
            My Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Work Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary shadow-glow hidden md:block" />

                  <div className="md:ml-20 bg-card rounded-2xl p-6 shadow-medium hover:shadow-large transition-shadow duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground bg-gradient-to-r ${exp.color} mb-3`}
                        >
                          {exp.type}
                        </div>
                        <h3 className="font-display text-xl font-bold">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-medium mt-1">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-2 justify-end">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="text-xs mt-1">{exp.period}</div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-primary" />
                        {exp.location}
                      </div>
                      {exp.skills && (
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-blue-light text-primary rounded-md text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
