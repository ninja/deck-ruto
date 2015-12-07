```javascript
import {Server} from 'hapi';
import {plugin} from 'ruto';
import {handler, routes} from './router';

const server = new Server();

server.connection();

server.register({
  options: {handler, routes},
  register: plugin
}, () => server.start());
```
