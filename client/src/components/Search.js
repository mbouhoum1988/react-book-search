import React from "react"

const Search = (props) => {
    return (
      <div className="search-box">
            <h3>Search Books</h3>
            <p>book</p>
            <input 
                    className="form-control" 
                    placeholder="enter book name"
                    name="search"
                    value={props.name}
                    onChange={props.handleInput} />
            <button 
                className="btn btn-primary"
                onClick={props.handleClick}
                > search </button>
      </div>
    )
  }


export default Search
