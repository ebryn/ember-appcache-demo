export default function() {
  this.transition(
    this.fromRoute('day'),
    this.toRoute('day'),
    this.use('to-left'),
    this.toModel(function(newDay, oldDay) {
      return parseInt(newDay.id) > parseInt(oldDay.id);
    }),
    this.reverse('to-right')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('day'),
    this.use('to-left'),
    this.reverse('to-right')
  );
}
