function App() {
  return (
    <div>
      <header>
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
            <article className="project-card project-card-clickable">
              <div className="project-image project-image-dual">
                <img
                  src="/images/projects/trashmaid.png"
                  alt="The Little Trashmaid gameplay"
                />

                <img
                  src="/images/projects/trashmaid-2.png"
                  alt="The Little Trashmaid gameplay"
                />
              </div>

              <div className="project-info">
                <p className="project-type">Private · Unity · Mobile</p>
                <h3>The Little Trashmaid</h3>
                <p>
                  A collection of games inspired by the webcomic of the same name,
                  combining progression, story and several custom mini-games.
                </p>
              </div>
            </article>

            <article className="project-card project-card-clickable">
              <div className="project-image">
                <img
                  src="/images/projects/eldrador.jpg"
                  alt="Eldrador Creatures"
                />
              </div>

              <div className="project-info">
                <p className="project-type">Professional · Unity · Multi-platform</p>
                <h3>Eldrador Creatures</h3>
                <p>
                  A multi-platform action game developed for Steam, PlayStation,
                  Nintendo Switch, Android and iOS.
                </p>
              </div>
            </article>

            <article className="project-card project-card-clickable">
              <div className="project-image project-image-dual">
                <img
                  src="/images/projects/memblox.jpg"
                  alt="Memblox"
                />

                <img
                  src="/images/projects/memblox-2.jpg"
                  alt="Memblox"
                />
              </div>

              <div className="project-info">
                <p className="project-type">Private · React Native · Firebase</p>
                <h3>Memblox</h3>
                <p>
                  A modular organizer app that lets users build their own pages
                  from a wide range of interactive components.
                </p>
              </div>
            </article>
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
                <h3>astragon Development</h3>
                <p className="experience-role">Game Developer / Lead Programmer</p>
                <p>
                  Development of games for PC, console and mobile using Unity
                  and Unreal Engine. Worked on titles including Eldrador
                  Creatures, Winter Games 2023 and Construction Simulator 4.
                </p>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-year">2016 — 2018</div>
              <div className="experience-content">
                <h3>InnoGames / Funatics Software</h3>
                <p className="experience-role">Game Developer</p>
                <p>
                  Development of browser and mobile games, including Godkings
                  and several browser game projects.
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
              <h3>Memblox</h3>
              <p>Modular organizer · React Native · Firebase</p>
            </article>

            <article>
              <span>02</span>
              <h3>Ancient Airlines</h3>
              <p>Physics-based flight simulator · Unreal Engine</p>
            </article>

            <article>
              <span>03</span>
              <h3>QR Contact</h3>
              <p>Privacy-focused contact system · React · Node.js</p>
            </article>

            <article>
              <span>04</span>
              <h3>The Little Trashmaid</h3>
              <p>Mobile game collection · Unity</p>
            </article>
          </div>
        </section>

        <section id="skills">
          <div className="section-header">
            <p className="section-label">Tools & technologies</p>
            <h2>Development Skills</h2>
          </div>

          <div className="skills-map">
            <div className="skills-center">
              Development
              <br />
              Skills
            </div>

            <div className="skill-group skill-unity">
              <h3>Unity</h3>
              <p>C# · UI · Addressables · Mobile · Console</p>
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
              <p>Git · 3D · Level Design · Game Design</p>
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
          </div>
        </section>
      </main>
    </div>
  )
}

export default App