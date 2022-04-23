import styled from 'styled-components';
import theme from '../../styles/theme';

interface IPropsSection {
  backgroundImg: string;
}

const StyledSection = styled.section<IPropsSection>`
  padding: 20px 0;
  background: ${theme.color.background}
    url(/assets/${(props) => props.backgroundImg}) no-repeat;
  background-size: cover;
  position: relative;

  &::after {
    content: '';
    background-color: #000000b0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export default StyledSection;
