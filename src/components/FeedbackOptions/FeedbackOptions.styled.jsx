import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
  list-style: none;
`;

export const FeedbackListItem = styled.li`
  display: flex;
  justify-content: center;
  margin: 15px;
  width: calc((100% - 90px) / 3);
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border: 1px solid #afb1b8;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #2196f3;
  }
`;
