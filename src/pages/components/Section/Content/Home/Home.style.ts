import styled from 'styled-components';
import theme from '../../../../styles/theme';

const StyledContentHome = styled.div`
  @keyframes showcontent {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation-duration: 3s;
  animation-name: showcontent;
  padding: 5% 10%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  z-index: 1;

  div {
    h1 {
      font-size: 80px;
      text-align: center;
    }

    h2 {
      font-family: ${theme.fontFamily.paragraph};
      font-size: 30px;
      text-align: center;
      margin: 0 10px 30px;
      background-color: blue;
    }
  }

  img {
    border-radius: 200px;
  }

  .videoContainer {
    width: 100%;
    height: 100%;
    background-color: black;
    position: absolute;
    z-index: -1;
    opacity: 0.2;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default StyledContentHome;
