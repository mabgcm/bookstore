// src/components/BookForm.js
import React, { useState } from 'react';

const BookForm = ({ onSubmit, onClose, initialData }) => {
    const [name, setName] = useState(initialData ? initialData.name : '');
    const [price, setPrice] = useState(initialData ? initialData.price : '');
    const [category, setCategory] = useState(initialData ? initialData.category : '');
    const [description, setDescription] = useState(initialData ? initialData.description : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, price, category, description });
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
                <div className="mb-3">
                    <label className="form-label">
                        Title:
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Price:
                        <input
                            type="number"
                            className="form-control"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Category:
                        <input
                            type="text"
                            className="form-control"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Description:
                        <textarea
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-warning">Submit</button>
                    <button type="button" className="btn btn-danger" onClick={handleClose}>Cancel</button>
                </div>
            </form>
        </div>

    );
};

export default BookForm;
