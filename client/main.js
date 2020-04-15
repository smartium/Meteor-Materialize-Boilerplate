import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/client/lib/routes';
import '../node_modules/materialize-css/sass/materialize.scss';
import '../imports/client/styles/social.css';
import '../node_modules/materialize-css/dist/js/materialize.min';
import '../imports/client/partials/header/header';
import '../imports/client/partials/footer/footer';
import '../imports/client/templates/hello/hello';
import '../imports/client/templates/info/info';
import './main.html';

Template.App_body.onRendered(()=> {
  $('.sidenav').sidenav();
});
