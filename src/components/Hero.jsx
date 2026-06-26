import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const words = ['Software Engineering Intern', 'Web Developer', 'React.js Developer', 'Problem Solver'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentFullWord = words[currentWordIndex];

    if (isDeleting) {
      // Deleting characters
      timer = setTimeout(() => {
        setCurrentText(currentFullWord.substring(0, currentText.length - 1));
        setTypingSpeed(40); // speed up deleting
      }, typingSpeed);
    } else {
      // Typing characters
      timer = setTimeout(() => {
        setCurrentText(currentFullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100); // normal typing speed
      }, typingSpeed);
    }

    // Word typed completely, pause before deleting
    if (!isDeleting && currentText === currentFullWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    }

    // Word deleted completely, move to next word
    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      setTypingSpeed(150); // brief pause before next word
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="hero-sub">Welcome to my space</p>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Aakanksha Bugad</span>
          </h1>
          <h2 className="hero-typing-container">
            I am a <span className="hero-typing">{currentText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-desc">
            Motivated Computer Science Engineering student with hands-on experience in web development, AI-based applications, and software projects. Let's build something exceptional.
          </p>

          <div className="hero-ctas">
            <button className="cta-btn primary" onClick={() => scrollToSection('projects')}>
              Explore Projects <ArrowRight className="btn-icon" />
            </button>
            <button className="cta-btn secondary" onClick={() => scrollToSection('contact')}>
              Let's Connect
            </button>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/aakanksha-tech" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <Github />
            </a>
            <a href="https://linkedin.com/in/aakanksha-bugad" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="mailto:akanksha.bugad@gmail.com" className="social-icon" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-orb"></div>
          <div className="visual-card glass-card animate-float">
            <div className="card-header">
              <span className="card-dot red"></span>
              <span className="card-dot yellow"></span>
              <span className="card-dot green"></span>
            </div>
            <div className="card-body">
              <pre>
                <code>
                  <span className="code-keyword">const</span> intern = &#123;<br />
                  &nbsp;&nbsp;name: <span className="code-string">'Aakanksha K. Bugad'</span>,<br />
                  &nbsp;&nbsp;role: <span className="code-string">'Software Engineering Intern'</span>,<br />
                  &nbsp;&nbsp;skills: [<span className="code-string">'React.js'</span>, <span className="code-string">'Express.js'</span>, <span className="code-string">'Python'</span>],<br />
                  &nbsp;&nbsp;passionate: <span className="code-bool">true</span>,<br />
                  &nbsp;&nbsp;quickLearner: <span className="code-bool">true</span><br />
                  &#125;;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
