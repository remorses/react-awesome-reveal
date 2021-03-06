import * as React from 'react';
import { AnimationString, CommonProps, Direction } from '../const';
import { Reveal } from '../Reveal';

interface ZoomOptions {
  direction?: Direction;
  reverse?: boolean;
}

function getZoomInAnimationString(direction: Direction): AnimationString {
  switch (direction) {
    case 'top':
      return 'zoomInUp';
    case 'left':
      return 'zoomInLeft';
    case 'bottom':
      return 'zoomInDown';
    case 'right':
      return 'zoomInRight';
    default:
      return 'zoomIn';
  }
}

function getZoomOutAnimationString(direction: Direction): AnimationString {
  switch (direction) {
    case 'top':
      return 'zoomOutDown';
    case 'left':
      return 'zoomOutRight';
    case 'bottom':
      return 'zoomOutUp';
    case 'right':
      return 'zoomOutLeft';
    default:
      return 'zoomOut';
  }
}

function getZoomAnimationString(
  direction: Direction,
  reverse: boolean
): AnimationString {
  return reverse
    ? getZoomOutAnimationString(direction)
    : getZoomInAnimationString(direction);
}

export const Zoom: React.FC<ZoomOptions & CommonProps> = ({
  direction,
  reverse = false,
  ...props
}) => (
  <Reveal animation={getZoomAnimationString(direction, reverse)} {...props} />
);
