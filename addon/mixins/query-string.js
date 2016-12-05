import Mixin from 'ember-metal/mixin';
import QueryString from '../utils/query-string';

export default Mixin.create({
  buildQueryString() {
    let {
      requiredUrlParams,
      optionalUrlParams
    } = this.getProperties('requiredUrlParams', 'optionalUrlParams');

    let qs = QueryString.create({
      provider: this,
      requiredParams: requiredUrlParams,
      optionalParams: optionalUrlParams
    });
    return qs.toString();
  }
});
