import styled from 'styled-components';

const SickButton = styled.button`
  background: white;
  color: #23282A;
  border: 1px solid #23282A;
  border-radius: 0;
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
  display: inline-block;
  width: auto;
  transition: all 0.3s;
      &[disabled] {
          opacity: 0.3;
      }
  &:hover {
      cursor: pointer;
      background-color: #23282A;
      color: white;
  } 
`;

export default SickButton;
