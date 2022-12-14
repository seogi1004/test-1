import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

export interface IWidthRatio {
  widthRatio: number;
}

export default function withWidthRatio<T>(
  Component: React.FC<T & IWidthRatio>
) {
  return React.memo((props: T & { index: number }) => {
    const getWidthRatio = (index: number) => (state: RootState) =>
      state.table.widthRatioList[index];
    const widthRatio = useSelector(getWidthRatio(props.index));

    const wrappedProps: T & IWidthRatio = {
      ...props,
      ...{ widthRatio },
    };

    return <Component {...wrappedProps} />;
  });
}
