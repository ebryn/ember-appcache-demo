import Ember from 'ember';

export function arrayJoin([array, separator]/*, hash*/) {
  return array.join(separator);
}


export default Ember.Helper.helper(arrayJoin);
