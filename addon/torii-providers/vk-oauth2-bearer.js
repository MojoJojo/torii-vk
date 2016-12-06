import { configurable } from 'torii/configuration';
import Oauth2 from 'torii/providers/oauth2-bearer';
import QueryString from '../mixins/query-string';

export default Oauth2.extend(QueryString, {
  name: 'vk-oauth2-bearer',
  baseUrl: 'https://oauth.vk.com/authorize',
  optionalUrlParams: ['display', 'revoke', 'v'],
  responseParams: ['access_token', 'expires_in', 'state'],
  scope: configurable('scope', function() {
    return this._super();
  }),
  display: configurable('display', 'popup'),
  v: configurable('v', '5.60'),
  redirectUri: configurable('redirectUri', function() {
    return this._super();
  }),
  clientId: configurable('clientId')
});
