import  React, {Component} from 'react';

export default class List extends Component{
  constructor(props){
    super(props);
    
  } 

  render(){
    var items = this.props.items.map((d,i) =>
      <li className="collection-item dismissable" key={i} >
        <div>{d.item}<a href="#!" onClick={() => {this.props.remove(d.item)}} className="secondary-content"><i className="material-icons">close</i></a></div>
      </li>
    );
    return (
      
      <ul className="collection">
        {items}
      </ul>
    )
  }
}
