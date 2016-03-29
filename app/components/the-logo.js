import Component from 'ember-component';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({

  tomster: task(function * () {
    this.$('.logo').removeClass('reveal');
    yield timeout(1000);
    this.$('.logo').addClass('reveal');
  }).restartable(),

  didInsertElement() {
    this.get('tomster').perform();
  },

  click() {
    this.get('tomster').perform();
  }
});
