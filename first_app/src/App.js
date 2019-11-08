import React, {Component} from "react";
import SearchResultContainer from "./components/SearchResultContainer";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import IndividualPage from './components/IndividualPage';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={SearchResultContainer} />
            <Route exact path ="/specificPage" component={IndividualPage} />
          </div>
        </Router>


      </div>
    )
  }
}

export default App;
