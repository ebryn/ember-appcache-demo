import Ember from 'ember';

export default Ember.Route.extend({
  model({day, talkId}) {
    return this.modelFor('application').findBy('id', day).talks.findBy('id', talkId);
  }
});
