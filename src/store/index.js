import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      favourites: [],
    };
  },
  mutations: {
    addFave(state, book) {
      const newBook = {
        ItemID: book.ItemID,
        Title: book.Title,
        Genre: book.Genre,
        Authors: book.Authors,
        favourite: true,
      };
      state.favourites.push(newBook);
    },
    removeFave(state, book) {
      state.favourites.splice(book);
    },
  },
  actions: {
    addFave(context, book) {
      context.commit("addFave", book);
    },
    removeFave(context, book) {
      context.commit("removeFave", book);
    },
  },
  getters: {
    favourites(state) {
      return state.favourites;
    },
  },
});

export default store;
