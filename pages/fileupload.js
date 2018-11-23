import Dropzone from 'react-dropzone'


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
            <React.Fragment>
                <h2>File Upload</h2>
                <section>
                    <div className="dropzone">
                    <Dropzone
                        onDrop={this.onDrop.bind(this)}
                        onFileDialogCancel={this.onCancel.bind(this)}
                    >
                        <p>Try dropping some files here, or click to select files to upload.</p>
                    </Dropzone>
                    </div>
                    <aside>
                    <h3>Dropped files</h3>
                    <ul>
                        {
                        this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                    </aside>
                </section>
            </React.Fragment>   
        )
    }
};

