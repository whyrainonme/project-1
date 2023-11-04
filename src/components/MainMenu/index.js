import './styles.scss';
import { NavLink } from 'react-router-dom';

// Navbar
export default function MainMenu() {

  return (

    <nav className='main'>

      <div className="connta">
        <button className='conntabtn'>
          {/* CONNTA menu with contents */}
          <NavLink to='/connta'>CONNTA</NavLink>
        </button>
        <div className='connta-content'>
          <div className='row'>
            <div className='column'>
              <NavLink to='/connta/introduce'>INTRODUCE</NavLink>
              <NavLink to='/connta/design_consult'>DESIGN CONSULT</NavLink>
              <NavLink to='/connta/news'>NEWS</NavLink>
              <NavLink to='/connta/events'>EVENTS</NavLink>
            </div>
          </div>
        </div>

      </div>
      <NavLink to='/artist'>ARTIST</NavLink>
      <NavLink to='/performance'>PERFORMANCE</NavLink>
      <NavLink to='/collabo'>COLLABO</NavLink>
      <NavLink to='/shop'>SHOP</NavLink>
    </nav>

  );

}