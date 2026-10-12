
import { Routes, Route } from "react-router-dom"
import ProjectCard from "./components/ProjectCard"
import ProjectDetail from "./components/ProjectDetail"
import { projects } from "./data/projects"
import NotFound from "./components/NotFound"
import { QRCodeSVG } from "qrcode.react";

function HomePage() {
  return (
    <div>
      <header className="site-header">
        <nav>
          <span>MARKUS HERMES</span>
          <div>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#lab">The Lab</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero">
          <div className="hero-content">
            <p className="hero-eyebrow">
              Game Developer · Software Engineer · Bug Hunter
            </p>
            <div className="hero-name">
              <h1>
                MARKUS
                <br />
                HERMES
              </h1>
              <span className="hero-wing" aria-hidden="true">
                𓆩
              </span>
            </div>
            <p className="hero-intro">
              I build games, software and interactive experiences —
              from the first idea to the final bug.
            </p>
          </div>
        </section>

        <section id="projects">
          <div className="section-header">
            <p className="section-label">Selected Work</p>
            <h2>Featured Projects</h2>
          </div>

          <div className="project-grid">
            <ProjectCard
              title="The Little Trashmaid"
              type="Private · Unity · Mobile"
              description="A collection of games inspired by the webcomic, combining progression, story and several custom mini-games."
              image="/images/projects/trashmaid.png"
              imageAlt="The Little Trashmaid gameplay"
              dualImage="/images/projects/trashmaid-2.png"
              to="/projects/the-little-trashmaid"
            />
            <ProjectCard
              title="Seafarer: The Ship Sim"
              type="Professional · Unreal Engine · PC"
              description="A ship simulation project developed with Unreal Engine, currently part of my professional work at astragon Development."
              image="/images/projects/seafarer.jpg"
              imageAlt="Seafarer: The Ship Sim"
            />
            <ProjectCard
              title="Construction Simulator 4"
              type="Professional · Unity · Multi-platform"
              description="A construction simulation game developed for Nintendo Switch and mobile platforms."
              image="/images/projects/construction-simulator-4.jpg"
              imageAlt="Construction Simulator 4 gameplay"
            />
            <ProjectCard
              title="Winter Games 2023"
              type="Professional · Unity · Multi-platform"
              description="A winter sports game developed for PC and consoles, with a focus on performance and platform-specific requirements."
              image="/images/projects/winter-games-2023.jpg"
              imageAlt="Winter Games 2023 gameplay"
            />
            <ProjectCard
              title="Eldrador Creatures"
              type="Professional · Unity · Multi-platform"
              description="A multi-platform action game developed for Steam, PlayStation, Nintendo Switch, Android and iOS."
              image="/images/projects/eldrador.jpg"
              imageAlt="Eldrador Creatures"
              to="/projects/eldrador"
            />
            <ProjectCard
              title="Memblox"
              type="Private · React Native · Firebase"
              description="A modular organizer app that lets users build their own pages from a wide range of interactive components."
              image="/images/projects/memblox.jpg"
              imageAlt="Memblox app"
              dualImage="/images/projects/memblox-2.jpg"
              to="/projects/memblox"
            />
          </div>
        </section>

        <section id="about">
          <div className="section-header">
            <p className="section-label">A little about me</p>
            <h2>About</h2>
          </div>
          <div className="about-content">
            <p className="about-lead">
              I’m a game developer and software engineer with a passion for
              building interactive experiences and finding creative solutions
              to difficult problems.
            </p>
            <p>
              My professional journey started with browser games and evolved
              through mobile, console and PC development. Along the way I have
              worked with Unity, Unreal Engine, web technologies and a wide
              range of platforms.
            </p>
            <p>
              Outside of professional projects, I continuously experiment with
              my own games, apps and tools — often simply because I have an idea
              that I want to turn into something tangible.
            </p>
          </div>
        </section>

        <section id="experience">
          <div className="section-header">
            <p className="section-label">Where I’ve been</p>
            <h2>Experience</h2>
          </div>
          <div className="experience-list">
            
            <article className="experience-item">
              <div className="experience-year">2019 — 2026</div>
              <div className="experience-content">
                <h3>Independent Arts Software → astragon Development</h3>
                <p className="experience-role">
                  Game Developer / Lead Programmer
                </p>
                <p>
                  Joined Independent Arts Software in 2019. Following its
                  acquisition by astragon Entertainment in April 2023, the
                  studio was renamed astragon Development in May 2025.
                  
                  Developed games for PC, console and mobile using Unity and
                  Unreal Engine, including Eldrador Creatures, Winter Games 2023,
                  Construction Simulator 4 and Seafarer: The Ship Sim.
                </p>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-year">2016 — 2018</div>
              <div className="experience-content">
                <h3>InnoGames</h3>
                <p className="experience-role">Game Developer</p>
                <p>
                  Continued game development after Funatics Software was
                  integrated into InnoGames, including work on Godkings,
                  an MMO strategy game for iOS and Android.
                </p>
              </div>
            </article>
            <article className="experience-item">
              <div className="experience-year">2011 — 2016</div>
              <div className="experience-content">
                <h3>Funatics Software</h3>
                <p className="experience-role">Game Developer</p>
                <p>
                  Development of browser games including UFO Online,
                  Cultures Online, Wiki Online and Panzer General Online.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="lab">
          <div className="section-header">
            <p className="section-label">Personal projects & experiments</p>
            <h2>The Lab</h2>
          </div>
          <div className="lab-intro">
            <p>
              Not everything starts as a job. Some projects start with a
              random idea, a technical challenge or simply the question:
              “Could I build this?”
            </p>
          </div>
          
          
          <div className="lab-projects">
            <article>
              <span>01</span>
              <h3>Ancient Airlines</h3>
              <p>Physics-based flight simulator · Unreal Engine</p>
            </article>
            <a className="lab-project" href="/projects/close-up-together">
              <span>02</span>
              <h3>Close Up Together</h3>
              <p>Collaborative video learning · React · Node.js · Firebase</p>
              <span className="lab-project-link">Explore project ↗</span>
            </a>

            <a className="lab-project" href="/projects/qr-contact">
              <span>03</span>
              <h3>QR Contact</h3>
              <p>Privacy-focused contact system · React · Node.js</p>
              <span className="lab-project-link">Explore project ↗</span>
            </a>
            <article>
              <span>04</span>
              <h3>Coptaxi</h3>
              <p>Space taxi game · Unity · Custom level editor</p>
            </article>
            <article>
              <span>05</span>
              <h3>Flash Games</h3>
              <p>Indie games · Flash · Game design & development</p>
            </article>
          </div>


        </section>

        <section id="skills">
          <div className="section-header">
            <p className="section-label">Tools & technologies</p>
            <h2>Development Skills</h2>
          </div>
          <div className="skills-map">

          <svg
            className="skills-connections"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="1.5"
            >
              <path d="M500 250 L250 125" />
              <path d="M500 250 L250 375" />
              <path d="M500 250 L750 125" />
              <path d="M500 250 L750 375" />
              <path d="M500 250 L500 425" />
            </g>
          </svg>

            <div className="skills-center">
              Development
              <br />
              Skills
            </div>
            <div className="skill-group skill-unity">
              <h3>Unity</h3>
              <p>C# · UI Systems · Addressables · Mobile · Console Development</p>
            </div>
            <div className="skill-group skill-unreal">
              <h3>Unreal Engine</h3>
              <p>C++ · Blueprints · Verse · UEFN</p>
            </div>
            <div className="skill-group skill-web">
              <h3>Web</h3>
              <p>React · TypeScript · Node.js · PHP</p>
            </div>
            <div className="skill-group skill-mobile">
              <h3>Mobile</h3>
              <p>Android · iOS · React Native · Firebase</p>
            </div>
            <div className="skill-group skill-other">
              <h3>Other</h3>
              <p>Git · 3D Graphics · Level Design · Game Design · Performance Optimization</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="section-header">
            <p className="section-label">Get in touch</p>
            <h2>Contact</h2>
          </div>
          <div className="contact-content">
            <p className="contact-intro">
              Have a project, an opportunity or just an interesting idea?
              I’d be happy to hear from you.
            </p>

            <a className="contact-link" href="mailto:hello@example.com">
              hello@example.com
            </a>

            <div className="contact-qr">
              <QRCodeSVG
                value="https://h2905711.stratoserver.net:5020/?id=pf"
                size={135}
                bgColor="#ffffff"
                fgColor="#111419"
                level="H"
                marginSize={0}
              />

              <div className="contact-qr-info">
                <h3>QR Contact</h3>
                <p>Scan to open my contact form.</p>

                <a
                  href="https://h2905711.stratoserver.net:5020/?id=pf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open QR Contact
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Markus Hermes</p>

        <nav aria-label="Legal links">
          <a href="/imprint">Imprint</a>
          <a href="/privacy">Privacy Policy</a>
        </nav>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {projects.map((project) => (
        <Route
          key={project.slug}
          path={`/projects/${project.slug}`}
          element={<ProjectDetail {...project} />}
        />
      ))}
     <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
