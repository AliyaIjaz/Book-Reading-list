import React, { createContext, useState, useEffect } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props)=> {

    const data = ()=>{
    const result = localStorage.getItem('name');
    return result ? JSON.parse(result) : []
}

const [books, setBooks] = useState(data())
//     {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
//     {title: 'the final empire', author: 'brandon sanderson', id: 2}
// ]);

const addBooks = (title, author)=> {
let newId = Math.floor(Math.random() * 100000);
console.log('new id is ..',newId);
setBooks([...books, {title:title, author:author, id:newId}])
}
const removeBook = (id)=> {
    setBooks(books.filter(book => book.id !== id));
}

useEffect(()=>{
localStorage.setItem('name', JSON.stringify(books))
},[books])

return (
    <BookContext.Provider value = {{books, addBooks, removeBook}}>
        {props.children}
    </BookContext.Provider>
)
}

export default BookContextProvider;
