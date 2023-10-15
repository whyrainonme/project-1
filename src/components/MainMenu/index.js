import './styles.scss';
import { NavLink } from 'react-router-dom';

export default function MainMenu() {

  return (

    <nav className='main'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/service'>Service</NavLink>
      <NavLink to='/artist'>Artist</NavLink>
      <NavLink to='/shop'>Shop</NavLink>
      <NavLink to='/gallery'>Gallery</NavLink>
      <NavLink to='/board'>Board</NavLink>
      <NavLink to='/news'>News</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </nav>

  );

}