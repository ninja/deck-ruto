```javascript
import {App} from './app';
import React from 'react';
import {RoutingContext} from 'react-router';
import {getState} from './state';
import {renderToString} from 'react-dom/server';

export function handler ({props, reply}) {
  getState(props, state => {
    const app = renderToString(
      <App state={state}><RoutingContext {...props}/></App>
    );
    const json = JSON.stringify(state);

    reply(`<!doctype html><html><body><div id="app">${app}</div>
      <script id="state" type="application/json">${json}</script>
      <script src="/client.js"></script></body></html>`);
  });
}
```
