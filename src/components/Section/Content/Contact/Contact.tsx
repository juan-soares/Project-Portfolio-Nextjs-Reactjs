import Link from 'next/link';
import ContactList from './Contact.style';
import StyledContent from '../Content.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const ContentContact = (): JSX.Element => {
  return (
    <StyledContent>
      <h1 id="contato">Contato</h1>
      <ContactList>
        <li>
          <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x" />
          <label>juan.css013@gmail.com</label>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/juan-soares">
            <a target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <label>/juan-soares</label>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/juan-soares">
            <a target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" />
              <label>/juan-soares</label>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://api.whatsapp.com/send?phone=55011982479307">
            <a target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              <label>+55 (011) xxxx-9307</label>
            </a>
          </Link>
        </li>
      </ContactList>
    </StyledContent>
  );
};

export default ContentContact;
