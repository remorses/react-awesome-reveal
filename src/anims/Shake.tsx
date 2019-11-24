import * as React from 'react';
import { Animated } from 'react-animated-css';
import { useInView } from 'react-intersection-observer';
import { CommonProps } from '../const';

export const Shake: React.FC<CommonProps> = ({
  children,
  delay,
  duration,
  count = 1,
  className,
  style,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      <Animated
        animationIn="shake"
        animationOut="shake"
        animationInDuration={duration}
        animationOutDuration={duration}
        animationInDelay={delay}
        isVisible={inView}
        className={className}
        style={{ ...style, animationIterationCount: count }}
      >
        {children}
      </Animated>
    </div>
  );
};
