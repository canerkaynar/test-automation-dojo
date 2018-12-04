import Signin from '../components/Signin';
import styled from 'styled-components';
import Link from 'next/link';
import Navigation from '../components/Navigation';

const Columns = styled.div`
    .create-account {
        text-decoration: underline;
        line-height: 1.4;
    }
`;

const SignupPage = props => (
  <Columns>
    <Navigation/>
    <h1>Hello</h1>
    <h2>
        <span>Sign in to Dojo or </span>
        <Link href={'/signup'}>
            <a className="create-account">create an account</a>
        </Link>
    </h2>
    <Signin title={false}/>
  </Columns>
);

export default SignupPage;