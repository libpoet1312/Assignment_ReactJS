import React, {Component} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Containers/Home/Home";
import SearchResults from "./Components/SearchResults/SearchResults";
import Error404 from "./Components/Error404/Error404";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>

                <Route path="/results" component={SearchResults}/>

                <Route path="/" component={Error404}/>

            </Switch>
        </BrowserRouter>
    )
  }
}

export default App;

