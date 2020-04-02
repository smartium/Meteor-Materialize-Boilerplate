import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/client/lib/routes';
import '../node_modules/materialize-css/sass/materialize.scss';
import '../node_modules/materialize-css/dist/js/materialize.min';
import '../imports/client/partials/header/header';
import '../imports/client/partials/footer/footer';
import './main.html';

Template.App_body.onRendered(()=> {
  $('.sidenav').sidenav();
});

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
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
