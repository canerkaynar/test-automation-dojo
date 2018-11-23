import FormStyle from '../components/styles/Form.js';
import SickButton from '../components/styles/SickButton.js';
import styled from 'styled-components';

const ButtonStyle = styled.div`

    .btn {
        background: white;
        color: #23282A;
        border: 1px solid #23282A;
        border-radius: 0;
        font-size: 2rem;
        padding: 0.8rem 1.5rem;
        display: inline-block;
        width: auto;
        transition: all 0.3s;
            &[disabled] {
                opacity: 0.3;
            }
        &:hover {
            cursor: pointer;
            background-color: #23282A;
            color: white;
        }    
    }
`;


const Buttons = () => {

    return (
        <ButtonStyle>
            <h2>Buttons</h2>
            <input className="btn" type="button" value="Input Button"/><br/><br/>
            <SickButton title="button-title">Button</SickButton><br/><br/>
            <a className="btn" href="#">Link Button</a>
        </ButtonStyle>
    )
};

export default Buttons;
