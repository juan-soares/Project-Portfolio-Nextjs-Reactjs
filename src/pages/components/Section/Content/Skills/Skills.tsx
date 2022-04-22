import StyledContent from '../Content.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faLeaf, faForwardFast, faCompassDrafting, faBroom, faPerson } from '@fortawesome/free-solid-svg-icons'
import { Fragment } from 'react'

interface ITecnology {
  tecnology: string
  icon: JSX.Element
}

interface ISkill {
  skill: string
  tecnologies: ITecnology[]
}

const ContentSkills = (): JSX.Element => {
  const SkillsList: ISkill[] = [
    {
      skill: 'Front-end',
      tecnologies: [
        {
          tecnology: 'HTML 5 (SEO, Semântico, Acessibilidade, Responsivo);',
          icon: <FontAwesomeIcon icon={faHtml5} size="2x"/>,
        },
        {
          tecnology: 'CSS 3 (Sass, Styled-components, CSS-in-JS);',
          icon: <FontAwesomeIcon icon={faCss3} size="2x" />,
        },
        {
          tecnology: 'JavaScript (ECMAScript, Typescript);',
          icon: <FontAwesomeIcon icon={faJs} size="2x"/>,
        },
        {
          tecnology: 'ReactJS (SPA, Hooks, State, Router-DOM, Axios);',
          icon: <FontAwesomeIcon icon={faReact} size="2x"/>,
        },
      ],
    },
    {
      skill: 'Back-end',
      tecnologies: [
        {
          tecnology: 'Node.js (Express, Cors);',
          icon: <FontAwesomeIcon icon={faNode} size="2x"/>,
        },
        {
          tecnology: 'Next.js (SSR, SSG, SWR, API Routes);',
          icon: <FontAwesomeIcon icon={faNodeJs} size="2x"/>,
        },
        {
          tecnology: 'MongoDB (Mongoose);',
          icon: <FontAwesomeIcon icon={faLeaf} size="2x"/>,
        },
      ],
    },
    {
      skill: 'Conceitos',
      tecnologies: [
        {
          tecnology: 'Git;',
          icon: <FontAwesomeIcon icon={faGitAlt} size="2x"/>,
        },
        {
          tecnology: 'GitHub;',
          icon: <FontAwesomeIcon icon={faGithub} size="2x"/>,
        },
        {
          tecnology: 'POO',
          icon: <FontAwesomeIcon icon={faPerson} size="2x"/>,
        },
        {
          tecnology: 'Scrum',
          icon: <FontAwesomeIcon icon={faForwardFast} size="2x"/>,
        },
        {
          tecnology: 'Design Patterns',
          icon: <FontAwesomeIcon icon={faCompassDrafting} size="2x"/>,
        },
        {
          tecnology: 'Clean Code',
          icon: <FontAwesomeIcon icon={faBroom} size="2x"/>,
        },
      ],
    },
  ]

  return (
    <StyledContent>
      <h1 id='skills'>Skills</h1>
      {SkillsList.map((skill: ISkill) => {
        return (
          <Fragment key={skill.skill}>
            <h2>{skill.skill}</h2>
            <ul>
              {skill.tecnologies.map((tecnology: ITecnology) => {
                return (
                  <li key={tecnology.tecnology}>
                    <span>
                      {tecnology.icon}
                      <label>{tecnology.tecnology}</label>
                    </span>
                  </li>
                )
              })}
            </ul>
          </Fragment>
        )
      })}
    </StyledContent>
  )
}

export default ContentSkills
