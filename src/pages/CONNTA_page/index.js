import PageContainer from '../../components/PageContainer';
import verdot2 from "../../assets/Verdot2.png";
import logo from "../../assets/logo.PNG";
import './styles.scss';

export default function Connta() {

  return (

    <>
      <PageContainer className='connta-page'>
        <div className="home">
          <img className='home_img' src={verdot2} alt="connta img" />
          <img className='home_img' src={logo} alt="connta img" />
        </div>
      </PageContainer>
    </>

  );

}