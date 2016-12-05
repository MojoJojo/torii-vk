import { configurable } from 'torii/configuration';
import Oauth2 from 'torii/providers/oauth2-code';
import QueryString from '../mixins/query-string';

export default Oauth2.extend(QueryString, {
  name: 'vk-oauth2',
  baseUrl: 'https://oauth.vk.com/authorize',
  optionalUrlParams: ['display', 'v'],
  responseParams: ['code', 'state'],
  scope: configurable('scope'),
  display: configurable('display', 'popup'),
  v: configurable('v', '5.60'),
  redirectUri: configurable('redirectUri', function() {
    return this._super();
  }),
  clientId: configurable('clientId')
});
