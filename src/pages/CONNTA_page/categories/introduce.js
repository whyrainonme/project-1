import logo from "../../../assets/logo.PNG";
import intro1 from "../../../assets/intro1.png";
import intro2 from "../../../assets/intro2.png";
import aboutLogo from "../../../assets/aboutLogo1.PNG";
import './styles.scss';

export default function introduce() {

  return (

    <>
      <div className="introduce">
        <p className="para1">
          엔터테인먼트 디자이너들의 라이선스 마켓 커뮤니티
        </p>
        <img className='home_img1' src={logo} alt="connta img" />


        <pre className="para2">
          {'대중 미술 아티스트들의 창의적인 아이디어와 예술적 역량을 기반으로 한\n다양한 캐릭터 IP가 새로운 디자인 마켓 및 갤러리 커뮤니티에서 활짝 피어나고 있습니다.'}
        </pre>

        <pre className="para2">
          {'CONNTA는 캐릭터 제작, 콘텐츠 제작, 상품 제작, 그리고 팬덤 커뮤니티가 함께 하는\n 아티스트와 팬 사이의 유기적인 상호작용을 촉진하고 새로운 K-Art 가능성을 세상에 알리며,\n 그 중심에서 가장 유기적인 역할을 하기위해 만들어진 플랫폼입니다.'}
        </pre>

        <p className="para3">
          CONNECTED TO ART EVERYWHERE
        </p>
        <div className="intro">
          <img className='intro1' src={intro1} alt="intro img1" />
          <pre className="para4">
            {"CONNTA는 본질적인 아티스트와 소비자의 '바램'에서 부터 시작합니다."}
          </pre>
          <pre className="para4">
            {'2000년대 이후 무너진 대중미술 시장속에서\n거의 20년이란 시간 동안 버텨온 수많은 작가와 지지층들을 위한 위로이자, 그들이 바라는 커뮤니티를 구축 하고자 합니다.\n작가들은 어려운 난관 속에서도 생존했고, 해외수주 평균 30~40%라는 기적적인 점유율로 생존을 이어 왔습니다.'}
          </pre>
          <pre className="para4">
            {'하지만 기술 뿐이었던 상황에서 최근 5년간 급속으로 성장하는 웹툰을 통해 한국의 대중미술 시장의 가능성을 다시 한번 확인 하였고,'}
          </pre>
          <pre className="para4">
            {'이러한 기저를 통해 모두가 바라는 메타 커뮤니티를 만들어 그들의 다양한 콘텐츠와 브랜드 확장, 그리고 팬들의 만족으로\n90년대의 한국 대중 미술의 르네상스를 새롭게 실현 시켜 글로벌적으로 알리고자 합니다.'}
          </pre>
          <img className='intro2' src={intro2} alt="intro img2" />
        </div>

        <img className='aboutLogo' src={aboutLogo} alt="about logo1" />
      </div>
    </>

  );

}