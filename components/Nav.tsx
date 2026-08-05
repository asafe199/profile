export default function Nav() {
  const links = [
    ['about', '#about'],
    ['experience', '#experience'],
    ['skills', '#skills'],
    ['projects', '#projects'],
    ['contact', '#contact'],
  ];
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <span className="nav-brand">
          <span className="accent">~/</span>sudo su
        </span>
        <ul className="nav-links">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
