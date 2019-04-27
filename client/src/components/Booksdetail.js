import React from 'react';

const Booksdetail = (props) => {
return (
    <div className="book-detail">
    
            <div className="btn-save">
                <button className="btn btn-danger" data-index={props.index} onClick={() => props.deleteBooks(props.index)}>delete</button>
                <button className="btn btn-info" data-index={props.index} onClick={props.viewsContent}>view</button>
            </div>
            <h3>{props.title}</h3>
            <h5>{props.authors}</h5>
            <h5><a href={props.link}>Link to {props.title}</a></h5>

            <div className="description-image">
                <img alt={props.title} className="img-fluid" src={props.image} />
                <h5 className="description">{props.description}</h5>
            </div>     
    </div>
);
}

export default Booksdetail;