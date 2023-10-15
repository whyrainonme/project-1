import { appName } from './../../includes/variables';
import { Link } from 'react-router-dom';
import { ReactComponent as ConntaLogo } from './../../assets/logo.svg';
import './styles.scss';

import MainMenu from '../MainMenu';

export default function Header() {

  return (
    <>
      <header className='main'>
        <Link to='/'>
          <ConntaLogo />
        </Link>
        <div>{appName}</div>
      </header>
      
      <MainMenu />
    </>
  );

}