import { setWidthRatioList } from "@/stores/tableSlice";
import {
  replaceElements,
  setLimitsToGetValue,
  setTotalForRatio,
  setTotalForValue,
} from "@/utils/table.util";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";

export interface IResizeColumn {
  leftOffset: number;
  reset: () => void;
  initialize: (mousePosX: number, entireWidth: number) => void;
  resizeColumn: (mousePosX: number, entireWidth: number) => void;
}

export default function withResizeColumn<
  T extends { index: number; widthRatioList: number[] }
>(Component: React.FC<T & IResizeColumn>) {
  return (props: T) => {
    const { index, widthRatioList } = props;
    const [currentRatio, nextRatio] = [
      widthRatioList[index],
      widthRatioList[index + 1],
    ];

    const leftOffset = widthRatioList.slice(0, index + 1).reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    const dispatch = useDispatch();

    const resizingIndex = useRef(-1);
    const mouseXAnchor = useRef(-1);
    const resizeRatioLimit = useRef(-1);

    const reset = () => {
      resizingIndex.current = -1;
      mouseXAnchor.current = -1;
      resizeRatioLimit.current = -1;
    };

    const initialize = (mousePosX: number, entireWidth: number) => {
      resizingIndex.current = index;
      mouseXAnchor.current = mousePosX;
      const getValueFrom = setTotalForValue(entireWidth);
      resizeRatioLimit.current =
        getValueFrom(currentRatio) + getValueFrom(nextRatio) - 20;
    };

    const resizeColumn = (mousePosX: number, entireWidth: number) => {
      if (resizingIndex.current !== index) return;
      if (mouseXAnchor.current < 0) return;
      if (resizeRatioLimit.current === -1) return;

      const getNewRatio = setTotalForRatio(entireWidth);
      const getValueFrom = setTotalForValue(entireWidth);
      const diff = mousePosX - mouseXAnchor.current;
      const widthLimit = resizeRatioLimit.current;
      const calculatedLeft = getValueFrom(currentRatio) + diff;
      const calculatedRight = getValueFrom(nextRatio) - diff;
      const getValueBetweenLimits = setLimitsToGetValue(20, widthLimit);
      const leftNewWidth = getValueBetweenLimits(calculatedLeft);
      const rightNewWidth = getValueBetweenLimits(calculatedRight);
      const newWidthRatioList = replaceElements(widthRatioList, index, [
        getNewRatio(leftNewWidth),
        getNewRatio(rightNewWidth),
      ]);

      mouseXAnchor.current = mousePosX - diff;
      requestAnimationFrame(() => {
        dispatch(setWidthRatioList(newWidthRatioList));
      });
    };

    const wrappedProps: T & IResizeColumn = {
      ...props,
      ...{
        leftOffset,
        reset,
        initialize,
        resizeColumn,
      },
    };

    return <Component {...wrappedProps} />;
  };
}
