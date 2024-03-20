import { defineStore } from 'pinia';

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    editTodo(updatedTodo) {
      const todoIndex = this.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (todoIndex !== -1) {
        this.todos[todoIndex] = updatedTodo;
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    getTodos() {
      return this.todos;
    },
  },
});
