import React, {PropTypes} from 'react';
import {Slide} from './slide';

const slides = [
  'title',
  'mirage',
  'routes',
  'handler',
  'handler+redux',
  'server-hapi',
  'server-express'
];

export function Deck (props) {
  return (
    <div id={props.id}>
      {slides.map(slide => <Slide key={slide} src={require(`../slides/${slide}.md`)}/>)}
    </div>
  );
}

Deck.propTypes = {
  id: PropTypes.string.isRequired
};
