import './style.css';
import {Deck} from './components/deck';
import React from 'react';
import bespoke from 'bespoke';
import classes from 'bespoke-classes';
import hash from 'bespoke-hash';
import jumpy from 'bespoke-jumpy';
import keys from 'bespoke-keys';
import touch from 'bespoke-touch';
import {render} from 'react-dom';

render(<Deck id="deck"/>, global.document.getElementById('app'));

bespoke.from('#deck', [classes(), hash(), jumpy(), keys(), touch()]);
