import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Code,
  Database,
  Globe,
  Terminal,
  Settings,
  Languages,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "JavaScript", "TypeScript", "C/C++", "Java"],
    color: "from-primary to-blue-dark",
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["React", "HTML/CSS", "Node.js", "REST APIs", "Tailwind CSS"],
    color: "from-blue-dark to-blue-navy",
  },
  {
    title: "Cybersecurity & Blockchain",
    icon: Shield,
    skills: [
      "Blockchain Development",
      "Smart Contracts",
      "Network Security",
      "Penetration Testing",
      "Vulnerability Assessment",
      "OWASP",
    ],
    color: "from-primary to-accent",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    color: "from-accent to-primary",
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    skills: ["Linux", "Git", "VS Code", "Docker", "AWS"],
    color: "from-blue-navy to-primary",
  },
  {
    title: " Languages",
    icon: Languages,
    skills: ["sowrashtra(MotherTounge)", "Tamil", "Japanese N5", "English"],
    color: "from-accent to-blue-dark",
  },
  {
    title: "Others",
    icon: Settings,
    skills: ["Agile/Scrum", "Problem Solving", "Team Collaboration"],
    color: "from-primary to-blue-medium",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold mb-2 block">
            Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-background rounded-2xl p-6 hover:shadow-large transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <category.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="font-display text-xl font-bold mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-blue-light text-primary text-sm font-medium rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
