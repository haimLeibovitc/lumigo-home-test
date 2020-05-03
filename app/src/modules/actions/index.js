/** @format */

const getTodosAction = (list) => ({
  type: 'GET_TODO_LIST',
  list
});

const addTodo = (newItem) => ({
  type: 'ADD_TODO',
  newItem
});

const getToDos = () => async (dispatch) => {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    // const result = await response.json();

    let result;
    fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
      return res
        .json()
        .then((data) => {
          console.log(data);
          dispatch(getTodosAction(data.slice(0, 10)));
        })
        .catch((ex) => {
          console.log(ex);
        });
    });
  } catch (ex) {
    console.log(ex);
  }
};

export { getToDos, addTodo };

import React from 'react';

class UserList extends React.PureComponent {
  render() {
    console.log('userList');
    alert('userList');
    const filterUser = this.props.users.filter((user) =>
      user.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    );
    const users = filterUser.map((user, index) => {
      return (
        <div
          onClick={() => this.props.logId(user, index)}
          className={`user ${this.props.test}`}
          key={user.name}
        >
          <p>Id: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      );
    });

    return <div className='userList'>{users}</div>;
  }
}

export default UserList;
