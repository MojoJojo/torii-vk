import Ember from 'ember';

export function inspectObject(params) {
  let [ object ] = params;

  return Ember.String.htmlSafe(JSON.stringify(object));
}

export default Ember.Helper.helper(inspectObject);
