/* eslint react/no-danger: 0 */
import React, {PropTypes} from 'react';

export function Slide (props) {
  return <div dangerouslySetInnerHTML={{__html: props.src}}/>;
}

Slide.propTypes = {
  src: PropTypes.string.isRequired
};
