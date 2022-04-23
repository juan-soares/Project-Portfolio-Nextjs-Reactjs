import Link from 'next/link';
import { IGitHubRepository, IPropsGitHubRepositories } from '../../../..';
import StyledContent from '../Content.style';
import ProjectsStyle from './Projects.style';

const ContentProjects = ({
  gitHubRepositories,
}: IPropsGitHubRepositories): JSX.Element => {
  return (
    <StyledContent>
      <h1 id="projetos">Projetos</h1>
      <ProjectsStyle>
        <>
          {gitHubRepositories.map((repository: IGitHubRepository) => {
            return (
              <div key={repository.name}>
                <Link href={repository.html_url}>
                  <a target="_blank">
                    <h2>{repository.name}</h2>
                    <p>{repository.description}</p>
                  </a>
                </Link>
              </div>
            );
          })}
        </>
      </ProjectsStyle>
    </StyledContent>
  );
};

export default ContentProjects;