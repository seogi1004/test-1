import { RootState } from "@/stores/store";
import React from "react";
import { useSelector } from "react-redux";

export interface IWidthRatioList {
  widthRatioList: number[];
}

export default function withWidthRatioList<T>(
  Component: React.FC<T & IWidthRatioList>
) {
  return React.memo((props: T) => {
    const widthRatioList = useSelector(
      (state: RootState) => state.table.widthRatioList
    );

    const wrappedProps: T & IWidthRatioList = {
      ...props,
      ...{ widthRatioList },
    };

    return <Component {...wrappedProps} />;
  });
}
