import { taskTypes } from '../actions/types';

const initialState = {
  lastTaskId: 0,
  tasks: {},
};

export function task(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case taskTypes.CREATE_TASK:
      return {
        ...state,
        tasks: { ...state.tasks, [action.taskId]: action.task },
        lastTaskId: action.taskId,
      };
    default:
      return state;
  }
}
