import Ember from 'ember';

export default Ember.Route.extend({
  model({talkId}) {
    let day = this.modelFor('day');
    return day.talks.findBy('id', talkId);
  }
});
