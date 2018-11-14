import Nav from './Nav';
import styled from 'styled-components';
import Link from 'next/link';

const Logo = styled.div`
    text-align: center;

        a {
            padding: 1rem 1rem;
            color: white;
            text-transform: uppercase;
            text-decoration: none;
        }
        img {
            vertical-align: middle;
            margin-left: -15px;
        }
    @media (max-width: 1300px) {
        margin: 0;
        text-align: center;
    }
`;

const StyledHeader = styled.nav`

    width: 290px;
    position: absolute;
    bottom: 30px;
    top: 0;
    overflow: auto;
    left: 0;
    background-color: ${props => props.theme.blackLight};
    padding: 2rem;
    color: ${props => props.theme.greyLight};
    border-right: 1px solid black;

    .bar {
        margin: 0 auto;
    }
    .search-container { 
        position: relative;
        input {
            padding: 7px;
            width: 100%;
            color: #aaa;
            border: 1px solid #585858;
            background-color: #373737;
            border-radius: 2px;
        }
    }
    .title {
        text-align: center;
        line-height: 4rem;
    }
    .example-list {
        list-style: none;
        padding: 0 2px;
        margin-left: 0;
        li {
            border-left: 1px solid black;
            cursor: pointer;
        }
        li:hover {
            background-color: rgba(97, 218, 251, 0.098);
            color: rgb(227, 230, 232);
            border-color: rgb(5, 161, 204);
        }
        a {
            color: ${props => props.theme.greyLight};
            width: 100%;
            display: block;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 12px;
}
        }
    }
`;

const examples = [
    {title: 'Input', url: '/input'},
    {title: 'Checkbox', url: '/checkbox'},
    {title: 'Dropdown', url: '/dropdown'},
    {title: 'Hovers'},
    {title: 'Radio Button'},
    {title: 'Link'},
    {title: 'Redirect Link'},
    {title: 'Button'},
    {title: 'Datepicker'},
    {title: 'File Download'},
    {title: 'Img Source Control'},
    {title: 'List Items'}
]

const Header = () => (
    <StyledHeader>
        <Logo className="bar">
            <a href="/">
                <img src="/static/kloia-logo.png" srcSet="/static/kloia-logo.png 1x, /static/kloia-logo-2x.png 2x" width="130" height="58"/>
            </a>
        </Logo>
        <h1 className="title">TEST AUTOMATION<br/>DOJO</h1>
            {/*<Nav/>*/}
        <div className="search-container">
            <input type="text" placeholder="search"/>
        </div>
        <ul className="example-list">
            {examples.map((item,index) => {
                return <li key={index}>
                    <Link href={item.url ? item.url : '/'}>
                        <a>{item.title}</a>
                    </Link>
                </li>
            })}
        </ul>
        
    </StyledHeader>
)

export default Header