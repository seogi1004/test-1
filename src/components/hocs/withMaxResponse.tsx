import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

export interface IMaxResponse {
  maxResponse: number;
}

export default function withMaxResponse<T>(
  Component: React.FC<T & IMaxResponse>
) {
  return (props: T) => {
    const maxResponse = useSelector(
      (state: RootState) => state.transaction.maxResponse
    );

    const wrappedProps: T & IMaxResponse = {
      ...props,
      maxResponse,
    };
    return <Component {...wrappedProps} />;
  };
}
