```javascript
import {App, City, Cities} from './components';
import {IndexRoute, Redirect, Route} from 'react-router';
import React from 'react';
import {fetchCity, fetchCities} from './actions';

export const routes = (
  <Route component={App} path="/">
    <IndexRoute action={fetchCities} component={Cities}/>
    <Route action={fetchCity} component={City} path="/city/:id"/>
    <Redirect from="/city/sanfrancisco" to="/city/seattle"/>
  </Route>
);
```
