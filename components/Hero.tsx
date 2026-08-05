import { profile, socials } from '@/lib/data';

export default function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <p className="hero-line">
          <span className="prompt" />
          whoami
        </p>
        <h1 className="hero-role">{profile.name}</h1>
        <p className="hero-headline">
          {profile.role}
          <span className="cursor" aria-hidden="true" />
        </p>
        <p className="dim" style={{ marginTop: 0 }}>
          {profile.headline}
        </p>
        <div className="btn-row">
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
    </header>
  );
}
