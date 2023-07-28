import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBook, editBook, deleteBook } from '../actions';
import BookItem from './BookItem';
import BookForm from './BookForm';
import '../App.css';


const BookstoreApp = ({ books, addBook, editBook, deleteBook }) => {
    const [showForm, setShowForm] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [showEditForm, setShowEditForm] = useState(false);

    const handleAddBook = () => {
        setShowForm(true);
        setSelectedBook(null);
    };

    const handleEditBook = (book) => {
        setShowForm(true);
        setSelectedBook(book);
    };

    const handleDeleteBook = (bookId) => {
        deleteBook(bookId);
    };

    const handleSubmitForm = (book) => {
        if (selectedBook) {
            editBook({ ...selectedBook, ...book });
        } else {
            addBook({ ...book, id: Date.now() });
        }
        setShowForm(false);
    };
    const handleEditSubmitForm = (book) => {
        if (selectedBook) {
            editBook({ ...selectedBook, ...book });
        } else {
            addBook({ ...book, id: Date.now() });
        }
        setShowForm(false);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <div>
            <h1 className='text-center mt-5 mb-5'>Bookstore</h1>
            <button className='btn btn-success mb-3' onClick={handleAddBook}>Add Book</button>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Price($)</th>
                        <th scope="col">Category</th>
                        <th scope="col">Description</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <BookItem
                            key={book.id}
                            book={book}
                            onEdit={handleEditBook}
                            onDelete={handleDeleteBook}
                        />
                    ))}
                </tbody>
            </table>
            {showForm && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <BookForm
                            onSubmit={handleSubmitForm}
                            onClose={handleCloseForm}
                            initialData={selectedBook}
                        />
                    </div>
                </div>
            )}
            {showEditForm && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Edit Book</h2>
                        <BookForm
                            onSubmit={handleEditSubmitForm}
                            onClose={() => setShowEditForm(false)}
                            initialData={selectedBook}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        books: state.bookstore.books,
    };
};

const mapDispatchToProps = {
    addBook,
    editBook,
    deleteBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookstoreApp);
