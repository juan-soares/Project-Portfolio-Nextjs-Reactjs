import StyledSection from './Section.style';
import { ISection } from '../../index';
import ContentHome from './Content/Home/Home';
import ContentAbout from './Content/About/About';
import ContentSkills from './Content/Skills/Skills';
import ContentCertifications from './Content/Certifications/Certifications';
import ContentProjects from './Content/Projects/Projects';
import ContentContact from './Content/Contact/Contact';

const Section = (section: ISection): JSX.Element => {
  return (
    <StyledSection backgroundImg={section.background}>
      {section.title == 'home' && <ContentHome />}
      {section.title == 'sobre' && <ContentAbout />}
      {section.title == 'skills' && <ContentSkills />}
      {section.title == 'certificações' && <ContentCertifications />}
      {section.title == 'projetos' && <ContentProjects />}
      {section.title == 'contato' && <ContentContact />}
    </StyledSection>
  );
};

export default Section;
