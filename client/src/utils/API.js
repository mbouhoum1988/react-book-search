import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    search: (query) => {
      return axios.get(BASEURL + query);
    },

    getBook: () => {
      return axios.get("/api/books");
    },

    
    deleteBook: (id) => {
      return axios.delete("/api/books/" + id);
    },
    
    saveBook: function (bookdata) {
      return axios.post("/api/books", bookdata);
    }
  }; 