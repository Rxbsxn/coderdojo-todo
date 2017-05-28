import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  todosOrder: ['done', 'name'],
  todosSorted: Ember.computed.sort('todos', 'todosOrder'),

  action: {
    addTodo() {
      let newTodo = this.get("newTodoText");

      this.get('store').createRecord('todo', {name: newTodo, done: false});
      this.set("newTodoText", '');
    }
  }
});
