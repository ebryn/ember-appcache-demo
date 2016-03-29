export function initialize(appInstance) {
  appInstance.lookup('router:main').one('didTransition', function() {
    document.querySelector('.splash').style.display = 'none';
  });
}

export default {
  name: 'hide-splash',
  initialize: initialize
};
