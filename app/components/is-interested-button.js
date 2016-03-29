import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  classNameBindings: [':is-interested-button', ':small-button', ':round', 'checked::nope'],

  tagName: 'button',

  interests: storageFor('interests'),

  // Need to remove commas from the key b/c of
  // github.com/emberjs/ember.js/blob/v2.4.0/packages/ember-metal/lib/expand_properties.js#L48-L52
  storageKey: Ember.computed('talkId', function() {
    return this.get('talkId').replace(/,/g, '');
  }),

  didReceiveAttrs() {
    this._super(...arguments);
    this.checked = Ember.computed(`interests.${this.get('storageKey')}`, function() {
      return this.getWithDefault(`interests.${this.get('storageKey')}`, false);
    });
  },

  checked: null,

  click() {
    this.toggleProperty(`interests.${this.get('storageKey')}`);
  }
});
