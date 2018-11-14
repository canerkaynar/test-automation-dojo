import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components'; 
import Resizable from 're-resizable';
import Header from './Header';
import Meta from './Meta';
import Footer from './Footer';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
    NProgress.start();
}
Router.onRouteChangeComplete = () => {
    NProgress.done();
}
Router.onRouteChangeError = () => {
    NProgress.done();
}

const DynamicInspector = dynamic({
    loader: () => import('./Inspector'),
    loading: () => <Loading id="loader"><div className="spinner" role="spinner"><div className="spinner-icon"></div></div></Loading>,
    ssr: false
  });

const theme = {
    red: '#FF0000',
    black: '#393939',
    blackLight: '#23282A',
    grey: '#3A3A3A',
    greyLight: '#e0e0e0',
    white: '#FFFFFF',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1050px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  };

const Loading = styled.div`
    background: #464749;
    height: 100%;
    position: relative;
    .spinner {
        display: block;
        z-index: 1031;
        top: 50%;
        right: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
    }
    
    .spinner-icon {
      width: 25px;
      height: 25px;
      box-sizing: border-box;
    
      border: solid 2px transparent;
      border-top-color: ${props => props.theme.greyLight};
      border-left-color: ${props => props.theme.greyLight};
      border-radius: 50%;
    
      -webkit-animation: loader-spinner 400ms linear infinite;
              animation: loader-spinner 400ms linear infinite;
    }
    
    .loader-custom-parent {
      overflow: hidden;
      position: relative;
    }
    
    .loader-custom-parent .spinner,
    .loader-custom-parent .bar {
      position: absolute;
    }
    
    @-webkit-keyframes loader-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes loader-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
`;

const StyledPage = styled.div`
    color: ${props => props.theme.black};
    .resizer-stick {
        div {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20' height='20' viewBox='0 0 1200 1200' style='&%2310;'%3E%3Cg%3E%3Cg transform='translate(600 600) scale(0.69 0.69) rotate(0) translate(-600 -600)' style='fill:%23FFFFFF;'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='%23FFFFFF' xml:space='preserve' version='1.1' style='shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;' viewBox='0 0 676 276' x='0px' y='0px' fill-rule='evenodd' clip-rule='evenodd'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E .fil0 %7Bfill:%23D9D8D8%7D %3C/style%3E%3C/defs%3E%3Cg%3E%3Cpath class='fil0' d='M22 0l631 0c33,0 27,81 0,81l-631 0c-5,0 -10,-2 -14,-5 -10,-11 -13,-76 14,-76z'/%3E%3Cpath class='fil0' d='M22 195l631 0c32,0 28,81 0,81l-631 0c-31,0 -27,-81 0,-81z'/%3E%3C/g%3E%3C/svg%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: center;
            top: 0 !important;
        }
    }
`;

const Inner = styled.div`
    //background: rgba(255, 255, 255, 0.7);
    border-radius: 6px;
    margin: 0 auto;
    padding: 2rem;
    left: 290px;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    overflow: auto;
    margin-bottom: 35px;

    .box {
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
        background: white;
        padding: 1rem;
        border-radius: 6px;
    }
`;


injectGlobal`
  @font-face {
    font-family: 'roboto condensed bold';
    src: url('/static/roboto-condensed-bold.woff2') format('woff2');
  }
  @font-face {
    font-family: 'roboto condensed regular';
    src: url('/static/roboto-condensed-regular.woff2') format('woff2');
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'roboto condensed regular';
    //background: #f1f1f1;
    background: url(https://kloia.co.uk/wp-content/uploads/sites/12/2018/03/kloia_background_v2.jpg);
    background-size: cover;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }

  button {  font-family: 'roboto condensed regular'; }
`;

/*const MyButton = styled.button`
    background: red;
    font-size: ${props => (props.huge ? '40px' : '20px')};
    font-family: 'Roboto Condensed', sans-serif;
`;*/

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            consoleHeight: 200,
        }
    }
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta/>
                    <Header/>                                            
                    <Inner>
                        {/*<div className="box"></div>*/}
                        {this.props.children}
                    </Inner>
                    <span className="resizer"></span>
                    <Resizable
                        className={"resize-console"}
                        style={{position: "absolute", bottom: 35, right: 0, left: 290, background: "#464749", padding: 10}}
                        size={{ height: this.state.consoleHeight }}
                        minHeight={83}
                        maxHeight={500}
                        handleWrapperClass={'resizer-stick'}
                        enable={{ top:true, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
                        onResizeStop={(e, direction, ref, d) => {
                            this.setState({
                                ...this.state,
                                consoleHeight: this.state.consoleHeight + d.height
                            });
                        }}
                        >
                        <DynamicInspector/>
                    </Resizable>
               
                    <Footer/>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;
