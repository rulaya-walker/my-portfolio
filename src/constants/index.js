import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Ganesh Danuwar, a creative Fullstack developer, crafting immersive and intuitive web experiences.",
  description:
    "I’m currently helping businesses bring their visions to life through interactive digital solutions.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "Miss Arizona USA",
    description: "I developed a dynamic website using PHP, MySQL, and JavaScript, integrating WordPress with the Divi theme for flexible content management.",
    image: projects1,
    link: "https://arizona.themissusa.com",
  },
  {
    name: "KPC Production",
    description: "I developed a dynamic website using PHP, MySQL, and JavaScript, integrating WordPress with the Divi theme for flexible content management.",
    image: projects2,
    link: "https://kpcproductions.themissusa.com",
  },
  {
    name: "Miss Florida",
    description: "I developed a dynamic website using PHP, MySQL, and JavaScript, integrating WordPress with the Divi theme for flexible content management.",
    image: projects3,
    link: "https://missfloridausa.com",
  },
  {
    name: "Removals.co",
    description:
      "I developed a dynamic website using PHP, MySQL, and JavaScript, integrating WordPress with the Elementor Builder using Astra theme for flexible content management.",
    image: projects4,
    link: "https://www.removals.co.uk",
  },
  {
    name: "Mercia Movers",
    description: "I developed a dynamic website using PHP, MySQL, and JavaScript, integrating WordPress with the Elementor Builder using Astra theme for flexible content management.",
    image: projects5,
    link: "https://merciamovers.co.uk",
  },
  {
    name: "Beichee",
    description: "I developed a dynamic website using PHP, MySQL, and JavaScript, integrating WordPress with the Elementor Builder using Astra theme for flexible content management.",
    image: projects6,
    link: "https://beichee.co.tz",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "My name is Ganesh Danuwar, and I am a passionate Full Stack Developer and experienced WordPress Developer with a strong foundation in both frontend and backend technologies. I specialize in building dynamic, scalable web applications and websites using JavaScript, React, Redux, Node.js, Express, and Fastify. I am also well-versed in backend development with PHP, and proficient in working with relational and non-relational databases including MySQL, PostgreSQL, and MongoDB.",
    "In addition to custom web application development, I have extensive experience in WordPress development, including theme customization, plugin integration, and performance optimization. I use modern tools like Tailwind CSS to create clean, responsive user interfaces that enhance the user experience. I’m committed to writing clean, maintainable code and continuously improving my skills to stay updated with the latest in web development trends and technologies.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2016 — Now",
    title: "Senior WordPress Developer",
    location: "California, USA",
    description: [
      "Leading the development of scalable frontend architecture for enterprise-level applications.",
      "Collaborating with cross-functional teams to deliver high-quality, user-centric solutions.",
      "Driving innovation through continuous improvements in performance and UI/UX design.",
    ],
  },
  {
    yearRange: "2021 — Now",
    title: "Freelancer Fullstack Developer",
    location: "Remote",
    description: [
      "Built dynamic, responsive, and accessible web applications using Node.js, React, Next.js, and Tailwind CSS.",
      "Spearheaded frontend optimization efforts, resulting in a 40% performance boost.",
      "Mentored junior developers and led internal frontend workshops.",
    ],
  },
  {
    yearRange: "2018 — 2021",
    title: "Frontend Developer at Creative Solutions",
    location: "London, UK",
    description: [
      "Developed and maintained user interfaces for high-traffic websites.",
      "Worked closely with designers to implement pixel-perfect designs.",
      "Optimized websites for SEO and performance, resulting in a 30% increase in traffic.",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "David Hooper",
    title: "CEO, Build A Better Website",
    feedback:
      "Ganesh is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
    image: person1,
  },
  {
    name: "Michelle Koach",
    title: "Founder, Main Street Marketers",
    feedback:
      "Ganesh was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
    image: person2,
  },
  {
    name: "Mac Donald",
    title: "CEO, Mac Productions",
    feedback:
      "Working with Ganesh has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",
    image: person3,
  },
  {
    name: "Kristofer Reynolds",
    title: "Senior Developer, Microsoft",
    feedback:
      "Ganesh's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",
    image: person4,
  },
  {
    name: "Laura Martinez",
    title: "CTO, Shopify",
    feedback:
      "Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",
    image: person5,
  },
  {
    name: "Chris Brown",
    title: "Co-founder, Stripe",
    feedback:
      "Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
    image: person6,
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "bishant.danuwar@gmail.com",
  socialLinks: [
    {
      platform: "WhatsApp",
      url: "https://wa.me/9779841076394",
      ariaLabel: "Chat with me on WhatsApp",
      icon: "FaWhatsapp",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/ganesh.danuwar",
      ariaLabel: "Follow me on Facebook",
      icon: "FaFacebook",
    },
    {
      platform: "GitHub",
      url: "https://github.com/rulaya-walker",
      ariaLabel: "View my GitHub profile",
      icon: "FaGithub",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/bishant-danuwar/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "FaLinkedin",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Ganesh Danuwar. All Rights Reserved.`,
};
