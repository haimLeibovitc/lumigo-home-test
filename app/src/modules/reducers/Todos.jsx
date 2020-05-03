/** @format */

const todos = (state = [], action) => {
  const { list: payloadList, newItem } = action;
  const { list: stateList } = state;
  let list;
  switch (action.type) {
    case 'GET_TODO_LIST':
      list = [...payloadList];
      return { ...state, list };
    case 'ADD_TODO':
      list = [...stateList, newItem];
      return { ...state, list };
    default:
      return state;
  }
};

export default todos;
