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

    width: 245px;
    position: absolute;
    bottom: 0;
    top: 0;
    overflow: auto;
    left: 0;
    background-color: ${props => props.theme.blackLight};
    padding: 2rem 1.5rem;
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
        margin: 5px 0 0 0;
        li {
            border-left: 1px solid black;
            cursor: pointer;
        }
        li:hover, .active {
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
    .no-results {
        color: #e0e0e0;
        width: 100%;
        display: block;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 13px;
    }

    .category-list {
        list-style: none;
        padding: 0 2px;
        text-align: center;
        margin: 15px 0 0 0;
        li {
            cursor: pointer;
            display: inline;
            padding: 6px;
            font-family: 'roboto bold';
        }
        li + li {
            border-left: 1px solid white;
        }
        li:hover, .active {
            color: rgb(8, 160, 204);
        }
    }
`;

const examples = {components:[
    {title: 'Input', url: '/input'},
    {title: 'Checkbox', url: '/checkbox'},
    {title: 'Dropdown', url: '/dropdown'},
    {title: 'Hovers', url: '/hovers'},
    {title: 'Redirect Link', url: '/redirect-link'},
    {title: 'Buttons', url: '/buttons'},
    {title: 'Datepicker', url: '/datepicker'},
    {title: 'File Upload', url: '/fileupload'},
    {title: 'Img Source Control', url: '/'}
],
scenerios: [
    {title: 'Basic Auth', url: '/basic-auth', category: 'scenerios'}
]};

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            pageList: examples['components'],
            selectedItemTitle: props.selectedPage,
            activeCategory: 'components'
        };
    }

    searchData = (e) => {
        const {activeCategory} = this.state;
        let queryData = [];

        if(e.target.value !== '') {
            queryData = examples[activeCategory].filter(item => item.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
            this.setState({
                ...this.state,
                pageList: queryData
            });
        } else {
            this.setState({
                ...this.state,
                pageList: examples[activeCategory]
            });
        }
    }

    clickCategory = (e) => {
        if(e.target.innerText !== '') {
            this.setState({
                ...this.state,
                pageList: examples[e.target.innerText.toLowerCase()],
                activeCategory: e.target.innerText.toLowerCase()
            });
        }
    }

    changeSelectedItem(title) {
        this.setState({
            ...this.state,
            selectedItemTitle: title
        })
    }

    render() {
        const {pageList, selectedItemTitle, activeCategory} = this.state;

        return(
            <StyledHeader>
                <Logo className="bar">
                    <a href="/">
                        <img src="/static/kloia-logo.png" srcSet="/static/kloia-logo.png 1x, /static/kloia-logo-2x.png 2x" width="130" height="58"/>
                    </a>
                </Logo>
                <h1 className="title">TEST AUTOMATION<br/>DOJO</h1>
                <div className="search-container">
                    <input type="text" placeholder="search" onChange={this.searchData}/>
                </div>
                <ul className="category-list">
                    <li className={activeCategory && activeCategory === 'components' ? 'active' : null} onClick={this.clickCategory}>COMPONENTS</li>
                    <li className={activeCategory && activeCategory === 'scenerios' ? 'active' : null} onClick={this.clickCategory}>SCENERIOS</li>
                </ul>
                <ul className="example-list">
                    {
                        pageList.length > 0
                        ? pageList.map((item,index) => {
                            return <li key={index} className={selectedItemTitle !== "" && selectedItemTitle === item.title ? "active": null}>
                                <Link href={item.url ? item.url : '/'}>
                                    <a onClick={() => this.changeSelectedItem(item.title)}>{item.title}</a>
                                </Link>
                            </li>
                            })
                        : <div className="no-results">No results found</div>
                    }
                </ul>
                
            </StyledHeader>
        )
    }
}