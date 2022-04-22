import styled from 'styled-components'
import theme from '../../../../styles/theme'

const ContactList = styled.ul`
  li {
    padding: 20px 0;
    font-style: italic;

    label {
      padding-left: 10px;
      cursor: pointer;

      &:hover {
        background-color: blue;
      }
    }
    a:link {
      color: ${theme.color.letters};

    }
  }
`

export default ContactList
