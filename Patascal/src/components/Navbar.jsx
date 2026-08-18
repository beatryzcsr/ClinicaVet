import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/produtos', label: 'Produtos' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contato', label: 'Contato' },
];

export default function Navbar() {
  return (
    <header className="absolute z-30 w-full bg-transparent text-white">
      <div className="container mx-auto flex flex-col items-center gap-3 px-4 py-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8 scroll-smooth">
        <img src="/logo.png" alt="Logo" className="mt-2 h-16 w-16 sm:mt-4 sm:h-20 sm:w-20" />

        <nav className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold sm:gap-5 sm:text-base lg:gap-8 lg:text-lg">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `transition hover:text-amber-300 ${isActive ? 'text-amber-300' : 'text-white'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}