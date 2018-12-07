import styled from 'styled-components'; 
import Note from './Note.js';
import FormStyle from '../components/styles/Form.js';


const NotebookStyle = styled.div`
    padding: 3rem 0.5rem;
    right: 0;
    top: 0;
    bottom: 0;
    width: 295px;
    position: fixed;
    overflow: hidden;
    background: #f1f1f1;
    height: 100%;

form {
    position: absolute;
    bottom: -30px;
    width: 100%;
    background-color: #f1f1f1;
    padding: 15px 10px 20px;
}

.container {
    position: relative;
    height: 100%;
    
}
.note-list {
    overflow-y: auto;
    padding: 0rem 1rem;
    position: absolute;
    bottom: 187px;
    top: 45px;
    width: 100%;
}
.note-list-title {
    padding: 0rem 1rem;
    font-family: 'roboto bold'; 
}
.note {
  display: inline-block;  
  background-color: transparent;  
  width: 100%;
  
  .inner {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    background: #fcfcfc;
    padding: 10px;
    border-radius: 5px;
    max-height: 150px;
    color: black;
    overflow-x: hidden;
    overflow-y: auto;
    border-bottom: 8px solid rgba(255, 255, 255, 0);

    input, textarea {
        width: 100%;
        font-size: 1.2rem;
        border: 1px solid #dfdfdf;
        &:focus {
            outline: 0;
        }
    }

    input + textarea {
        margin-top: 5px;
    }
  }
  .title-wrapper {
    background-color: #FFF275;
    padding: 4px 7px;
  }  
  .button-wrapper {
      vertical-align: middle;
      display: inline-block;
      float: right;
  }
  .btn {
        background-color: #58A33A;
        color: #FFF;
        margin: 1px 0px 1px 5px;
        float: right;
        font-size: 13px;
        padding: 2px 4px;
        border: none;
    }
  .del {
    background-color: #DD4B1A;
  }
  .save {
    background-color: #E9A553;
  }
  .title
   {  
    display: inline-block;
    padding-left: 1px;
  }
  .text {
    font-size: 12px;
    padding: 5px 0;
    min-height: 40px;
  }
}
fieldset {
      margin-bottom: 5px;
      & + fieldset {
        margin-top: 5px;
      }
  }
`;

export default class Notebook extends React.Component {
    
    constructor(props) {
     super(props);     
     this.state = {
         notes:[]
        };
   }
   
   componentDidMount() {
     let notes = window.localStorage.getItem("notes");
       if (notes)
          this.setState({
              notes: JSON.parse(notes)
            });
   }    
   
   newNote = (title, text) => { //prepend new object   
     let notes = [{title: title, text: text}].concat(this.state.notes);   
     this.saveNote(notes);
   } 
   
   saveNote(notes) {
     window.localStorage.setItem('notes', JSON.stringify(notes)); 
     this.setState({
         notes: notes
        });
   } 
   
   removeNote = (index) => {
     let notes = this.state.notes;
     notes.splice(index, 1);
     this.saveNote(notes);
   }
   
   updateNote = (index, title, text) => {
     let notes = this.state.notes;
     notes[index].title = title;
     notes[index].text = text;
     this.saveNote(notes);
   } 
        
   render() { 
    const instruction = <div>The app uses local storage to keep changes in the client's cache.
                          Click save button to add a new note. You can edit or delete notes. 
                          If you delete your browser's temporary files then you will lose your notes. </div>
     
     return ( 
        <NotebookStyle>
            <div className="container">
                <div className="note-list-title">Notebook</div>
               <div className="note-list">  
                   {this.state.notes.length > 0 
                   ? this.state.notes.map((obj, i) => {
                        return <Note key={i} index={i} title={obj.title} text={obj.text} onUpdate={this.updateNote} onRemove={this.removeNote} />
                        })      
                   : instruction }         
               </div> 
               <Form onSend={this.newNote}/>
         
            
           </div> 
        </NotebookStyle>

     )
   }
 }

 class Form extends React.Component {
    constructor(props) {
      super(props);    //controlled component, so it needs so many handlers
      this.state = {
          title: '',
          text: ''
        };
    }
    
    changeTitle = (e) => {
      this.setState({
          ...this.state,
          title: e.target.value
        });
    }
    
    changeText = (e) => {
      this.setState({
          ...this.state,
          text: e.target.value
        });
    }
    
    handleSubmit = (e) => { //here is a "Lift state up" on the parent component
      this.props.onSend(this.state.title, this.state.text); 
      this.handleCancel(e); //reset form text and cancel reload of the page
    }
    
    handleCancel = (e) => {
      this.setState({
          title: '',
          text: ''
        });
      e.preventDefault();
    }
    
    render() {
      return ( 
        <FormStyle>
            <form>
            <fieldset>
                <input type="text" value={this.state.title} onChange={this.changeTitle} placeholder="Enter title" />    
            </fieldset>
            <fieldset>
                <textarea  name="text" value={this.state.text} onChange={this.changeText} 
                            placeholder="Enter message" rows="3"/>
            </fieldset>

            <button onClick={this.handleSubmit} className="btn">Add</button>
            <button onClick={this.handleCancel} className="btn">Reset</button> 
            </form>
        </FormStyle>
        )
    }
  }