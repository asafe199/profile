import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="idx">04.</span> projects
        </h2>
        <div className="proj-grid">
          {projects.map((p) => (
            <article className="proj-card" key={p.name}>
              <h3>
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    {p.name}
                  </a>
                ) : (
                  p.name
                )}
              </h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
