export default class Note extends React.Component {

    constructor(props) {
      super(props); 
      this.state = {
          title: this.props.title, 
          text: this.props.text, 
          editing: false
        };
    }
        
    edit = () => { //lift state up to the parent 
      this.props.onUpdate(this.props.index, this.state.title, this.state.text);
      this.setState({
          ...this.state,
          editing: !this.state.editing
        });
    }
    
    delete = () => { //lift state up to the parent    
      this.props.onRemove(this.props.index);
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
    
    renderNoteOrEdit() { //when clicks edit button pencil-icon toggle between input and div
      if(this.state.editing) {
        return (
            <div className="inner">   
                <div className="title-wrapper">
                    <div className="title">Title</div>
                    <button type="button" className="btn del" onClick={this.delete}>delete</button>  
                    <button type="button" className="btn save" onClick={this.edit}>save</button>
                </div>
                <div className="text">
                    <input type="text" value={this.state.title} onChange={this.changeTitle} placeholder="Enter title" />  
                    <textarea  name="text" value={this.state.text} onChange={this.changeText} rows="3"/>
                </div>
            </div>
        )
      } else {
         return (
            <div className="inner">
                <div className="title-wrapper">
                    <div className="title">{this.props.title}</div>
                    <div className="button-wrapper">
                        <button type="button" className="btn del" onClick={this.delete}>delete</button>
                        <button type="button" className="btn" onClick={this.edit}>edit</button>
                    </div>
                </div>
                <div className="text"> 
                    {this.props.text}
                </div>
            </div>
            )
      }
    }
    render() { //render function based on value {this.state.editing}
      return ( 
        <div className="note">
            {this.renderNoteOrEdit()}
        </div>
      )
    }
  }