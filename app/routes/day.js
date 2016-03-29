import Ember from 'ember';

export default Ember.Route.extend({
  model({ dayId }) {
    return this.modelFor('application').find(day => day.id === dayId);
  }
});
