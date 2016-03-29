import Ember from 'ember';

export function initialize(appInstance) {
  appInstance.lookup('router:main').one('didTransition', () => {
    Ember.run.schedule('afterRender', () => {
      let $splash = Ember.$('.splash');
      $splash.addClass('splash-hide');
      setTimeout(() => {
        $splash.hide();
      }, 300);
    });
  });
}

export default {
  name: 'hide-splash',
  initialize: initialize
};
