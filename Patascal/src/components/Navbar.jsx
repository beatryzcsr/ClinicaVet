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
    <header className="absolute z-30 w-full bg-[#b2dfdc] text-white">
      <div className="container relative mx-auto flex h-20 items-center justify-center px-4 sm:h-24 sm:px-6 lg:h-28 lg:px-8">
        <div className="absolute left-4 top-1/2 flex h-24 w-24 -translate-y-1/2 items-center  overflow-hidden sm:left-6 sm:h-28 sm:w-28 lg:left-8 lg:h-32 lg:w-32">
          <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
        </div>

        <nav className="flex items-center gap-3 text-sm font-semibold sm:gap-5 sm:text-base lg:gap-8 lg:text-lg">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `transition hover:text-[#014d41] ${isActive ? 'text-[#d8fffc]' : 'text-[#00786c]'}`
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