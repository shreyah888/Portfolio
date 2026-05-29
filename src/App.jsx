import { useEffect, useMemo, useState } from 'react';

const profile = {
  name: 'Shreya H',
  role: 'Full Stack & AI/ML Developer',
  email: 'hemanthkumarshreya@gmail.com',
  phone: '+91 8050020343',
  github: 'https://github.com/ShreyaH-7',
  linkedin:
    'https://www.linkedin.com/in/shreya-h-?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  resume: '/Shreya_H_Resume.pdf',
  photo: '/assets/profile.png',
};

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Internships', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const skillGroups = [
  ['Languages', ['Python', 'Kotlin', 'JavaScript', 'SQL', 'HTML5', 'CSS3']],
  ['Frontend', ['React.js', 'React Native', 'Tailwind CSS', 'Responsive Design']],
  ['Backend', ['Node.js', 'Express.js', 'Flask', 'Django REST API']],
  ['Databases', ['MongoDB', 'MySQL', 'SQLite']],
  ['AI / ML', ['TensorFlow', 'Scikit-learn', 'XGBoost', 'OpenCV', 'CNN']],
  ['Tools', ['Git', 'GitHub', 'Android Studio', 'VS Code', 'Linux', 'Dialogflow']],
];

const techStack = [
  ['React', 'R'],
  ['Node.js', 'N'],
  ['Python', 'Py'],
  ['TensorFlow', 'Tf'],
  ['Tailwind CSS', 'Tw'],
  ['MongoDB', 'Mg'],
];

const projects = [
  {
    title: 'Clinical Decision Support System',
    image: '/assets/project-cdss.png',
    technologies: ['Python', 'CNN', 'TensorFlow', 'React', 'Django REST API'],
    description:
      'AI-assisted chest X-ray analysis app for pneumonia detection with image upload, prediction results, confidence scores, and report generation.',
    github: 'https://github.com/ShreyaH-7/Clinical-decision-support-system', // TODO: paste original GitHub repo link here
  
  },
  {
    title: 'AI-Powered College Enquiry Chatbot',
    image: '/assets/project-chatbot.png',
    technologies: ['Python', 'Flask', 'Dialogflow', 'SQLite', 'JavaScript'],
    description:
      'College enquiry platform with authentication, real-time chatbot interaction, Dialogflow integration, and a responsive web interface.',
    github: 'https://github.com/ShreyaH-7/Online-College-Enquiry-Chatgpt', // TODO: paste original GitHub repo link here
  
  },
  {
    title: 'AI-Based Fake Profile Detection',
    image: '/assets/project-fake-profile.png',
    technologies: ['Python', 'Flask', 'XGBoost', 'OpenCV', 'Face Recognition'],
    description:
      'Machine learning system that analyzes profile attributes and uses facial verification to identify suspicious or fake social accounts.',
    github: 'https://github.com/ShreyaH-7/Instagram-fake-profile-detection-system', // TODO: paste original GitHub repo link here

  },
  {
    title: 'Namma Mela Theatre Booking App',
    image: '/assets/project-namma-mela.svg',
    technologies: ['Android', 'MERN', 'MongoDB', 'JWT', 'Node.js'],
    description:
      'Theatre ticket booking application where users can view plays, check available seats, and book tickets with secure authentication and booking management.',
    github: 'https://github.com/ShreyaH-7/Namma-Mela', // TODO: paste original GitHub repo link here
  
  },
  {
    title: 'Smart Resume Builder',
    image: '/assets/project-resumecraft.png',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'OpenAI API'],
    description:
      'AI-powered web app for creating ATS-friendly resumes, improving resume content, analyzing job descriptions, and downloading the final resume as a PDF.',
    github: 'https://github.com/ShreyaH-7/Smart-Resume-Maker', // TODO: paste original GitHub repo link here
  
  },
];

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Gupio',
    year: '2026',
    points: [
      'Built web features using React.js, TypeScript, React Native, Tailwind CSS, Node.js, and REST APIs.',
      'Integrated frontend and backend services for smooth, data-driven user interfaces.',
      'Supported database schema validation and resolved bugs to improve reliability.',
    ],
  },
  {
    role: 'Android Application Developer Intern',
    company: 'MindMatrix.io (CL Infotech Pvt. Ltd.)',
    year: '2026',
    points: [
      'Developed Kotlin Android applications in Android Studio.',
      'Built Namma-Mela, a real-time ticket booking app with seat booking and live monitoring features.',
      'Contributed to debugging, QA testing, and performance optimization.',
    ],
  },
];

const certifications = [
  'Data Structures & Algorithms - Infosys Springboard',
  'Artificial Intelligence Basics - Simplilearn',
  'Python for Beginners - Simplilearn',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const mailLink = useMemo(() => {
    const subject = encodeURIComponent('Portfolio enquiry');
    const body = encodeURIComponent('Hi Shreya,\n\nI found your portfolio and would like to connect.');
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-[#0b1120] dark:text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.13),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.12),transparent_30%)]" />
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        theme={theme}
        setTheme={setTheme}
      />
      <main className="space-y-0">
        <Hero mailLink={mailLink} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact mailLink={mailLink} />
      </main>
    </div>
  );
}

function Header({ menuOpen, setMenuOpen, theme, setTheme }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#0b1120]/85">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#home" className="text-[13px] font-semibold tracking-wide text-slate-950 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-200">
          Shreya H
        </a>

        <div className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-[13px] text-slate-600 transition hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-300">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-700 hover:shadow-[0_0_18px_rgba(20,184,166,0.16)] dark:border-white/15 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-teal-300/60 dark:hover:text-teal-200"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? 'Light' : 'Dark'} Theme
          </button>
          <button
            type="button"
            className="rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 md:hidden dark:border-white/15 dark:text-slate-200"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-3 dark:border-white/10 dark:bg-[#0b1120] md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-teal-700 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-teal-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ mailLink }) {
  return (
    <section id="home" className="mx-auto grid max-w-6xl scroll-mt-20 items-center gap-8 px-5 pb-2 pt-20 md:min-h-[500px] md:grid-cols-[0.72fr_1.28fr] md:pb-3">
      <div className="order-2 animate-softUp md:order-1">
        <div className="mx-auto max-w-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-teal-200/50 dark:border-white/10 dark:bg-white/5 dark:shadow-black/30 dark:hover:border-teal-300/40 dark:hover:shadow-teal-300/10">
          <img
            src={profile.photo}
            alt="Shreya H profile"
            className="aspect-[4/5] w-full rounded-xl object-cover object-top"
          />
        </div>
      </div>

      <div className="order-1 animate-softUp md:order-2">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">Developer Portfolio</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">{profile.name}</h1>
        <p className="mt-3 text-xl font-medium text-slate-700 dark:text-slate-200">{profile.role}</p>
        <p className="mt-4 max-w-xl leading-8 text-slate-600 dark:text-slate-300">
          Computer Science & Engineering graduate building responsive full-stack applications, Android experiences, and AI/ML
          solutions with React, Node.js, Python, TensorFlow, and modern backend systems.
        </p>

        <div className="mt-4 flex max-w-2xl flex-wrap gap-2.5">
          {techStack.map(([name, mark]) => (
            <span key={name} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-700 hover:shadow-[0_0_18px_rgba(20,184,166,0.12)] dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-teal-300/40 dark:hover:text-teal-200">
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-teal-100 px-1 text-[10px] font-semibold text-teal-700 dark:bg-teal-300/10 dark:text-teal-200">
                {mark}
              </span>
              {name}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <Button href="#projects" variant="primary">
            Projects
          </Button>
          <Button href={profile.resume} download>
            Resume
          </Button>
          <Button href={profile.github} external>
            GitHub
          </Button>
          <Button href={mailLink}>Contact</Button>
        </div>
      </div>
    </section>
  );
}

function CodeCard({ className = '' }) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white/90 p-4 text-left shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-teal-200/50 dark:border-white/10 dark:bg-slate-950/70 dark:shadow-black/20 dark:hover:border-teal-300/40 ${className}`}>
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-auto text-[11px] text-slate-400 dark:text-slate-500">shreya.jsx</span>
      </div>
      <pre className="overflow-hidden text-xs leading-6 text-slate-700 dark:text-slate-300">
        <code>{`const developer = {
  name: "Shreya H",
  stack: "Full Stack",
  focus: "AI/ML",
  openToWork: true
};`}</code>
      </pre>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-5 sm:py-6">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">About</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
            Focused on practical, intelligent software.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-600 dark:text-slate-300">
            I enjoy building clean user interfaces, reliable APIs, and AI-powered systems that solve real problems. My work spans
            full-stack development, Android applications, deep learning projects, and RESTful systems, with a strong interest in
            software roles where product quality and technical learning both matter.
          </p>
        </div>
        <CodeCard className="hidden w-full lg:mt-14 lg:block" />
      </div>
    </section>
  );
}

function Skills() {
  return (
    <Section id="skills" label="Skills" title="Technical toolkit">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(([group, items]) => (
          <article key={group} className="card p-4">
            <h3 className="text-base font-semibold text-slate-950 dark:text-white">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="rounded-md bg-slate-100 px-3 py-1.5 text-sm text-slate-700 ring-1 ring-slate-200 dark:bg-white/[0.08] dark:text-slate-300 dark:ring-white/10">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" label="Projects" title="Selected work">
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="card group flex h-full overflow-hidden">
            <div className="flex w-full flex-col">
            <div className="aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-950">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-md bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700 dark:bg-teal-300/10 dark:text-teal-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex justify-center pt-4">
                {project.github ? (
                  <ProjectGithubButton href={project.github} external>
                    View on GitHub
                  </ProjectGithubButton>
                ) : (
                  <span className="inline-flex w-[64%] min-w-[180px] max-w-[245px] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-500 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-400">
                    Add GitHub Link
                  </span>
                )}
              </div>
            </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" label="Internship Experience" title="Professional experience">
      <div className="grid gap-3">
        {experiences.map((experience) => (
          <article key={experience.role} className="card p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{experience.role}</h3>
                <p className="mt-1 text-sm text-teal-700 dark:text-teal-200">{experience.company}</p>
              </div>
              <span className="rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-600 ring-1 ring-slate-200 dark:bg-white/[0.08] dark:text-slate-300 dark:ring-white/10">{experience.year}</span>
            </div>
            <ul className="mt-4 grid gap-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {experience.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500 dark:bg-teal-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" label="Certifications" title="Learning credentials">
      <div className="grid gap-3 md:grid-cols-3">
        {certifications.map((certification) => (
          <div key={certification} className="card p-4 text-sm font-medium leading-6 text-slate-700 dark:text-slate-200">
            {certification}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact({ mailLink }) {
  return (
    <Section id="contact" label="Contact" title="Get in touch">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none">
        <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="border-b border-slate-200 p-6 dark:border-white/10 lg:border-b-0 lg:border-r lg:p-7">
            <p className="text-lg font-semibold text-slate-950 dark:text-white">Open to opportunities and collaborations.</p>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              I am interested in full-stack, Android, AI/ML, and software development roles where I can build useful, reliable
              products.
            </p>

            <div className="mt-6 grid gap-3 text-sm">
              <ContactLink label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactLink label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} />
              <ContactLink label="GitHub" value="github.com/ShreyaH-7" href={profile.github} external />
              <ContactLink label="LinkedIn" value="Shreya H" href={profile.linkedin} external />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <SmallButton href={profile.resume}>Resume</SmallButton>
              <SmallButton href="#projects">Projects</SmallButton>
            </div>
          </div>

          <form action={mailLink} className="p-6 lg:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Subject" name="subject" className="mt-4" />
            <label className="mt-4 block">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Message</span>
              <textarea
                name="body"
                rows="4"
                placeholder="Write a short message..."
                className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-teal-300"
              />
            </label>
            <button className="mt-5 w-full rounded-lg bg-teal-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-[0_0_22px_rgba(20,184,166,0.2)] dark:bg-teal-300 dark:text-slate-950 dark:hover:bg-teal-200 sm:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-5 sm:py-6">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">{label}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Button({ href, children, variant = 'secondary', external = false, download = false }) {
  const classes =
    variant === 'primary'
      ? 'bg-teal-500 text-white hover:bg-teal-600 hover:shadow-[0_0_22px_rgba(20,184,166,0.2)] dark:bg-teal-300 dark:text-slate-950 dark:hover:bg-teal-200'
      : 'border border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:text-teal-700 hover:shadow-[0_0_18px_rgba(20,184,166,0.12)] dark:border-white/15 dark:bg-transparent dark:text-slate-200 dark:hover:border-teal-300/60 dark:hover:text-teal-200';

  return (
    <a
      href={href}
      download={download}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`rounded-lg px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${classes}`}
    >
      {children}
    </a>
  );
}

function SmallButton({ href, children, external = false }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-700 hover:shadow-[0_0_18px_rgba(20,184,166,0.12)] dark:border-white/15 dark:bg-transparent dark:text-slate-200 dark:hover:border-teal-300/60 dark:hover:text-teal-200"
    >
      {children}
    </a>
  );
}

function ProjectGithubButton({ href, children, external = false }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group inline-flex w-[64%] min-w-[180px] max-w-[245px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-700 hover:shadow-[0_10px_24px_rgba(20,184,166,0.14)] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-white dark:border-white/15 dark:bg-white/[0.05] dark:text-slate-100 dark:shadow-none dark:hover:border-teal-300/50 dark:hover:bg-white/[0.08] dark:hover:text-teal-200 dark:hover:shadow-[0_0_24px_rgba(45,212,191,0.12)] dark:focus:ring-teal-300 dark:focus:ring-offset-[#0b1120]"
    >
      <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-100 text-slate-800 transition group-hover:bg-teal-50 group-hover:text-teal-700 dark:bg-white/10 dark:text-slate-100 dark:group-hover:bg-teal-300/10 dark:group-hover:text-teal-200">
        <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 fill-current">
          <path d="M8 0C3.58 0 0 3.67 0 8.2c0 3.62 2.29 6.69 5.47 7.78.4.08.55-.18.55-.4 0-.2-.01-.86-.01-1.57-2.01.38-2.53-.5-2.69-.96-.09-.24-.48-.96-.82-1.15-.28-.16-.68-.55-.01-.56.63-.01 1.08.59 1.23.84.72 1.24 1.87.89 2.33.68.07-.53.28-.89.51-1.1-1.78-.21-3.64-.91-3.64-4.03 0-.89.31-1.62.82-2.19-.08-.21-.36-1.04.08-2.16 0 0 .67-.22 2.2.84A7.41 7.41 0 0 1 8 3.94c.68 0 1.36.09 2 .28 1.53-1.06 2.2-.84 2.2-.84.44 1.12.16 1.95.08 2.16.51.57.82 1.3.82 2.19 0 3.13-1.87 3.82-3.65 4.03.29.26.54.75.54 1.52 0 1.1-.01 1.98-.01 2.25 0 .22.15.48.55.4A8.08 8.08 0 0 0 16 8.2C16 3.67 12.42 0 8 0Z" />
        </svg>
      </span>
      {children}
    </a>
  );
}

function ContactLink({ label, value, href, external = false }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-teal-300 hover:bg-white hover:shadow-[0_0_18px_rgba(20,184,166,0.1)] dark:border-white/10 dark:bg-slate-950/25 dark:hover:border-teal-300/50 dark:hover:bg-slate-950/40"
    >
      <span className="block text-xs uppercase tracking-[0.14em] text-slate-400 group-hover:text-teal-700 dark:text-slate-500 dark:group-hover:text-teal-300">{label}</span>
      <span className="mt-1 block truncate text-slate-700 dark:text-slate-200">{value}</span>
    </a>
  );
}

function Field({ label, className = '', type = 'text', name }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={label}
        className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-teal-300"
      />
    </label>
  );
}

export default App;
