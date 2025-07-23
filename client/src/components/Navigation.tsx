import { Link, useLocation } from 'wouter';

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { href: '/', label: 'Echo Core' },
    { href: '/quantum-lab', label: 'Quantum Lab' },
    { href: '/neural-network', label: 'Neural Net' },
    { href: '/holographic-display', label: 'Holo Display' },
    { href: '/data-streams', label: 'Data Streams' },
  ];

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link href="/" className="logo">Echo Chamber</Link>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className={location === item.href ? 'nav-active' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}