import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Software Engineer", "Fullstack Developer", "Web Developer"];

  useEffect(() => {
    if (currentPage !== 'home') return; 
    let timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, currentPage]);

  const handleTyping = () => {
    const i = loopNum % words.length;
    const fullWord = words[i];

    if (!isDeleting) {
      setText(fullWord.substring(0, text.length + 1));
      if (text === fullWord) {
        setTypingSpeed(2000); 
        setIsDeleting(true);
      } else {
        setTypingSpeed(100);
      }
    } else {
      setText(fullWord.substring(0, text.length - 1));
      if (text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      } else {
        setTypingSpeed(50);
      }
    }
  };

  // Ikon SVG Sosial Media untuk Halaman Utama
  const githubIcon = <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
  const linkedinIcon = <svg className="svg-icon" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
  const instagramIcon = <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
  const emailIcon = <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-7.99c.045-.294.135-.572.272-.823l11.713 7.808 11.713-7.808c.137.251.227.529.272.823l-11.985 7.99zm-12 1.287v7c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-7l-12 8-12-8z"/></svg>;

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      {/* Top Bar Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-menu">
            <button onClick={() => setCurrentPage('home')} className={`nav-btn-link ${currentPage === 'home' ? 'active' : ''}`}>
              Main Portfolio
            </button>
            {currentPage === 'home' && (
              <>
                <a href="#about" className="nav-link">About</a>
                <a href="#skills" className="nav-link">Skills</a>
                <a href="#portfolio" className="nav-link">Portfolio</a>
              </>
            )}
            <button onClick={() => setCurrentPage('cv')} className={`nav-link cv-link ${currentPage === 'cv' ? 'cv-active' : ''}`}>
              CV / Resume
            </button>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </nav>

      {/* MAIN PORTFOLIO PAGE */}
      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
          <header className="hero-section">
            <div className="container hero-content">
              <div className="avatar-wrapper">
                <img src="/foto-profil.png" alt="Azhar Havis" className="profile-img" />
              </div>
              <h1>Azhar Havis</h1>
              <p className="typing-box">
                I am a <span className="txt-gradient">{text}</span><span className="cursor">|</span>
              </p>
              <p className="hero-subtitle">Building scalable, highly adaptive, and performance-oriented digital solutions.</p>
              <div className="social-links">
                <a href="https://github.com/ajuy666" target="_blank" rel="noopener noreferrer" className="social-icon-btn">{githubIcon} GitHub</a>
                <a href="https://www.linkedin.com/in/if-azhar-havis-78a5b23a0/" target="_blank" rel="noopener noreferrer" className="social-icon-btn">{linkedinIcon} LinkedIn</a>
                <a href="https://www.instagram.com/azharhv?igsh=ZjhhdmQ1dGJuemdw" target="_blank" rel="noopener noreferrer" className="social-icon-btn">{instagramIcon} Instagram</a>
                <a href="mailto:azharhavis02@gmail.com" className="social-icon-btn">{emailIcon} Email</a>
              </div>
            </div>
          </header>

          {/* About Me */}
          <section id="about" className="container section">
            <div className="section-header">
              <h2>About Me</h2>
            </div>
            <p className="about-text justify-text">
              I am a dedicated and adaptiv Fullstack Developer with a solid foundation in web and mobile software engineering. I have hands-on experience in building complex software architectures, such as Multi-Tenant frameworks and cloud service systems, to optimize operational workflows.
            </p>
          </section>

          {/* Skills */}
          <section id="skills" className="container section">
            <div className="section-header">
              <h2>Skills & Core Competencies</h2>
            </div>
            
            <div className="skills-container">
              <div className="skill-category">
                <h3>Hard Skills</h3>
                <div className="skills-sub-group">
                  <h4 className="justify-text">Programming Languages:</h4>
                  <div className="skills-grid">
                    <span className="skill-badge">JavaScript</span>
                    <span className="skill-badge">Python</span>
                    <span className="skill-badge">Dart</span>
                  </div>
                </div>
                <div className="skills-sub-group" style={{ marginTop: '15px' }}>
                  <h4 className="justify-text">Frameworks:</h4>
                  <div className="skills-grid">
                    <span className="skill-badge">React JS</span>
                    <span className="skill-badge">Express JS</span>
                    <span className="skill-badge">Flutter</span>
                  </div>
                </div>
                <div className="skills-sub-group" style={{ marginTop: '15px' }}>
                  <h4 className="justify-text">Databases:</h4>
                  <div className="skills-grid">
                    <span className="skill-badge">PostgreSQL</span>
                    <span className="skill-badge">XAMPP (MySQL)</span>
                  </div>
                </div>
                <div className="skills-sub-group" style={{ marginTop: '15px' }}>
                  <h4 className="justify-text">Architectural Concepts:</h4>
                  <div className="skills-grid">
                    <span className="skill-badge">MVC</span>
                    <span className="skill-badge">SaaS</span>
                    <span className="skill-badge">Multi-Tenant Architecture</span>
                    <span className="skill-badge">RBAC</span>
                    <span className="skill-badge">B2B</span>
                  </div>
                </div>
              </div>

              <div className="skill-category">
                <h3>Tools & Technologies</h3>
                <div className="skills-grid">
                  <span className="skill-badge">VS Code</span>
                  <span className="skill-badge">Git</span>
                  <span className="skill-badge">GitHub</span>
                  <span className="skill-badge">Supabase</span>
                  <span className="skill-badge">Google Colab</span>
                  <span className="skill-badge">Microsoft Word</span>
                  <span className="skill-badge">Microsoft Excel</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Soft Skills</h3>
                <div className="skills-grid">
                  <span className="skill-badge">Problem Solving</span>
                  <span className="skill-badge">Logical Thinking</span>
                  <span className="skill-badge">Time Management</span>
                  <span className="skill-badge">Adaptability</span>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio */}
          <section id="portfolio" className="container section">
            <div className="section-header">
              <h2>Featured Projects</h2>
            </div>
            
            <div className="projects-list" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div className="showcase-card">
                <div className="card-content">
                  <span className="project-tag">Featured Project</span>
                  <h3>Digital Guest Book (Multi-Tenant)</h3>
                  <p className="company">📍 PT. LSKK (Langgeng Sejahtera Kreasi Komputasi) • Internship</p>
                  <p className="project-desc justify-text">
                    Designed and engineered a centralized, multi-tenant guest management platform with strict data isolation. The application enables multiple organizations to register and fully manage visitor logs autonomously on a unified cloud ecosystem.
                  </p>
                  <div className="card-techs">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Supabase</span>
                    <span>Tailwind</span>
                  </div>
                  <a href="https://github.com/ajuy666/buku-tamu-digital" target="_blank" rel="noopener noreferrer" className="btn-premium">
                    Explore Repository ↗
                  </a>
                </div>
              </div>

              <div className="showcase-card">
                <div className="card-content">
                  <span className="project-tag">Web Application</span>
                  <h3>IOCatering Web Portal</h3>
                  <p className="company">📍 Independent Project</p>
                  <p className="project-desc justify-text">
                    Developed a dynamic e-commerce portal for custom catering orders and kitchen management. Built to streamline user reservation workflows, dynamic menu configurations, and back-end structural database scaling.
                  </p>
                  <div className="card-techs">
                    <span>PHP Native</span>
                    <span>MySQL</span>
                    <span>JavaScript</span>
                    <span>HTML / CSS</span>
                  </div>
                  <a href="https://github.com/ajuy666/IOCatering-Web-PHP-Native" target="_blank" rel="noopener noreferrer" className="btn-premium">
                    Explore Repository ↗
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CV / RESUME PAGE */}
      {currentPage === 'cv' && (
        <div className="container cv-page-container">
          <div className="cv-header-action">
            <button onClick={() => window.print()} className="btn-premium print-btn">
              Print / Save as PDF 📄
            </button>
          </div>
          
          <div className="cv-paper">
            <div className="cv-top">
              <div className="cv-photo-side">
                <img src="/foto-profil.png" alt="Azhar Havis" className="cv-avatar" />
              </div>
              <div className="cv-info-side">
                <h1>AZHAR HAVIS</h1>
                <h3>Software Engineer / Fullstack Developer</h3>
                <p className="cv-meta">📍 West Java, Indonesia | 📞 0812-9740-5477 | ✉️ azharhavis02@gmail.com</p>
              </div>
            </div>

            <hr className="cv-divider" />

            <div className="cv-section">
              <h3>Professional Summary</h3>
              <p className="justify-text">Highly motivated and adaptive Fullstack Developer with a robust framework foundation in web and mobile applications engineering. Competent in building enterprise Multi-Tenant system architectures, cloud-native storage integrations (Supabase/PostgreSQL), and high-availability operational digital portals.</p>
            </div>

            <div className="cv-section">
              <h3>Professional Experience</h3>
              
              <div className="cv-item">
                <div className="cv-item-title">
                  <strong>Software Engineer at PT. LSKK (2025)</strong>
                </div>
                <ul className="justify-text">
                  <li>Spearheaded the design phase and end-to-end development of the Multi-Tenant Digital Guest Book architecture.</li>
                  <li>Engineered clean front-end and secure back-end application features using cutting-edge stacks to boost database optimization.</li>
                </ul>
              </div>

              <div className="cv-item" style={{ marginTop: '20px' }}>
                <div className="cv-item-title">
                  <strong>Part Time Casual at Bandung X Beauty (2024)</strong>
                </div>
                <ul className="justify-text">
                  <li>Managed commercial stand operations, handled technical guest relations, and maintained smooth booth coordination during public hours.</li>
                </ul>
              </div>

              <div className="cv-item" style={{ marginTop: '20px' }}>
                <div className="cv-item-title">
                  <strong>Part Time Casual at GH Universal Hotel (2022)</strong>
                </div>
                <ul className="justify-text">
                  <li>Assisted culinary chefs with professional kitchen production flows inside a high-volume hotel network.</li>
                  <li>Supervised designated catering stations to ensure top-tier customer hospitality services for hotel visitors.</li>
                </ul>
              </div>
            </div>

            <div className="cv-section">
              <h3>Independent Projects</h3>
              <div className="cv-item">
                <div className="cv-item-title">
                  <strong>IOCatering Web Portal (Developer & Creator)</strong>
                </div>
                <ul className="justify-text">
                  <li>Architected and commercialized a scalable e-catering reservation dashboard engineered primarily with a PHP Native and MySQL database configuration.</li>
                </ul>
              </div>
            </div>

            <div className="cv-section">
              <h3>Certifications & Credentials</h3>
              <div className="cv-item">
                <ul className="justify-text" style={{ paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>
                    <strong>The Bits and Bytes of Computer Networking</strong> – Google 
                    {" – "}<a href="https://drive.google.com/file/d/1FKT8Vu2Jzpx3EG43T0yrswgQx7ds7Xsi/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cv-link-inline">Verify Credential ↗</a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <strong>Webinar Evolusi UX Research</strong>
                    {" – "}<a href="https://drive.google.com/file/d/10Mv6J5Qdrkp-ZYMraOWRK3E0RkLaMsqI/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cv-link-inline">Verify Credential ↗</a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <strong>Badan EKRAF Developer Day 2025</strong>
                    {" – "}<a href="https://drive.google.com/file/d/1YXGKtHR5WRm9ov-3_ImU6o2UBDXVVJ0U/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cv-link-inline">Verify Credential ↗</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="cv-section">
              <h3>Technical Expertise</h3>
              <p className="justify-text"><strong>Programming Languages:</strong> JavaScript, Python, Dart</p>
              <p className="justify-text"><strong>Frameworks:</strong> React JS, Express JS, Flutter</p>
              <p className="justify-text"><strong>Databases & Environments:</strong> PostgreSQL, XAMPP (MySQL)</p>
              <p className="justify-text"><strong>Tools & Technologies:</strong> VS Code, Git, GitHub, Supabase, Google Colab, Microsoft Word, Microsoft Excel</p>
              <p className="justify-text"><strong>Core Engineering Concepts:</strong> MVC, SaaS, Multi-Tenant Architecture, RBAC, B2B</p>
            </div>

            <div className="cv-section">
              <h3>Soft Skills</h3>
              <p className="justify-text">Problem Solving, Logical Thinking, Time Management, Adaptability</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Designed & Engineered by Azhar Havis &copy; 2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;