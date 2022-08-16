var axios = require("axios");
const API_URL = "https://www.biodiversitylibrary.org/api3";
const API_KEY = "12b24e71-9887-48b7-924d-9abb31a38b9f";

export function getAllCollections() {
  return new Promise((resolve) => {
    var config = {
      method: "get",
      url: `${API_URL}?op=GetCollections&apikey=${API_KEY}&format=json`,
      headers: {},
    };
    axios(config)
      .then(function(response) {
        resolve(response.data.Result);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
}

export function getAllBooks(searchBy, value) {
  return new Promise((resolve) => {
    var config = {
      method: "get",
      url: `${API_URL}?op=PublicationSearchAdvanced&${searchBy}=${value}&apikey=${API_KEY}&format=json`,
      headers: {},
    };
    axios(config)
      .then(function(response) {
        resolve(response.data.Result);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
}
