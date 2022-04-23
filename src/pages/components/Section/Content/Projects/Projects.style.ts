import styled from 'styled-components';

const ProjectsStyle = styled.div`
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    padding-bottom: 40px;

    a:link {
      font-size: 16pt;
      color: white;
      font-weight: bolder;

      &:hover {
        background-color: blue;
      }
    }
    p {
      margin-top: 10px;
    }
  }
`;

export default ProjectsStyle;
