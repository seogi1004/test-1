import React from "react";
import useInViewport from "@/hooks/useInViewport";

export interface IIsInViewPort<K extends HTMLElement> {
  isInViewport: boolean;
  elemRef: React.RefObject<K>;
}

export default function withIsInViewPort<T, K extends HTMLElement>(
  Component: React.FC<T & IIsInViewPort<K>>,
  threshold: number = 0.2
) {
  return React.memo((props: T) => {
    const [isInViewport, ref] = useInViewport<K>(threshold);
    const wrappedProps: T & IIsInViewPort<K> = {
      ...props,
      ...{ isInViewport: isInViewport, elemRef: ref },
    };
    return <Component {...wrappedProps} />;
  });
}
