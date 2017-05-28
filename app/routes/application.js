import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.peekAll('todo'); //Use peekAll when model is local and findAll when in storage
  }
});
