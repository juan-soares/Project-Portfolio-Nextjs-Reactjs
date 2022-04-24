import styled from 'styled-components';

const CertificationsCarroucel = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  text-align: center;

  div {
    padding: 0 20px;
    width: 200px;

    a:link {
      color: white;
      font-size: 10pt;

      label {
        display: block;
        margin: 15px 0 30px 0;

        &:hover {
          background-color: blue;
          cursor: pointer;
        }
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export default CertificationsCarroucel;
