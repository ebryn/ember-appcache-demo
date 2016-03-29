import Controller from 'ember-controller';
import $ from 'jquery';

export default Controller.extend({
  actions: {
    chooseTalk(event) {
      let talkId = $(event.target).closest('li').data('talk-id');
      if (talkId) {
        this.transitionToRoute('day.talk', this.get('model.id'), talkId);
      }
    }
  }
});
