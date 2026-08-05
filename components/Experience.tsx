import { experiences } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">
          <span className="idx">02.</span> experience
        </h2>
        {experiences.map((exp) => (
          <article className="exp" key={exp.company + exp.period}>
            <div className="exp-head">
              <div>
                <span className="exp-company">{exp.company}</span>
                <span className="dim"> · </span>
                <span className="exp-title">{exp.title}</span>
              </div>
              <span className="exp-period">{exp.period}</span>
            </div>
            <div className="exp-loc">{exp.location}</div>
            <p className="exp-summary">{exp.summary}</p>
            <ul>
              {exp.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
            <div className="tags">
              {exp.stack.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
