const projects = [
  {
    number: "01",
    title: "TaskFlow",
    type: "PRODUCTIVITY APP",
    description:
      "A clean task manager concept for organizing daily work, tracking progress, and staying focused.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "#contact",
    code: "https://github.com/",
    visual: "visual-one",
  },
  {
    number: "02",
    title: "ShopSphere",
    type: "E-COMMERCE",
    description:
      "A responsive storefront concept with product discovery, category browsing, and a simple shopping flow.",
    stack: ["React", "API", "CSS"],
    demo: "#contact",
    code: "https://github.com/",
    visual: "visual-two",
  },
  {
    number: "03",
    title: "InsightBoard",
    type: "DASHBOARD",
    description:
      "A dashboard concept that turns useful metrics into a clear, scannable overview.",
    stack: ["Next.js", "Charts", "Tailwind CSS"],
    demo: "#contact",
    code: "https://github.com/",
    visual: "visual-three",
  },
];

const skills = [
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "JavaScript",
  "REST APIs",
  "Git & GitHub",
  "HTML & CSS",
];

const profile = {
  name: "Deepanshu Bhati",
  github: "https://github.com/deepanshu-gurjar",
  email: "deepanshu.dev.tech.design@gmail.com",
  // TODO: Add your LinkedIn profile URL when available.
  linkedin: "",
};

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="Your Name home">
            <span className="brand-mark"></span> DEEPANSHU {"<"} {""}
            {"/ >"}
            <span className="brand-mark"></span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a className="nav-contact" href="#contact">
              Let&apos;s talk <ArrowUpRight />
            </a>
          </nav>
        </div>
      </header>

      <section className="hero section" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, WORLD! I&apos;M</p>

            <h1>
              Deepanshu Bhati<span className="accent">.</span>
              <br />
              <span className="muted-heading">Full-Stack Developer</span>
            </h1>

            <p className="hero-description">
              I build modern, responsive web applications with the MERN stack,
              clean code, and thoughtful user experiences. I enjoy turning ideas
              into practical digital solutions.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight />
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch
              </a>
            </div>
            <div className="social-links">
              <div className="social-links">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight />
                </a>

                <span className="social-separator">/</span>

                {/* TODO: Add your LinkedIn URL when available. */}
                <a href="#contact">
                  LinkedIn (add URL) <ArrowUpRight />
                </a>

                <span className="social-separator">/</span>

                <a href={`mailto:${profile.email}`}>
                  Email <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>

          <div
            className="hero-art"
            aria-label="Decorative code editor illustration"
          >
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />
            <div className="code-window">
              <div className="window-top">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>developer.tsx</span>
                <span className="window-menu">•••</span>
              </div>
              <div className="code-content">
                <p>
                  <span className="line-number">01</span>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">developer</span> = {"{"}
                </p>

                <p>
                  <span className="line-number">02</span>
                  &nbsp;&nbsp;name:{" "}
                  <span className="code-green">
                    &quot;Deepanshu Bhati&quot;
                  </span>
                  ,
                </p>
                <p>
                  <span className="line-number">03</span>
                  &nbsp;&nbsp;focus:{" "}
                  <span className="code-green">&quot;MERN Stack&quot;</span>,
                </p>

                <p>
                  <span className="line-number">04</span>&nbsp;&nbsp;learning:{" "}
                  <span className="code-green">&quot;Every day&quot;</span>,
                </p>
                <p>
                  <span className="line-number">05</span>&nbsp;&nbsp;coffee:{" "}
                  <span className="code-orange">true</span>,
                </p>
                <p>
                  <span className="line-number">06</span>
                  {"};"}
                </p>
                <p className="code-spacer">
                  <span className="line-number">07</span>
                </p>
                <p>
                  <span className="line-number">08</span>
                  <span className="code-purple">export default</span> developer;
                </p>
                <div className="terminal-line">
                  <span className="terminal-prompt">➜</span> ready to build
                  something great
                  <span className="cursor" />
                </div>
              </div>
            </div>
            <div className="floating-chip chip-top">
              <span>✳</span> Always learning
            </div>
            <div className="floating-chip chip-bottom">
              <span className="chip-check">✓</span> Clean code, good vibes
            </div>
            <div className="hero-glow" />
          </div>
        </div>
        <div className="container hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
          <span className="hero-index">01 — 04</span>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container section-grid">
          <div>
            <p className="eyebrow">
              <span className="section-number">01</span> / ABOUT ME
            </p>
            <h2>
              A little about
              <br />
              the person behind
              <br />
              <span className="accent">the pixels.</span>
            </h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              I&apos;m a full-stack developer focused on building useful web
              applications with MongoDB, Express.js, React, and Node.js.
            </p>

            <p>
              I care about writing maintainable code and creating interfaces
              that feel intuitive to use. I&apos;m continually learning,
              experimenting with tools, and improving my craft through hands-on
              projects.
            </p>

            <a className="text-link" href="#contact">
              More about me <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="section-number">02</span> / TOOLKIT
              </p>
              <h2>
                Things I work with<span className="accent">.</span>
              </h2>
            </div>
            <p className="section-intro">
              The tools I use to turn ideas into working products. This list can
              grow as I do.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-index">0{index + 1}</span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="section-number">03</span> / SELECTED WORK
              </p>
              <h2>
                Things I&apos;ve built<span className="accent">.</span>
              </h2>
            </div>
            <p className="section-intro">
              A few project concepts to start with. Replace these with your real
              work and repository links.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-visual ${project.visual}`}>
                  <div className="visual-browser">
                    <div className="visual-browser-top">
                      <span />
                      <span />
                      <span />
                    </div>
                    {project.visual === "visual-one" && (
                      <div className="task-preview">
                        <div className="preview-sidebar">
                          <b>✳ taskflow</b>
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="preview-main">
                          <b>Good morning 👋</b>
                          <small>Your focus for today</small>
                          <div className="preview-task" />
                          <div className="preview-task short" />
                          <div className="preview-task" />
                        </div>
                      </div>
                    )}
                    {project.visual === "visual-two" && (
                      <div className="shop-preview">
                        <div className="shop-title">
                          find your
                          <br />
                          <b>everyday essential.</b>
                        </div>
                        <div className="shop-products">
                          <i />
                          <i />
                          <i />
                        </div>
                        <small>CURATED FOR YOU　 ↗</small>
                      </div>
                    )}
                    {project.visual === "visual-three" && (
                      <div className="chart-preview">
                        <small>OVERVIEW / THIS MONTH</small>
                        <b>Performance</b>
                        <div className="chart-stats">
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="chart-bars">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="project-count">{project.number}</span>
                </div>
                <div className="project-info">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.demo}>
                      Live preview <ArrowUpRight />
                    </a>
                    <a href={project.code} target="_blank" rel="noreferrer">
                      Source code <ArrowUpRight />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-panel">
          <div className="contact-orb" />
          <p className="eyebrow">
            <span className="section-number">04</span> / WHAT&apos;S NEXT?
          </p>
          <h2>
            Have a project
            <br />
            in mind<span className="accent">?</span>
          </h2>
          <p className="contact-copy">
            I&apos;m always happy to talk about ideas, opportunities, and
            interesting work. Let&apos;s make something useful.
          </p>

          <a className="button button-primary" href={`mailto:${profile.email}`}>
            {profile.email} <ArrowUpRight />
          </a>

          <div className="contact-socials">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight />
            </a>

            {/* TODO: Add your LinkedIn URL when available. */}
            <a href="#contact">
              LinkedIn (add URL) <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">
            <span className="brand-mark"></span> DEEPANSHU {"<"} {""}
            {"/ >"}
            <span className="brand-mark"></span>
          </a>
          <p>
            Designed & built with care <span className="accent">♥</span>
          </p>
          <a href="#home">Back to top ↑</a>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Deepanshu Bhati</span>
          <span>BUILT WITH NEXT.JS + TAILWIND CSS</span>
        </div>
      </footer>
    </main>
  );
}
