import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  width: 47%;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border: honeydew;
  margin: 20px;
  font: inherit;
  border-radius: 3px;
  outline: none;
}
`;

export const Image = styled.img`
  margin: 30px;
  display: block;
  height: auto;
  border-radius: 5px;
`;

export const Title = styled.h5`
  margin: 10px;
  font-size: 20px;
`;

export const Description = styled.p`
  width: 95%;
  margin: 2px;
`;

export const Author = styled.p`
  margin: 2px;
`;

export const Publisher = styled.p`
  margin: 2px;
`;

export const PublishedDate = styled.p`
  margin: 2px;
`;

export const PageCount = styled.p`
  margin: 2px;
`;

export const Rating = styled.p`
  margin: 2px;
`;

export const Button = styled.button`
  margin-top: 10px;
  background-color: #3784fe;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  display: block;
  color: #fff;
  padding: 4px 15px;
  cursor: pointer;
`;
