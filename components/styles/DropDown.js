import styled, { keyframes } from 'styled-components';

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid ${props => props.theme.lightgrey};
  border-radius: 2px;
`;

const DropDownItem = styled.div`
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  background: ${props => (props.highlighted ? props.theme.lightgrey : '#fcfcfc')};
  padding: 1rem;
  transition: all 0.2s;
  //${props => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  cursor: pointer;
  //border-left: 10px solid ${props => (props.highlighted ? props.theme.lightgrey : 'white')};
  img {
    margin-right: 10px;
  }
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px #fbef00;;
  }

  to {
    box-shadow: 0 0 10px 1px #fbef00;;
  }
`;

const SearchStyles = styled.div`
  position: relative;
  margin-bottom: 40px;
  input {
    width: 100%;
    padding: 10px;
    border: 0;
    font-size: 1.5rem;
    border: 1px solid #e1e1e1;
    border-radius: 0 0 2px 2px;
    background: #fcfcfc;
    &.loading {
      //animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };
