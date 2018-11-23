import React, { Component } from 'react';
import styled from 'styled-components';
import { Hook, Console, Decode } from 'console-feed';

const InspectorStyle = styled.div`
    height: calc(100% - 30px);
    width: 100%;
    color: #aaa;
    border: 1px solid #585858;
    background-color: #373737;
    border-radius: 2px;
    position: relative;

    .console-input {
        border: 0;
        background-color: #373737;
        color: ${props => props.theme.lightgrey};
        margin-left: 7px;
        width: 90%;
        font-size: 13px;
        height: 30px;
        font-family: Menlo, monospace;
    }
    .console-input:focus {
        outline: none;
    }
    .console-input-wrapper {
        position: absolute;
        width: 100%;
        border-top: 1px solid #585858;
        background-color: #373737;
        bottom: 0;
    }
    .console-feed {
        overflow: auto;
        width: 100%;
    }
    .cursor {
        margin-left: 12px;
        vertical-align: middle;
        color: ${props => props.theme.lightgrey};
    }
    .inner {
        background: #242424;
        position: relative;
        width: 100%;
        overflow: scroll;
        height: calc(100% - 30px);
    }
    [data-method = log] {
        line-height: normal;
        margin: 0;
        padding: 6px 3px 4px;
    }
`;

const ConsoleTitle = styled.span`
    color: ${props => props.theme.lightgrey};
    margin-left: 2px;
    font-family: 'roboto bold';
`;

const ClearButton = styled.button`
    float: right;
    height: 23px;
    margin-right: 2px;
    border-radius: 6px;
    background-color: #373737;
    color: ${props => props.theme.lightgrey};
    border-color: #00c0d7;
    cursor: pointer;
    :focus {
        outline: none;
    }
`;

class Inspector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: [
                {
                  method: 'result',
                  data: ['Result']
                },
                {
                  method: 'command',
                  data: ['Command']
                }
              ],
              filter: ['log'],
            value: ''
          }
    }

    componentDidMount() {
        Hook(window.console, log => {
          this.setState({ logs: [...this.state.logs, Decode(log)] });
        });
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      }
      
      componentDidUpdate(prevProps, prevState) {
        if (this.state.logs.length !== prevState.logs.length) {
            this.scrollToBottom();
        }
    }

    keyPress(e){
        if(e.keyCode === 13){
            console.log(e.target.value);
            try {
                let val = (0, eval)(e.target.value);
                window.console.log(val !== undefined ? val : 'undefined');
            } catch (err) {
                console.log(err);
            }
        }
     }

    handleChange = (e) => {
        this.setState({ 
            ...this.state,
            value: e.target.value 
        });
    }

    clearLogs = () => {
        this.setState({
            ...this.state,
            logs: []
        },() => console.log("Console logs was cleared!"));
    }

    render() {
        const { logs } = this.state;
        return (
            <React.Fragment>
                <ConsoleTitle>CONSOLE</ConsoleTitle>
                <ClearButton onClick={this.clearLogs}>CLEAR</ClearButton>
                <InspectorStyle>
                    <div className="inner">
                        <div className="console-feed">
                            <Console logs={logs} variant="dark" filter={this.state.filter}/>
                            <div style={{ float:"left", clear: "both" }}
                                ref={(el) => { this.messagesEnd = el; }}>
                            </div>
                        </div>
                    </div>
                    <div className="console-input-wrapper">
                        <span className="cursor">></span>
                        <input className="console-input" type="text" value={this.state.value} onKeyDown={this.keyPress} 
                        onChange={this.handleChange}/>
                    </div>
                </InspectorStyle>
            </React.Fragment>
        );
    }
}

export default Inspector;

  