import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { profile } from '@/lib/data';

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <div className="container">
          <span>
            © {year} {profile.name}
          </span>
          <span className="comment">
            # built with next.js
          </span>
        </div>
      </footer>
    </>
  );
}
