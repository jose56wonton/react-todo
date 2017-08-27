import  React, {Component} from 'react';

export default class In extends Component{
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({value: e.target.value});
  }

  handleSubmit(e){
    this.props.add(this.state.value);
    e.preventDefault();
  }

  render(){
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <label>
            <h1>ToDo</h1>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          
        </form>
      </div>
      
    )
  }
}