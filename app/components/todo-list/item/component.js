import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  click() {
    this.toggleProperty('todo.done')
  }
});
