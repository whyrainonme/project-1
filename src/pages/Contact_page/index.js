import PageContainer from "../../components/PageContainer";
import verdot1 from "../../assets/Verdot1.png";
import './styles.scss';

export default function Contact() {

  return (

    <>
      <PageContainer className="CONTACT">
        <div className="contact">
          <img className='contact_img' src={verdot1} alt="contact img" />
          <div className="contact_para">
            CONTACT
            <p className="contact_para2">
              We Will appreciate it if you feel free to contact us for business collaboration, entry, and various inquires.
            </p>
            <p className="contact_para3">
              비즈니스 협엽, 입점, 각종 문의 사항은 언제든 자유롭게 문의 주시면 감사하겠습니다.
            </p>
            <a href="mailto:ohrysis@gmail.com" className="contact_email">ohrysis@gmail.com</a>
          </div>
        </div>
      </PageContainer>
    </>

  );

}