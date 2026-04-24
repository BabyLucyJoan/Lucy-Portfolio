import { useState, useEffect } from 'react';
import { ThemeProvider } from './hooks/useTheme.jsx';
import { NAV } from './data/portfolioData';
import Navbar         from './components/Navbar';
import Footer         from './components/Footer';
import HomePage       from './pages/HomePage';
import AboutPage      from './pages/AboutPage';
import SkillsPage     from './pages/SkillsPage';
import EducationPage  from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage   from './pages/ProjectsPage';
import ContactPage    from './pages/ContactPage';

function Portfolio() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); },
      { threshold: 0.3 }
    );
    NAV.forEach(n => { const el = document.getElementById(n.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar active={active} />
      <main>
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <EducationPage />
        <ExperiencePage />
        <ProjectsPage />
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
