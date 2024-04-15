// importing all the actions
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
} from "./actionTypes";

//for adding a new task
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

//for catching the id of the task and mark it complete or incomplete
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

//for deleting a task
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

//for marking a task complete
export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

//for marking a task incomplete
export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

//for filtering tasks based on complete and incomplete
export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

//for marking all the tasks completed
export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

//for searching particular tasks
export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});
