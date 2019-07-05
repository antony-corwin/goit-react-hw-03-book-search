import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookList.module.css';

import BookListItem from '../BookListItem/BookListItem';

const BookList = ({ items }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <BookListItem key={item.id} {...item} />
    ))}
  </ul>
);

BookList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  ).isRequired,
};

export default BookList;
