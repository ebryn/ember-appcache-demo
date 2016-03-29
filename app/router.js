import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('day', { path: '/day/:dayId' });
  this.route('talk', { path: 'talk/:day/:talkId' });
});

export default Router;
