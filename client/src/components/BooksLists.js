import React, { Component } from 'react';
import Header from "./Header";
import Jumbotron from "./Jumbotron";
import Search from "./Search";
import Details from "./Details";
import Card from "./Card";
import API from "../utils/API";

class BooksLists extends Component {
    state = {
        result: [],
        search: ""
    }

    componentDidMount() {
        this.searchBooks("");
        this.loadBooks();
      }
    
    searchBooks = query => {
        API.search(query)
        .then(res => { 
            const result = res.data.items.map((itm) => {
                return (itm.volumeInfo);
            })
            this.setState(
              { 
                  result
             }
            )
          })
          .catch(err => console.log(err));
      };

    handleInput = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };
    
    handleClick = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
        this.setState({
            search: " "
        })
      };

    viewsContent = (event) => {
        event.preventDefault();
        const index = event.target.dataset.index;
        const book = this.state.result[index]
        window.open( book.previewLink );
    }

    loadBooks = () => {
      API.getBook()
      .then(res => 
              this.setState({ book: res.data})
      )
      .catch(err => console.log(err));
  };

    savedClick = event => {
      event.preventDefault();
      const index = event.target.dataset.index;
      const book = this.state.result[index]
      if (book) {      
        API.saveBook({
          title: book.title,
          authors: book.authors,
          link: book.previewLink,
          image: book.imageLinks.thumbnail,
          description: book.description
        })
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      }
    };

    render() {
    
        return (
        <div>
          <Header />
          <Jumbotron />
          
          <Search 
              value={this.state.search}
              handleInput={this.handleInput}
              handleClick={this.handleClick}
            />
          <Card
                heading={"Search:"}
              >
                {!this.state.result.length ? (
                  <h1 className="nobook">search for books to Display</h1>
                ) : (
                    this.state.result.map((book, index) => {
                      return (
                        <Details
                          key={index}
                          index={index}
                          title={book.title}
                          authors={book.authors}
                          description={book.description}
                          image={book.imageLinks.thumbnail}
                          previewLink={book.previewLink}
                          viewsContent={this.viewsContent}
                          savedClick ={this.savedClick}
                          />
                      );
                    }
                    )
                
                )}
              </Card> 
        </div>
      )
    }
}

export default BooksLists
