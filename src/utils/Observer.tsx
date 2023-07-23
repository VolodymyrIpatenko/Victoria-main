import React, { useRef, useState } from 'react';
import { useIntersectionObserver } from '@fremtind/jkl-react-hooks';

interface ObserverProps {
  children: (props: { isIntersecting: boolean }) => React.ReactNode;
}

const Observer: React.FC<ObserverProps> = ({ children }) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const onIntersect = (entries: IntersectionObserverEntry[]) =>
    setIsIntersecting(entries.some(entry => entry.isIntersecting));

  const fallback = () =>
    console.log('useful for browsers that do not support intersection observer');

  useIntersectionObserver(targetRef, onIntersect, fallback);

  return (
    <div ref={targetRef} className={isIntersecting ? 'intersect' : 'not-intersect'}>
      {children({ isIntersecting })}
    </div>
  );
};

export default Observer;
