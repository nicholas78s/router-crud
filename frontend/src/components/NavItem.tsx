import { NavLink } from 'react-router-dom'

interface INavItemProps {
  label: string;
  link: string;
}

export const NavItem = ({label, link}: INavItemProps) => {
  return (
    <NavLink className={({isActive}) => isActive ? 'menu__item menu__item-active' : 'menu__item'} to={link}>{label}</NavLink>
  )
}
