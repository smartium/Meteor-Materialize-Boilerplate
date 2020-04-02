import './hello.html';
import './hello.scss';

Template.hello.onCreated(()=> {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.onRendered(()=> {
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
