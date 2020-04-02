FlowRouter.route('/', {
  name: 'Main',
  action() {
    BlazeLayout.render('App_body', {main: 'home'});
  }
});

FlowRouter.route('/hello', {
  name: 'Hello',
  action() {
    BlazeLayout.render('App_body', {main: 'hello'});
  }
});

FlowRouter.route('/info', {
  name: 'Info',
  action() {
    BlazeLayout.render('App_body', {main: 'info'});
  }
});
