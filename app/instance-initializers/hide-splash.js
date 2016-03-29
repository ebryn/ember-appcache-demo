import Ember from 'ember';

export function initialize(appInstance) {
  appInstance.lookup('router:main').one('didTransition', () => {
    Ember.run.schedule('afterRender', () => {
      document.querySelector('.splash').style.display = 'none';
    });
  });
}

export default {
  name: 'hide-splash',
  initialize: initialize
};
