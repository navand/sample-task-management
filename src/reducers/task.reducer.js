import { taskTypes } from '../actions/types';

const initialState = {
    counter: 0,
    tasks: {},
};

export function task(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
