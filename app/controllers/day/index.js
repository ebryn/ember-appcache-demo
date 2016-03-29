import Controller from 'ember-controller';
import $ from 'jquery';

export default Controller.extend({
  actions: {
    chooseTalk(event) {
      let talkId = $(event.target).closest('li').data('talk-id');
      if (talkId && event.target.nodeName !== 'BUTTON') {
        this.transitionToRoute('day.talk', this.get('model.id'), talkId);
      }
    }
  }
});
