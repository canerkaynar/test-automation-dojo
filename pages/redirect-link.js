import FormStyle from '../components/styles/Form.js';
import styled from 'styled-components';
import Breadcrumb from '../components/Breadcrumb.js';

const RedirectStyle = styled.div`
    a {
        text-decoration: underline;
    }
    .content {
        width: auto;
    }
`;


export default class RedirectLink extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumb currentPage="Redirect Link"/>
                <h2>Redirect Link</h2>
                <RedirectStyle>
                    <FormStyle onSubmit={(e) => e.preventDefault()}>
                        <div className="content">
                        Kloia is a new-era consultancy company who is an accelerator for closing the technology gap through the adoption of modern practices in Cloud, DevOps, Test Automation and Microservices.
                        Besides, Kloia is providing AWS and DevOps Dojos via Skillsmatterm universe.com and Eventbrite.
                        <br/><br/><a href="http://www.kloia.com">kloia.com</a>
                        <br/><br/><a href="http://www.kloia.co.uk" target="_blank">kloia.co.uk</a>
                        </div>
                    </FormStyle>
                </RedirectStyle>
            </React.Fragment>
            
        )
    }
};
