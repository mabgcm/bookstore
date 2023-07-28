import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


const BookItem = ({ book, onEdit, onDelete }) => {
    const { name, price, category, description } = book;


    const handleEdit = () => {
        onEdit(book);
    };

    const handleDelete = (event) => {
        event.stopPropagation();
        onDelete(book.id);
    };

    return (
        <tr onClick={handleEdit}>
            <td>{name}</td>
            <td>{price}</td>
            <td>{category}</td>
            <td>{description}</td>
            <td>
                <span className="delete-icon" onClick={handleDelete}>
                    <i className="bi bi-trash"></i>
                </span>
            </td>
        </tr>
    );
};

export default BookItem;
