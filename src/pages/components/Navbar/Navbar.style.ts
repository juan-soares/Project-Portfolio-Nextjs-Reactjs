import styled from 'styled-components';
import theme from '../../styles/theme';

const StyledNavbar = styled.nav`
  padding-top: 10px;
  width: 100%;
  background-color: ${theme.color.background};

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    li {
      padding: 10px;
      &:hover {
        background-color: white;
      }

      a {
        text-transform: capitalize;
        text-decoration: none;
        font-family: 'Bangers', cursive;
        font-size: 18pt;
        color: ${theme.color.letters};

        &:hover {
          color: black;
        }
      }
    }
  }
`;

export default StyledNavbar;
