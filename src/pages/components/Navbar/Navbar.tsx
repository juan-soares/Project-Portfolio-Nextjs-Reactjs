import StyledNavbar from './Navbar.style';
import { ISection } from '../../index';

interface ISections {
  sections: ISection[];
}

const Navbar = ({ sections }: ISections): JSX.Element => {
  return (
    <StyledNavbar>
      <ul>
        {sections.map((section: ISection) => {
          return (
            <li key={section.title}>
              <a href={section.title == 'home' ? '/' : `#${section.title}`}>
                {section.title}
              </a>
            </li>
          );
        })}
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
