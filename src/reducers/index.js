import { combineReducers } from 'redux';
import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from '../actions/actionTypes';

const initialState = {
    books: [],
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.payload],
            };
        case EDIT_BOOK:
            return {
                ...state,
                books: state.books.map((book) =>
                    book.id === action.payload.id ? action.payload : book
                ),
            };
        case DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter((book) => book.id !== action.payload),
            };
        default:
            return state;
    }
};

export default combineReducers({
    bookstore: booksReducer,
});
