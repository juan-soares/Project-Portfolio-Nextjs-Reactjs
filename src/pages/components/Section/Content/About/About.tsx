/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import StyledContent from '../Content.style';

const ContentAbout = (): JSX.Element => {
  return (
    <StyledContent>
      <h1 id="sobre">Sobre</h1>
      <p>
        Olá! Sou o Juan, estudante de Sistemas para Internet na {''}
        <abbr title="Universidade Anhembi Morumbi">
          <Link href="https://portal.anhembi.br/">
            <a target="_blank">UAM</a>
          </Link>
        </abbr>
        , e neste portifólio te convido a conhecer um pouco de minhas
        habilidades como{' '}
        <b>
          programador <i>front-end</i>
        </b>
        .
      </p>
      <p>
        Nasci e cresci em São Paulo, Brasil. Embora tenha escolhido{' '}
        <i>Turismo & Hospitalidade</i> como minha primeira formação, encontrei
        no mundo da {''}
        <i>Tecnologia & Programação</i> minha verdadeira paixão.
      </p>
      <p>
        Com fluência em inglês, somado aos <i>"PhDs"</i> em curiosidade e
        persistência, venho aprofundando meus conhecimentos através de cursos{' '}
        <i>online</i>, <i>networking</i> e materiais <i>open source</i>, que me
        auxiliam na construção de projetos pessoais, disponiveis em minha página
        do{' '}
        <Link href="https://github.com/juan-soares">
          <a target="_blank">GitHub</a>
        </Link>
        .
      </p>
    </StyledContent>
  );
};

export default ContentAbout;
