import Controller from 'ember-controller';

export default Controller.extend({
  actions: {
    goBack() {
      window.history.back();
    }
  }
});
