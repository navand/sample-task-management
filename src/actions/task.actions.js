import { taskTypes } from '../actions/types';

const create = (task) => {
  return (dispatch, getState) => {
    const taskId = getState().task.lastTaskId + 1;
    return dispatch({ type: taskTypes.CREATE_TASK, taskId, task });
  };
};

const _delete = (taskId) => {
  return (dispatch, getState) => {
    const tasks = { ...getState().task.tasks };
    delete tasks[taskId];
    return dispatch({ type: taskTypes.DELETE_TASK, tasks });
  };
};

const edit = (taskId, task) => {
  return (dispatch) => dispatch({ type: taskTypes.EDIT_TASK, taskId, task });
};

const done = (taskId) => {
  return (dispatch) => dispatch({ type: taskTypes.DONE_TASK, taskId });
};

export const taskActions = {
  create,
  _delete,
  edit,
  done,
};
