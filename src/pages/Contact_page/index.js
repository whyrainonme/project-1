import PageContainer from "../../components/PageContainer";
import verdot1 from "../../assets/Verdot1.png";
import './styles.scss';

export default function Contact() {

  return (

    <>
      <PageContainer className="CONTACT">
        <div className="Contact">
          <img className='contact_img' src={verdot1} alt="contact img" />
        </div>
      </PageContainer>
    </>
    
  );

}