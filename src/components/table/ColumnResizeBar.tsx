import React from "react";
import colors from "@/styles/colors";
import styled from "@emotion/styled";
import withWidthRatioList, {
  IWidthRatioList,
} from "@/components/hocs/withWidthRatioList";
import withResizeColumn, {
  IResizeColumn,
} from "@/components/hocs/withResizeColumn";

interface Props {
  index: number;
}

function ColumnResizeBar({
  initialize,
  resizeColumn,
  leftOffset,
  reset,
}: Props & IWidthRatioList & IResizeColumn) {
  const handlerColumnResizeBarMouseMove = (e: MouseEvent) => {
    e.stopPropagation();
    resizeColumn(e.pageX, window.innerWidth);
  };

  const handlerColumnResizeBarMouseUp = (e: MouseEvent) => {
    e.stopPropagation();
    reset();

    document.removeEventListener(
      "mousemove",
      handlerColumnResizeBarMouseMove,
      true
    );
    document.removeEventListener(
      "mouseup",
      handlerColumnResizeBarMouseUp,
      true
    );
  };

  const handlerColumnResizeBarMouseDown: React.MouseEventHandler = (e) => {
    e.stopPropagation();
    initialize(e.pageX, window.innerWidth);

    document.addEventListener(
      "mousemove",
      handlerColumnResizeBarMouseMove,
      true
    );
    document.addEventListener("mouseup", handlerColumnResizeBarMouseUp, true);
  };

  return (
    <Wrapper
      style={{ left: `calc(${leftOffset}% + 11px)` }}
      onMouseDown={handlerColumnResizeBarMouseDown}
    />
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 1000;
  width: 4px;
  height: 100%;
  transform: translateX(-50%);
  cursor: col-resize;

  :hover {
    background: ${colors.blue100()};
  }
  :active {
    background: ${colors.blue100()};
  }
`;

export default React.memo(
  withWidthRatioList(withResizeColumn(ColumnResizeBar))
);
