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
`;

const examples = [
    {title: 'Input', url: '/input'},
    {title: 'Checkbox', url: '/checkbox'},
    {title: 'Dropdown', url: '/dropdown'},
    {title: 'Hovers', url: '/hovers'},
    {title: 'Redirect Link'},
    {title: 'Button'},
    {title: 'Datepicker'},
    {title: 'File Download'},
    {title: 'Img Source Control'},
    {title: 'List Items'}
]

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            pageList: [],
            selectedItemTitle: props.selectedPage
        };
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            pageList: examples
        })
    }

    searchData = (e) => {
        let queryData = [];
        
        if(e.target.value !== '') {
            //console.log(pageList,e.target.value)
            queryData = examples.filter(item => item.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
            this.setState({
                ...this.state,
                pageList: queryData
            });
        } else {
            this.setState({
                ...this.state,
                pageList: examples
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
        const {pageList, selectedItemTitle} = this.state;

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