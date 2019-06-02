import React, {Component} from 'react';

class TodoForm extends Component{

  constructor(){
      super();
      this.state = {
        title : '',
        responsible : '',
        description : '',
        priority : 'low'
      }
      this.handleImput = this.handleImput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleImput(e){
      const {value, name}= e.target;
      this.setState({
        [name]: value
      })

    }

    handleSubmit(e){
      e.preventDefault();
      this.props.onAddTodo(this.state);
    }


    render(){
      return(
        <div className = "card">
            <form className = "card-body " onSubmit = {this.handleSubmit} >
                <div className = "form-group" >
                    <input
                        box-sizing = "border-box"
                        type = "text"
                        name = "title"
                        onChange = {this.handleImput}
                        className = "form-contol"

                        placeholder = "Title"


                    />
                </div>
                <div className = "form-group">
                    <input
                        type = "text"
                        name = "responsible"
                        onChange = {this.handleImput}
                        className = "form-contol"
                        placeholder = "Responsible"

                    />
                </div>
                <div className = "form-group">
                    <input
                        type = "text"
                        name = "description"
                        onChange = {this.handleImput}
                        className = "form-contol"
                        placeholder = "Description"

                    />
                </div>
                <div className = "form-group">
                    <select
                        name = "  priority"
                        onChange = {this.handleImput}
                        className = "form-contol"
                    >
                    <option>low</option>
                    <option>medium</option>
                    <option>high</option>
                    </select>
                </div>
                <button type = "submit" className="btn btn-primary">
                Save

                </button>
            </form>
        </div>

      )
    }
}

export default TodoForm;
