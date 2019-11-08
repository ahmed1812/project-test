import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ResultList extends Component {
  constructor(){
    super();
    this.state = {
      redirectTo: null

    }
  }
  renderPage = () =>{
    console.log("results: "+JSON.stringify(this.props.results));
    this.setState({
      redirectTo: '/specificPage'
    })
  }
  render() {
    if(this.state.redirectTo){
      return <Redirect to={{pathname: this.state.redirectTo, state:{id:'1234'} }} />
    }
    else{
      return (
        <ul className="list-group">
          {this.props.results.map(result => (
            <li className="list-group-item" key={result.recordid}>
              <p>{result.fields.host_location}</p>
              <img alt={result.fields} className="img-fluid" src={result.fields.picture_url} onClick={this.renderPage} />
            </li>
          ))}
        </ul>
      );

    }
  }

}

export default ResultList;
