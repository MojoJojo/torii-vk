# Torii VK

Provider for authentication on [vk.com](https://vk.com) using [Torii](https://github.com/Vestorly/torii).

## Installation

```sh
npm i torii-vk --save-dev
```

## Using

To use this addon you must [create app](https://vk.com/editapp?act=create).
And add `clientId` in environment file.

```js
...
  ENV['torii'] = {
    providers: {
      'vk-oauth2': {
        clientId: <clientId>
      },
      'vk-oauth2-bearer': {
        clientId: <clientId>
      }
    }
  }
...
```

Add the action in the route:

```js
...
  actions: {
    authenticate(provider) {
      this.get('torii').open(provider).then(authData => {
        //Your code
      }, error => {
        //Your code
      });
    }
  }
...
```

In template:

```hbs
...
  <button {{action 'authenticate' 'vk-oauth2-bearer'}}>
    Implicit Flow
  </button>
  <button {{action 'authenticate' 'vk-oauth2'}}>
    Authorization code flow
  </button>
...
```

## Support

Having trouble? Open an issue!
