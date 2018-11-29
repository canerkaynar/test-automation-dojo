import styled from 'styled-components';
import SickButton from '../components/styles/SickButton.js';
import Breadcrumb from '../components/Breadcrumb.js';


const StyledHovers = styled.div`
    .hover-explanation-wrapper {
        margin-top: 20px;
    }

    .hover-explanation {
        display: none;
      }
    }
`;
export default class Hovers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover1: false
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
        const {hover1} = this.state;

        return (
            <StyledHovers>
                <Breadcrumb currentPage="Hovers"/>
                 <h2>Hovers</h2>
                    <SickButton onMouseEnter={() => this.hoverOn("hover1")} 
                         onMouseLeave={() => this.hoverOff("hover1")}
                         className="hover-item-box">HOVER ME!
                    </SickButton>
                    <div className="hover-explanation-wrapper">
                        {hover1 &&
                            <div className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of 
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                            software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        }
                    </div>
            </StyledHovers>
        )
    }
};
