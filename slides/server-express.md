```javascript
import express from 'express';
import {middleware} from 'ruto';
import {handler, routes} from './router';

const app = express();

app.use(middleware({handler, routes}));

app.listen();
```
