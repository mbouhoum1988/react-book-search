import React,{ Component } from 'react';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Card from "./Card";
import Booksdetail from './Booksdetail';
import API from "../utils/API";

class BookSaved extends Component {
    state = {
        book:[],
        link: []
    }
   
    componentDidMount = () => {
        this.loadBooks();
      }

    loadBooks = () => {
        API.getBook()
        .then(res => 
                this.setState({ book: res.data})
        )
        .catch(err => console.log(err));
    };

    deleteBooks = (index) => {
        API.deleteBook(index)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };

    viewsContent = (index) => {
        API.Book(index)
        .then(res => {
          this.setState({ link: res.data});
          const link = this.state.link.link;
          window.open( link );
           })
        .catch(err => console.log(err));
    }

    render() {
    return (
        <div>
            <Header />
            <Jumbotron />
            <Card
            heading={"saved books:"}
            >
            {!this.state.book.length ? (
              <h1 className="nobook">you have no books saved</h1>
            ) : (
                this.state.book.map((book) => {
                  return (
                    <Booksdetail
                      key={book._id}
                      index={book._id}
                      title={book.title}
                      authors={book.authors}
                      description={book.description}
                      image={book.image}
                      link={book.link}
                      viewsContent={this.viewsContent}
                      deleteBooks={this.deleteBooks}
                      />
                  );
                }
              )
            )}
          </Card> 
        </div>    
    );
}
}

export default BookSaved;