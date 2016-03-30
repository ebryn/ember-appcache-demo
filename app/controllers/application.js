import Ember from 'ember';

const {
  Controller,
  computed,
  inject: { service }
} = Ember;

export default Controller.extend({
  routing: service('-routing'),
  isHome: computed.equal('routing.currentPath', 'day.index')
});
