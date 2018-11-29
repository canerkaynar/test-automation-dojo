import styled from 'styled-components';

const SickButton = styled.button`
  width: auto;
    font-size: 1.5rem;
    padding: 6px 12px;
    border-radius: 2px;
    background: #287dc0;
    border: 1px solid #287dc0;
    color: white;
    transition: all 0.1s;
      &[disabled] {
          opacity: 0.1;
      }
    &:hover {
        cursor: pointer;
        background-color: #186098;
        color: white;
    } 
`;

export default SickButton;
