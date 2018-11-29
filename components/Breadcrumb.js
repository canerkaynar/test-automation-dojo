import styled from 'styled-components';
import Link from 'next/link';


const BreadcrumbStyle = styled.div`
    .breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style: none;
        list-style-image: none;
        li {
            display: inline-block;
            padding: 2px;
            position: relative;
            margin-left: 30px;
            &:first-child {
                padding-left: 0;
                margin-left: 0;
                &::before {
                    content: '';
                }   
            }
            &::before {
                content: '»';
                position: absolute;
                color: #404040;
                left: -19px;
            }
            a {
                display: inline-block;
            }
        }
    }
    .seperator {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #e1e4e5;
        margin: 10px 0 20px 0;
        padding: 0;
    }
`;

const BreadCrumb = ({currentPage}) => (
    <BreadcrumbStyle>
        <ul className="breadcrumb-list">
            <li>
                <Link href="/"><a>Home</a></Link>
            </li>
            <li>{currentPage}</li>
        </ul>
        <div className="seperator"></div>
    </BreadcrumbStyle>
)

export default BreadCrumb;