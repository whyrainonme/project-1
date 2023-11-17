import PageContainer from '../../components/PageContainer';
import verdot2 from "../../assets/Verdot2.png";
import logo from "../../assets/logo.PNG";
import logos from "../../assets/logo-black.png";
import './styles.scss';

export default function Connta() {

  return (

    <>
      <PageContainer className='connta-page'>
        <div className="home">
          <img className='home_img1' src={verdot2} alt="connta img" />
          <div className='logo'>
            <img className='home_img2' src={logo} alt="connta img" />
            <img className='home_img3' src={logos} alt="connta logo" />
          </div>
        </div>
      </PageContainer>
    </>

  );

}