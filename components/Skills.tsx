import { skillGroups } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="idx">03.</span> skills
        </h2>
        <div className="skill-grid">
          {skillGroups.map((g) => (
            <div className="skill-card" key={g.label}>
              <h3>{g.label}</h3>
              <div className="tags" style={{ marginTop: 0 }}>
                {g.items.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
