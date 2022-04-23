import styled from 'styled-components';

const StyledContent = styled.div`
  @media all and (max-width: 550px) {
    li {
      margin-bottom: 20px;
    }
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 10%;
  position: relative;
  z-index: 1;

  h2 {
    font-size: 18pt;
    padding-bottom: 20px;
    padding-top: 20px;
  }

  li {
    padding-bottom: 10px;
    label {
      font-size: 14pt;
      padding-left: 10px;
    }
  }

  p {
    a:link {
      color: yellow;
      text-decoration: none;
    }
  }
`;

export default StyledContent;
