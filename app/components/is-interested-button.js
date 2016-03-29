import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  classNameBindings: [':is-interested-button', ':small-button', ':round', 'checked::nope'],

  tagName: 'button',

  interests: storageFor('interests'),

  didReceiveAttrs() {
    this._super(...arguments);
    this.checked = Ember.computed(`interests.${this.get('talkId')}`, function() {
      return this.getWithDefault(`interests.${this.get('talkId')}`, false);
    });
  },

  checked: null,

  click() {
    this.toggleProperty(`interests.${this.get('talkId')}`);
  }
});
