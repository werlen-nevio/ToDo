import { defineStore } from 'pinia';

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: JSON.parse(localStorage.getItem('todos')) || [],
  }),
  actions: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
      this.saveTodos();
    },
    editTodo(updatedTodo) {
      const todoIndex = this.todos.findIndex(todo => todo.id === updatedTodo.id);      
      if (todoIndex !== -1) {
        this.todos[todoIndex] = updatedTodo;        
        this.saveTodos();
      }
    },    
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.saveTodos();
    },
    getTodos() {
      return this.todos;
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
  },
});
