import type { GetServerSideProps, NextPage } from 'next';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';

export interface ISection {
  title: string;
  background: string;
}

const HomePage: NextPage = ({gitHubRepositories}) => {
  const sections: ISection[] = [
    {
      title: 'home',
      background: '',
    },
    {
      title: 'sobre',
      background: '',
    },
    {
      title: 'skills',
      background: 'background-blue.jpg',
    },
    {
      title: 'certificações',
      background: '',
    },
    {
      title: 'projetos',
      background: 'background-red.jpg',
    },
    {
      title: 'contato',
      background: '',
    },
  ];

  return (
    <div>
      <Navbar sections={sections} />
      {sections.map((section: ISection) => (
        <Section
          key={section.title}
          title={section.title}
          background={section.background}
        />
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.github.com/users/juan-soares/repos');
  const gitHubRepositories = await res.json();

  return {
    props: { gitHubRepositories },
  };
};

export default HomePage;
