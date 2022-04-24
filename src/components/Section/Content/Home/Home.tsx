import Image from 'next/image';
import StyledContentHome from './Home.style';
import Profile from '../../../../../public/assets/profile.jpg';

const ContentHome = (): JSX.Element => {
  return (
    <StyledContentHome>
      <div>
        <h1>Juan Soares</h1>
        <h2>Desenvolvedor Front-end</h2>
      </div>
      <Image src={Profile} width="250px" height="280px"></Image>
      <div className="videoContainer">
        <video src="/assets/background.mp4" autoPlay muted loop />
      </div>
    </StyledContentHome>
  );
};

export default ContentHome;
