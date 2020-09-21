import { taskTypes } from '../actions/types';

const initialState = {
  lastTaskId: 2,
  tasks: {
    1: {
      title: 'Sample title',
      description:
        'This is sample description for test This is sample description for test This is sample description for test This is sample description for test',
      gifts: 'Please give a gift to me',
      priority: 'Low',
    },
    2: {
      title: 'Sample title',
      description:
        'This is sample description for test This is sample description for test This is sample description for test This is sample description for test',
      gifts: 'Please give a gift to me',
      priority: 'High',
    },
  },
  doneTasks: {},
};

export function task(state = initialState, action) {
  switch (action.type) {
    case taskTypes.CREATE_TASK:
      return {
        ...state,
        tasks: { ...state.tasks, [action.taskId]: action.task },
        lastTaskId: action.taskId,
      };
    case taskTypes.EDIT_TASK:
      return {
        ...state,
        tasks: { ...state.tasks, [action.taskId]: action.task },
      };
    case taskTypes.DONE_TASK:
      // eslint-disable-next-line no-case-declarations
      const newTasks = { ...state.tasks };
      delete newTasks[action.taskId];
      return {
        ...state,
        tasks: newTasks,
        doneTasks: { ...state.doneTasks, [action.taskId]: state.tasks[action.taskId] },
      };
    case taskTypes.DELETE_TASK:
      return {
        ...state,
        tasks: action.tasks,
      };
    default:
      return state;
  }
}
