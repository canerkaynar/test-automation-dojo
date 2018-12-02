import styled from 'styled-components';

const Title = styled.div`
  text-align: left;
  //transform: skew(-5deg) rotate(-1deg);
  //text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  div {
    //background: ${props => props.theme.red};
    display: inline;
    line-height: 1.4;
    font-size: 2rem;
    text-align: center;
    color: black;
    padding: 0 1rem;
    text-transform: uppercase;
    font-family: "roboto bold";
  }
`;

export default Title;
