import PageContainer from "../../../components/PageContainer";
import about1 from "../../../assets/about1.JPG";
import about2 from "../../../assets/about2.JPG";
import aboutLogo from "../../../assets/aboutLogo1.PNG";
import './styles.scss';

export default function introduce() {

  return (

    <>
      <PageContainer>
        <div className="introduce">
          <p className="para1">
            엔터테인먼트 디자이너들의 라이선스 마켓 커뮤니티
          </p>

          <p className="para1">
          CONNTA
          </p>

          <p className="para2">
            대중 미술 아티스트들의 창의적인 아이디어와 예술적 역량을 기반으로 한 다양한 캐릭터 IP가 새로운 디자인 마켓 및 갤러리 커뮤니티에서 활짝 피어나고 있습니다.
            CONNTA는 캐릭터 제작, 콘텐츠 제작, 상품 제작, 그리고 팬덤 커뮤니티가 함께 하는 아티스트와 팬 사이의 유기적인 상호작용을 촉진하는 새로운 K-Art 가능성을 세상에 알리고 그 중심에서 가장 유기적인 역할을 하기위해 만들어진 플랫폼입니다.
          </p>

          <p className="para3">
            CONNECTED TO ART EVERYWHERE
          </p>
          <div>
            <img className='about' src={about1} alt="about image1" />
            <img className='about' src={about2} alt="about image2" />
          </div>

          <img className='aboutLogo' src={aboutLogo} alt="about logo1" />
        </div>
      </PageContainer>
    </>

  );

}