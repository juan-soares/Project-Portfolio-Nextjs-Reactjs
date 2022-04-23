import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import StyledContent from '../Content.style';
import CertificationsCarroucel from './Certifications.style';
import cssCertificate from '../../../../../../public/assets/Descubra-o-CSS.png';
import programmingCertificate from '../../../../../../public/assets/Fundamentos-da-Programacao.png';
import agilManagementCertificate from '../../../../../../public/assets/Fundamentos-de-Gestao-Agil-de-Projetos.png';
import pooCertificate from '../../../../../../public/assets/Fundamentos-de-Programacao-Design-Orientado-a-Objetos.png';
import scrumCertificate from '../../../../../../public/assets/Fundamentos-do-Scrum.png';
import htmlCertificate from '../../../../../../public/assets/HTML-Formacao-Basica.png';
import javaScriptCertificate from '../../../../../../public/assets/JavaScript-Formacao-Basica.png';
import fullStackCertificate from '../../../../../../public/assets/Programador-Full-Stack-JavaScript-Profissional.png';

interface ICertificate {
  title: string;
  image: StaticImageData;
}

const ContentCertifications = (): JSX.Element => {
  const certificatesList: ICertificate[] = [
    {
      title: 'Descubra o CSS',
      image: cssCertificate,
    },
    {
      title: 'Fundamentos da Programação',
      image: programmingCertificate,
    },
    {
      title: 'Fundamentos de Gestão Ágil de Projetos',
      image: agilManagementCertificate,
    },

    {
      title: 'Fundamentos do Scrum',
      image: scrumCertificate,
    },
    {
      title: 'HTML: Formação Básica',
      image: htmlCertificate,
    },
    {
      title: 'JavaScript: Formação Básica',
      image: javaScriptCertificate,
    },
    {
      title: 'Programador Full Stack JavaScript Profissional',
      image: fullStackCertificate,
    },
    {
      title: 'Fundamentos de Programação: Design Orientado a Objetos',
      image: pooCertificate,
    },
  ];

  return (
    <StyledContent>
      <h1 id="certificações">Certificações</h1>
      <CertificationsCarroucel>
        {certificatesList.map((certificate) => {
          return (
            <div key={certificate.title}>
              <Link
                href={`http://localhost:3000/assets/${certificate.title
                  .normalize('NFC')
                  .replace(/: /g, '-')
                  .replace(/ /g, '-')
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')}.png`}
              >
                <a target="_blank">
                  <Image src={certificate.image} width="200px" height="200px" />
                  <label>{certificate.title}</label>
                </a>
              </Link>
            </div>
          );
        })}
      </CertificationsCarroucel>
    </StyledContent>
  );
};

export default ContentCertifications;
