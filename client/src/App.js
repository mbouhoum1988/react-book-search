import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BooksLists from './components/BooksLists';
import BookSaved from './components/BookSaved';

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={BooksLists} />
          <Route exact path="/search" component={BooksLists} />
          <Route exact path="/saved" component={BookSaved} />
        </div>
      </Router>
    );
  }
}

export default App;
