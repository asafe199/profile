import { contact, socials } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="idx">05.</span> contact
        </h2>
        <div className="contact-box">
          <p className="line">
            <span className="comment"># let&apos;s build something</span>
          </p>
          <p className="line">
            <span className="prompt" />
            cat contact.txt
          </p>
          <p className="line">
            <span className="dim">email </span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p className="line">
            <span className="dim">phone </span>
            {contact.phone}
          </p>
          <p className="line">
            <span className="dim">where </span>Goiânia, Goiás, Brazil
          </p>
          <div className="contact-links">
            {socials.map((s) => (
              <a
                key={s.label}
                className="btn"
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
