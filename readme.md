## Rūto ルート
### Universal routing for hapi.

Handles all incoming requests with react-router.
302 (redirect) and 404 (not found) are delegated to Hapi.
Includes optional helpers for redux.

### Usage:
See [explore/examples](examples) for details.

### Development:

Optional ruto binary:

```bash
cd ~/ruto
npm link
```

Start examples and deck:

```bash
ruto start
open http://localhost:3000/
open http://localhost:3000/?redux=true
open http://localhost:3000/deck
```

Run tests:

```bash
ruto test
```

Start examples and deck (without ruto binary):

```bash
cd ~/ruto
npm run start
open http://localhost:3000/
open http://localhost:3000/?redux=true
open http://localhost:3000/deck
```

Run tests (without ruto binary):

```bash
npm test
```
