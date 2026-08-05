import { profile, education, certifications, languages } from '@/lib/data';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">
          <span className="idx">01.</span> about
        </h2>
        <div className="about-grid">
          <p className="prose">{profile.summary}</p>

          <div className="mini-cards">
            {education.map((e) => (
              <div className="mini-card" key={e.school}>
                <div className="k">edu · {e.period}</div>
                <div className="v">{e.school}</div>
                <div className="dim" style={{ fontSize: 13 }}>
                  {e.degree}
                </div>
              </div>
            ))}
          </div>
          <div className="mini-cards">
            <div className="mini-card">
              <div className="k">certifications</div>
              {certifications.map((c) => (
                  <div className="v" key={c}>
                    <span className="accent">✓</span> {c}
                  </div>
              ))}
            </div>
            <div className="mini-card">
              <div className="k">languages</div>
              {languages.map((l) => (
                  <div className="v" key={l.name}>
                    {l.name}{' '}
                    <span className="dim" style={{ fontSize: 13 }}>
                    — {l.level}
                  </span>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
