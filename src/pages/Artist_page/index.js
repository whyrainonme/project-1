import PageContainer from '../../components/PageContainer';
import './styles.scss';

export default function Artist() {

  return (
    
    <>
      <PageContainer>
        <div className="artist">
          <div className='about'>Artists</div>
          <p className="para1">
            CONNTA의 멤버가 되고 싶은 아티스트라면 누구나 포트폴리오 등록 및 관리/프로젝트 협업 제안 관련해 메일로 문의 주세요.
          </p>

          <div className='about'>Brands&Agency</div>
          <p className="para2">
            아티스트 서칭 및 컨택에 도움이 필요하거나, 함께 아트 프로젝트 및 광고 제휴를 하고 싶은
            브랜드/에이전시 담당자 분들은 메일로 문의주세요.
          </p>
        </div>
      </PageContainer>
    </>

  );

}