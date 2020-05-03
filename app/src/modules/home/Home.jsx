/** @format */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getToDos, addTodo } from '../actions';
import Content from '../../components/content/Content';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.div`
  height: 40px;
  background: pink;
  cursor: pointer;
  padding: 1%;
`;

const Footer = styled.div`
  height: 40px;
  background: pink;
`;

const SideBar = styled.div`
  width: 200px;
  height: 100%;
  background: green;
  position: absolute;
`;

const ContentElem = styled.div`
  flex: 1;
  position: relative;
`;

function Home({ getToDos, addTodo, list }) {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <Wrapper>
      <Header onClick={() => setShowMenu(!showMenu)}>click me</Header>
      <ContentElem>
        {showMenu && <SideBar />}
        <Content addTodo={addTodo} list={list} />
      </ContentElem>
      <Footer>footer</Footer>
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  const { todos } = state;
  const { list } = todos;
  return { list };
};

const mapDispatchToProps = (dispatch) => ({
  getToDos: () => dispatch(getToDos()),
  addTodo: (data) => dispatch(addTodo(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
