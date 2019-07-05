import axios from 'axios';

export const fetchBooks = (
  query = 'react',
  gender = 'computers',
  startIndex = 0,
) => {
  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${gender}&startIndex=${startIndex}`,
    )
    .then(res => res.data);
};

export const eslintGoodBuy = () => null;
