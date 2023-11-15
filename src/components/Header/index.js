import { appName } from './../../includes/variables';
import { Link } from 'react-router-dom';
import logo from './../../assets/CONNTA.PNG';
import './styles.scss';

import MainMenu from '../MainMenu';

export default function Header() {

  return (

    <>
      <Link to='/'>
        <header className='main'>
          <img src={logo} alt="logo" />
          <div>{appName}</div>
        </header>
      </Link>

      <MainMenu />
    </>
    
  );

}