import React, {createContext, useReducer} from 'react';
import users from '../mock_data/users';

const INITIAL_STATE = {users};
const UsersContext = createContext({});

export const UsersProvider = (props) => {
  function reducer(state, action) {
    console.warn(action);
    return state;
  }

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <UsersContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
