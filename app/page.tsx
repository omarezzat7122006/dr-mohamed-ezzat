const career = [
  {
    year: "1994–1996",
    title: "Supervisor of Soils Laboratories",
    place: "Desert Development Center (DDC), American University in Cairo",
  },
  {
    year: "1996–1998",
    title: "Researcher Associate",
    place: "Pedology Department, Desert Research Center",
  },
  {
    year: "1998–2004",
    title: "Associate Researcher",
    place: "Pedology Department, Desert Research Center",
  },
  {
    year: "2004–2011",
    title: "Researcher",
    place: "Pedology Department, Desert Research Center",
  },
  {
    year: "2011–2017",
    title: "Associate Professor",
    place: "Pedology Department, Desert Research Center",
  },
  {
    year: "2017–Present",
    title: "Professor of Soils",
    place: "Pedology Department, Desert Research Center",
  },
];

const interests = [
  "Pedological investigations for soil genesis, uniformity and classification.",
  "Evaluation and management of desert land resources and land capability and suitability.",
  "Soil mapping based on remotely sensed data using GIS and geostatistical processing.",
  "Soil surveys and sampling design schemes.",
  "Soil physical, chemical and fertility laboratory analyses.",
  "Technical feasibility studies for land reclamation.",
  "Combating soil degradation and monitoring desertification indicators.",
];

const training = [
  "Geographical Data Processing and Management — Belgium",
  "Agroecological Characterization for Resource Management in Dry Areas — Turkey",
  "Space Cartography for Geographical Information — France",
  "Combat Desertification Workshop — Tunisia",
  "Applications of Information Technology in Agriculture — China",
  "Recent Advances of RS and GIS Applications in Agricultural Survey — India",
];

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-name">
          <span>Prof. Dr.</span> Mohamed Ezzat
        </div>

        <div className="nav-links">
          <a href="#about">Profile</a>
          <a href="#career">Career</a>
          <a href="#education">Education</a>
          <a href="#research">Research</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />

        <div className="hero-content">
          <p className="eyebrow">PROFESSOR OF SOIL CLASSIFICATION & LAND EVALUATION</p>

          <h1>
            Mohamed Ezzat
            <span>Abd El-Hady Khalifa</span>
          </h1>

          <div className="gold-line" />

          <p className="hero-role">
            Professor of Soils
            <br />
            Pedology Department · Desert Research Center
          </p>

          <p className="hero-description">
            Specialist in soil classification, land evaluation, desert land
            resources, soil survey, GIS and remote sensing.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="button button-gold">
              Explore Profile
            </a>

            <a href="#research" className="button button-outline">
              Research Interests
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-frame">
            <img
              src="/profile.jpg"
              alt="Prof. Dr. Mohamed Ezzat Abd El-Hady Khalifa"
            />
          </div>
          <div className="photo-label">SCIENTIFIC PROFILE</div>
        </div>
      </section>

      {/* PROFILE */}
      <section id="about" className="section profile-section">
        <div className="section-heading">
          <span>01</span>
          <div>
            <p>PROFILE</p>
            <h2>Academic Profile</h2>
          </div>
        </div>

        <div className="profile-grid">
          <div className="profile-intro">
            <h3>
              Soil Science,
              <br />
              Land Evaluation &
              <br />
              Desert Development.
            </h3>
          </div>

          <div className="profile-text">
            <p className="lead">
              Prof. Dr. Mohamed Ezzat Abd El-Hady Khalifa is a Professor of
              soil classification and land evaluation at the Pedology
              Department, Desert Research Center.
            </p>

            <p>
              His scientific work focuses on soil genesis and classification,
              evaluation and management of desert land resources, soil mapping,
              soil surveys, GIS, remote sensing and geostatistical processing.
            </p>

            <p>
              He also has experience in soil laboratory analyses, land
              reclamation studies and environmental assessment related to
              desertification.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="highlights">
        <div>
          <strong>1994</strong>
          <span>Academic Career</span>
        </div>

        <div>
          <strong>1998</strong>
          <span>M.Sc. in Pedology</span>
        </div>

        <div>
          <strong>2004</strong>
          <span>Ph.D. in Pedology</span>
        </div>

        <div>
          <strong>2017</strong>
          <span>Professor of Soils</span>
        </div>
      </section>

      {/* CAREER */}
      <section id="career" className="section">
        <div className="section-heading">
          <span>02</span>
          <div>
            <p>CAREER</p>
            <h2>Professional Journey</h2>
          </div>
        </div>

        <div className="timeline">
          {career.map((item) => (
            <div className="timeline-item" key={item.year}>
              <div className="timeline-year">{item.year}</div>

              <div className="timeline-dot" />

              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.place}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section education-section">
        <div className="section-heading">
          <span>03</span>
          <div>
            <p>EDUCATION</p>
            <h2>Academic Qualifications</h2>
          </div>
        </div>

        <div className="education-list">
          <article>
            <span>1994</span>
            <div>
              <h3>B.Sc. — Soil & Water Science</h3>
              <p>Alexandria University</p>
            </div>
          </article>

          <article>
            <span>1998</span>
            <div>
              <h3>M.Sc. — Pedology</h3>
              <p>Alexandria University</p>
              <small>
                Integrated quantified land evaluation study for agricultural
                land-use planning, North El-Tahrir sector, Egypt.
              </small>
            </div>
          </article>

          <article>
            <span>2004</span>
            <div>
              <h3>Ph.D. — Pedology</h3>
              <p>Alexandria University</p>
              <small>
                An Integrated Parametric Evaluation Model for Land Resource
                Management: A Case Study for El-Bostan Extension Sector, West
                of Nubaria, Egypt.
              </small>
            </div>
          </article>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="research-section">
        <div className="section-heading light-heading">
          <span>04</span>
          <div>
            <p>RESEARCH</p>
            <h2>Scientific Interests</h2>
          </div>
        </div>

        <div className="research-grid">
          {interests.map((interest, index) => (
            <article key={interest}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{interest}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TRAINING */}
      <section className="section training-section">
        <div className="section-heading">
          <span>05</span>
          <div>
            <p>EXPERIENCE</p>
            <h2>International Training</h2>
          </div>
        </div>

        <div className="training-grid">
          {training.map((item, index) => (
            <article key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section">
        <p>SCIENTIFIC CONTACT</p>

        <h2>
          Prof. Dr. Mohamed Ezzat
          <br />
          Abd El-Hady Khalifa
        </h2>

        <a href="mailto:m_ezzat28@hotmail.com">
          m_ezzat28@hotmail.com
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <strong>Prof. Dr. Mohamed Ezzat</strong>
          <span>Desert Research Center · Pedology</span>
        </div>

        <p>© {new Date().getFullYear()} Mohamed Ezzat</p>
      </footer>
    </main>
  );
}