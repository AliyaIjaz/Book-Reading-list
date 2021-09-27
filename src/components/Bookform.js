import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BooksContext';

const NewBookForm = () => {
    const { addBooks } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        addBooks(title, author);
        setTitle('');
        setAuthor('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type = 'text' placeholder = 'Book title' value={title}
            onChange = {(e)=>setTitle(e.target.value)} required/>
            <input type='text' placeholder='Author name' value={author}
            onChange = {(e)=>setAuthor(e.target.value)} required />
            <input type = 'submit' value='Add Book' />
        </form>
       
     );
}
 
export default NewBookForm;
