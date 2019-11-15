const axios = require("axios");
const newsapiurl =`https://newsapi.org/v2/everything`;


// module.exports = {
//     everything: async (query) => {
//     // const key = process.env.OPEN_CAGE_DATA_KEY;
//     // const url = `https://newsapi.org/v2/everything`;
//     console.log(query);
//      const promise = await axios.get(newsapiurl);
//      console.log(promise)
//      return promise;
//     }
//   };

exports.everything = async function(query) {
    // try {
    //     const result = await axios.get(newsapiurl);
    //     return result;
    // } catch (error) {
    //     return error.response;
    // }

    
    const result = await axios.get(newsapiurl)
    .then(res => res)
    .catch(err => err.response);
    return result;
    
    
    
};



//   search.everything('test');

  /*

  const axios = require("axios");
const googleBooksUrl ="https://www.googleapis.com/books/v1/volumes";
const keys = require("../config/keys");
const search = {
  fetchBooks: (term, index = 0) =>
    axios.get(googleBooksUrl, {
      params: {
        q: term,
        startIndex: index,
        key: keys.googleBooksApiKey
      }
    })
    .then(response => {
      return response;
    })
    .catch(err => err.response)

  */