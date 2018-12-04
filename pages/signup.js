import Signup from '../components/Signup';
import Navigation from '../components/Navigation';
import styled from 'styled-components';

const Columns = styled.div`

`;

const SignupPage = props => (
  <Columns>
    <Navigation/>
    <h2>Create an account</h2>
    <Signup title={false}/>
  </Columns>
);

export default SignupPage;