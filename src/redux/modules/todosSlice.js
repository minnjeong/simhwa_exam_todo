import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { waitTwoSeconds } from '../../utils';

export const __addTodo = createAsyncThunk(
  'todos/addTodo',
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    thunkAPI.dispatch(addTodo(payload))
  }
);

export const __deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    thunkAPI.dispatch(deleteTodo(payload))
  }
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
