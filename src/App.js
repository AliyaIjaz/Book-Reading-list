import BookContextProvider from './contexts/BooksContext';
import Navbar from './components/Navbar';
import BookList from './components/Booklist';
import NewBookForm from './components/Bookform';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
