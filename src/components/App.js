import React, { Component, createRef } from 'react';
import Spinner from 'react-spinkit';
import * as BooksAPI from '../services/book-api';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';
import Button from './Button/Button';

const spinnerStyles = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

const mapper = items => {
  return items.map(({ volumeInfo: book, id }) => ({
    ...book,
    id,
  }));
};

export default class App extends Component {
  state = {
    books: [],
    isLoading: false,
    error: null,
    isLoadMore: false,
    value: '',
    genres: '',
    startIndex: 0,
  };

  loadMorebutton = createRef();

  componentDidMount() {
    this.setState({ isLoading: true });
    this.handleFetchBooks();
  }

  indexIncrement = () =>
    this.setState(state => ({
      startIndex: state.startIndex + 10,
    }));

  resetState = () =>
    this.setState({ isLoadMore: true, books: [], startIndex: 0 });

  setValue = (value, genres) => this.setState({ value, genres });

  handleFetchBooks = (query, genres, startIndex) => {
    this.setState({ isLoading: true });
    BooksAPI.fetchBooks(query, genres, startIndex)
      .then(({ items }) => {
        this.setState(state => ({ books: [...state.books, ...mapper(items)] }));
        this.indexIncrement();
      })
      .catch(error => this.setState({ error, isLoadMore: false }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const {
      books,
      isLoading,
      error,
      isLoadMore,
      value,
      genres,
      startIndex,
    } = this.state;

    const handleChangeBooksWithArguments = this.handleFetchBooks.bind(
      null,
      value,
      genres,
      startIndex,
    );
    return (
      <>
        <SearchForm
          onSubmit={this.handleFetchBooks}
          resetState={this.resetState}
          setValue={this.setValue}
        />
        {isLoading && (
          <Spinner
            name="ball-clip-rotate-multiple"
            color="blue"
            fadeIn="none"
            style={spinnerStyles}
          />
        )}
        {books.length !== 0 && <BookList items={books} />}
        {error && (
          <p>
            Whoops, something went wrong: {error.message}
            {}
          </p>
        )}
        {books.length !== 0 && isLoadMore && (
          <Button
            ref={this.loadMorebutton}
            // eslint-disable-next-line react/jsx-no-bind
            onClick={handleChangeBooksWithArguments}
          >
            Load more
          </Button>
        )}
      </>
    );
  }
}
