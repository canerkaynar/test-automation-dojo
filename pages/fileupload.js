import Dropzone from 'react-dropzone'
import Breadcrumb from '../components/Breadcrumb.js';
import styled from 'styled-components'; 

const FileUploadStyle = styled.div`
    .explanation {
        padding: 20px 10px;
    }
`;
export default class FileUpload extends React.Component {

    constructor() {
        super()
        this.state = { files: [] }
      }
    
      onDrop(files) {
        this.setState({
          files
        });
      }
    
      onCancel() {
        this.setState({
          files: []
        });
      }

    render() {
        return (
            <FileUploadStyle>
                <Breadcrumb currentPage="File Upload"/>
                <h2>File Upload</h2>
                <section>
                    <div className="dropzone">
                    <Dropzone
                        onDrop={this.onDrop.bind(this)}
                        onFileDialogCancel={this.onCancel.bind(this)}
                    >
                        <div className="explanation">Try dropping some files here, or click to select files to upload.</div>
                    </Dropzone>
                    </div>
                    <aside>
                    <h3>Dropped files</h3>
                    <ul>
                        {
                        this.state.files.map(f => <li key={f.name}>{f.name}</li>)
                        }
                    </ul>
                    </aside>
                </section>
            </FileUploadStyle>   
        )
    }
};

