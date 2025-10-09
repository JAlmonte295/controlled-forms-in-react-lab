import { useState } from 'react';

const Bookshelf = () => {
  const [books, setBooks] = useState([]);

  const [newBook, setNewBook] = useState({ title: '', author: '' });

  function handleInputChange(e) {
      const { name, value } = e.target;
      setNewBook({ ...newBook, [name]: value });
  }

  function handleSubmit(e) {
      e.preventDefault();
      setBooks([...books, newBook]);
      setNewBook({ title: '', author: '' });
  }

  return (
    <div className="bookshelfDiv">

      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={newBook.title} onChange={handleInputChange} />
          <input type="text" name="author" placeholder="Author" value={newBook.author} onChange={handleInputChange} />
          <br />
          <button type="submit">Add Book</button>
          <br />
          <button type="button" onClick={() => setBooks([])}>Clear Bookshelf</button>
        </form>
      </div>

        <h3>Bookshelf</h3>
      <div className="bookCardsDiv">

        {books.length === 0 ? (
          <p>Your bookshelf is empty.</p>
        ) : (
          books.map((book, index) => (
            <div key={index} className="bookCard">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))
        )}

        <br />

      </div>

    </div>
  );
};

export default Bookshelf;