import styled from 'styled-components';
import theme from '../../styles/theme';

const StyledNavbar = styled.nav`
  width: 100%;
  background-color: ${theme.color.background};
  padding: 20px 0;

  @media only screen and (max-width: 1015px) {
    ul {
      flex-direction: column;
      align-items: center;
    }
  }

  @media only screen and (min-width: 1015px) {
    ul {
      flex-direction: row;

    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      a {
        text-transform: capitalize;
        text-decoration: none;
        font-family: 'Bangers', cursive;
        font-size: 18pt;
        color: ${theme.color.letters};
        padding: 30px 50px;

        &:hover {
          color: black;
          background-color: white;
        }
      }
    }
  }
`;

export default StyledNavbar;
