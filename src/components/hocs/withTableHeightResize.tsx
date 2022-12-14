import { setTableHeight } from "@/stores/tableSlice";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";

export interface ITableHeightResize {
  resizeHeight: (mouseXPos: number) => void;
  startResize: () => void;
  stopResize: () => void;
}

export default function withTableHeightResize<T>(
  Component: React.FC<T & ITableHeightResize>
) {
  return (props: T) => {
    const isResizing = useRef(false);

    const dispatch = useDispatch();
    const resizeHeight = (mouseXPos: number) => {
      if (!isResizing.current) return;
      requestAnimationFrame(() => {
        dispatch(setTableHeight(mouseXPos - 80));
      });
    };
    const startResize = () => {
      isResizing.current = true;
    };
    const stopResize = () => {
      isResizing.current = false;
    };

    const wrappedProps: T & ITableHeightResize = {
      ...props,
      resizeHeight,
      startResize,
      stopResize,
    };

    return <Component {...wrappedProps} />;
  };
}
