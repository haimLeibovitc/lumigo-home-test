/** @format */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import List from '../todo/List';
import Actions from '../actions/Actions';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const ToDoList = styled(List)`
  flex: 3;
  background-color: wheat;
  border-right: 1px solid gray;
`;

const ActionsElem = styled(Actions)`
  display: flex;
  justify-content: center;
  background-color: wheat;
  flex: 2;
`;

function Content({ list, addTodo }) {
  return (
    <Wrapper>
      <ToDoList list={list} addTodo={addTodo} />
      <ActionsElem addTodo={addTodo}></ActionsElem>
    </Wrapper>
  );
}

export default Content;
