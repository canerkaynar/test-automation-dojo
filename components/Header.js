import styled from 'styled-components';
import Link from 'next/link';

const Logo = styled.div`
    text-align: center;

        a {
            color: white;
            text-transform: uppercase;
            text-decoration: none;
            display: inline-block;
        }
        img {
            vertical-align: middle;
        }
    @media (max-width: 1300px) {
        margin: 0;
        text-align: center;
    }
`;

const StyledHeader = styled.nav`

    width: 245px;
    position: fixed;
    bottom: 0;
    top: 0;
    overflow: auto;
    left: 0;
    background-color: ${props => props.theme.blackLight};
    padding: 2rem 1.5rem;
    color: ${props => props.theme.greyLight};
    border-right: 1px solid black;
    height: 100%;

    .bar {
        margin-left: -15px;
        margin-bottom: 30px;
        margin-top: 10px;
    }
    .search-container { 
        position: relative;
        input {
            border: 1px solid #585858;
            background-color: #373737;
            width: 100%;
            padding: 7px 10px 7px 10px;
            font-size: 1.5rem;
            border-radius: 2px;
            font-family: 'roboto regular';
            color: ${props => props.theme.greyLight};
        }
        input:focus {
            outline: none;
        }
    }
    .title {
        text-align: center;
        line-height: 4rem;
    }
    .example-list {
        list-style: none;
        padding: 0;
        margin: 0;
        background: #373737;
        li {
            border-left: 1px solid #373737;
            cursor: pointer;
        }
        .active {
            background-color: rgba(97, 218, 251, 0.098);
            color: rgb(227, 230, 232);
            border-color: rgb(5, 161, 204);
        }
        a {
            color: ${props => props.theme.greyLight};
            width: 100%;
            display: block;
            padding-top: 8px;
            padding-bottom: 8px;
            padding-left: 12px;
        }
        a:hover {
            color: #e6e6e6;
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
        padding: 0;
        text-align: center;
        margin: 15px 0 0 0;
        display: block;
        border: 1px solid #373737;
        border-bottom: none;
        li {
            cursor: pointer;
            display: inline-block;
            padding: 12px 6px;
            font-family: 'roboto bold';
            width: 100px;
            color: ${props => props.theme.greyLight};
            &:first-child {
                width: 112px;
            }            
        }

        li:hover {
            color: #e6e6e6;
        }
        .active {
            color: rgb(8, 160, 204);
            background: #373737;
        }
        .active:hover {
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
    {title: 'File Upload', url: '/fileupload'}
],
scenarios: [
    {title: 'Basic Auth', url: '/basic-auth', category: 'scenarios'}
]};

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            pageList: examples['components'],
            selectedItemTitle: props.selectedPage,
            activeCategory: 'components',
            searchValue: ''
        };
    }


    searchData = (e) => {
        const {activeCategory} = this.state;
        let queryData = [];

        if(e.target.value !== '') {
            queryData = examples[activeCategory].filter(item => item.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
            this.setState({
                ...this.state,
                pageList: queryData,
                searchValue: e.target.value
            });
        } else {
            this.setState({
                ...this.state,
                pageList: examples[activeCategory],
                searchValue: ''
            });
        }
    }

    clickCategory = (e) => {
        if(e.target.innerText !== '') {
            if (this.state.searchValue !== '') {
                let queryData = examples[e.target.innerText.toLowerCase()].filter(item => item.title.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1);
                console.log(examples[e.target.innerText.toLowerCase()])
                this.setState({
                    ...this.state,
                    pageList: queryData,
                    activeCategory: e.target.innerText.toLowerCase()
                });
            } else {
                this.setState({
                    ...this.state,
                    pageList: examples[e.target.innerText.toLowerCase()],
                    activeCategory: e.target.innerText.toLowerCase()
                });
            }

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
                <div className="search-container">
                    <input type="text" placeholder="Search..." onChange={this.searchData}/>
                </div>
                <ul className="category-list">
                    <li className={activeCategory && activeCategory === 'components' ? 'active' : null} onClick={this.clickCategory}>COMPONENTS</li>
                    <li className={activeCategory && activeCategory === 'scenarios' ? 'active' : null} onClick={this.clickCategory}>SCENARIOS</li>
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