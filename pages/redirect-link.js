import FormStyle from '../components/styles/Form.js';
import styled from 'styled-components';

const RedirectStyle = styled.div`
    a {
        text-decoration: underline;
    }
    .content {
        width: 500px;
    }
`;


const RedirectLink = () => {

    return (
        <RedirectStyle>
            <FormStyle onSubmit={(e) => e.preventDefault()}>
                <h2>Redirect Link</h2>
                <div className="content">
                Kloia is a new-era consultancy company who is an accelerator for closing the technology gap through the adoption of modern practices in Cloud, DevOps, Test Automation and Microservices.
                Besides, Kloia is providing AWS and DevOps Dojos via Skillsmatterm universe.com and Eventbrite.
                <br/><br/><a href="http://www.kloia.com">kloia.com</a>
                <br/><br/><a href="http://www.kloia.co.uk" target="_blank">kloia.co.uk</a>
                </div>
            </FormStyle>
        </RedirectStyle>
    )
};

export default RedirectLink;