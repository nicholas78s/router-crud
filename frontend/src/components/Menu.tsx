import { NavItem } from './NavItem';

const navItems = [
  {label: 'Главная', link: '/'}
];

export const Menu = () => {
  return (
    <nav className="menu">
      {navItems.map(({label, link}) => (
        <NavItem key={label} link={link} label={label} />
      ))}
    </nav>
  )
}
