import Link from 'next/link';
import { IGitHubRepository } from '../../../..';
import StyledContent from '../Content.style';

const ContentProjects = (
  gitHubRepositories
): JSX.Element => {
  return (
    <StyledContent>
      <h1 id="projetos">Projetos</h1>
      {/* {gitHubRepositories.map((repository: IGitHubRepository) => {
        return (
          <div key={repository.name}>
            <Link href={repository.html_url}>
              <a target="_blank">
                <abbr title={repository.description}>{repository.name}</abbr>
              </a>
            </Link>
          </div>
        );
      })} */}
    </StyledContent>
  );
};

export default ContentProjects;
