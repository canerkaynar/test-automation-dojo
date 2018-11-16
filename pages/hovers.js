import styled from 'styled-components';
import FormStyle from '../components/styles/Form.js';
import Head from 'next/head'

const StyledHovers = styled.div`
    .hover-item-box {
        display: inline-block;
        width: 100px;
        padding: 10px;
        background-color: white;
        text-align: center;
        border: 1px solid #212729;

        & + .hover-item-box {
            margin-left: 20px
        }

        &:hover {
            cursor: pointer;
        }
    }
    .hover-explanation-wrapper {
        height: 200px;
        width: 220px;
        border: 1px solid #212729;
        margin-top: 20px;
    }

    .hover-explanation {
        display: none;
    }

    .active {
        display: block;
    }
`;
export default class Hovers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover1: false,
            hover2: false
        }
    }

    hoverOn(index) {
        this.setState({
            ...this.state,
            [index]: true
        })
    }

    hoverOff(index) {
        this.setState({
            ...this.state,
            [index]: false
        })
    }

    render() {
        const {hover1, hover2} = this.state;

        return (
            <StyledHovers>
                <FormStyle onSubmit={(e) => e.preventDefault()}>
                    <h2>Hovers</h2>
                    <div onMouseEnter={() => this.hoverOn("hover1")} 
                         onMouseLeave={() => this.hoverOff("hover1")}
                         className="hover-item-box">HOVER ME!
                    </div>
                    <div onMouseEnter={() => this.hoverOn("hover2")} 
                         onMouseLeave={() => this.hoverOff("hover2")}
                         className="hover-item-box">HOVER ME!
                    </div>
                    <div className="hover-explanation-wrapper">
                        {hover1 &&
                            <div>hover1</div>
                        }
                        <div className={`hover-explanation ${hover2 && "active"}`}>hover2</div>
                    </div>
                </FormStyle>
            </StyledHovers>
        )
    }
};
