import Route from 'ember-route';

export default Route.extend({
  actions: {
    authenticate(provider) {
      let controller = this.controller;
      controller.set('error', null);
      controller.set('authData', null);
      this.get('torii').open(provider).then(authData => {
        controller.set('authData', authData);
      }, error => {
        controller.set('error', error);
      });
    }
  }
});
