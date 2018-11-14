import styled from 'styled-components';

const FooterStyle = styled.footer`
    padding-top: 3px;
    line-height: 35px;
    height: 35px;
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: #1D3A6D;
    color: #ebf8ff;
    text-align: center;
`;

const Footer = () => (
    <FooterStyle>
        CLOUD, DEVOPS AND MICROSERVICES CONSULTING © 2018
    </FooterStyle>
)

export default Footer;