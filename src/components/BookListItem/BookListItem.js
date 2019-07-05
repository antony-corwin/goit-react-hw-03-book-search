import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Image,
  Title,
  Description,
  Author,
  Publisher,
  PublishedDate,
  PageCount,
  Button,
} from './BookListItem.styled';

export default class BookListItem extends Component {
  state = {
    hide: false,
  };

  static propTypes = {
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    imageLinks: PropTypes.shape({ thumbnail: PropTypes.string }),
    publisher: PropTypes.string,
    publishedDate: PropTypes.string,
    pageCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  componentDidMount() {
    const { description } = this.props;
    if (description.length > 80) this.setState({ hide: true });
  }

  cutString = text => text.substring(0, 80);

  handleShowMore = () => {
    this.setState({ hide: false });
  };

  render() {
    const {
      title,
      description,
      authors,
      publisher,
      publishedDate,
      pageCount,
      imageLinks,
    } = this.props;
    const { hide } = this.state;

    return (
      <Item>
        <Image src={imageLinks.thumbnail} />
        <div>
          <Title>{title}</Title>
          {hide ? (
            <>
              <Description>{`${this.cutString(description)}...`} </Description>
            </>
          ) : (
            <Description>{description}</Description>
          )}

          <Author>
            {authors && authors.length > 1
              ? authors.map(author => (
                  <span key={author} style={{ marginRight: '10px' }}>
                    {author}
                  </span>
                ))
              : authors}
          </Author>
          <Publisher>{publisher}</Publisher>
          <PublishedDate>{publishedDate}</PublishedDate>
          <PageCount>{pageCount}</PageCount>
          <Button type="submit" onClick={this.handleShowMore}>
            show more
          </Button>
        </div>
      </Item>
    );
  }
}

BookListItem.defaultProps = {
  title: 'Sorry! Unknown title',
  description: 'Sorry! Unknown description',
  publisher: 'Sorry! Unknown publisher',
  authors: ['Sorry! Unknown author'],
  imageLinks:
    'https://dwsinc.co/wp-content/uploads/2018/05/image-not-found.jpg',
  publishedDate: 'Sorry! Unknown published date',
  pageCount: 'Sorry! Unknown page count',
};
