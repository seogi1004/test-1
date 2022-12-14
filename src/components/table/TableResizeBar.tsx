import React from "react";
import colors from "@/styles/colors";
import styled from "@emotion/styled";
import withTableHeightResize, {
  ITableHeightResize,
} from "@/components/hocs/withTableHeightResize";

interface Props {}

function TableResizeBar({
  resizeHeight,
  startResize,
  stopResize,
}: Props & ITableHeightResize) {
  const handleScrollBoxMouseMove = (e: MouseEvent) => {
    resizeHeight(e.pageY);
  };

  const handleScrollBoxMouseUp = () => {
    stopResize();
    document.removeEventListener("mousemove", handleScrollBoxMouseMove, true);
    document.removeEventListener("mouseup", handleScrollBoxMouseUp, true);
  };

  const handleScrollBoxMouseDown: React.MouseEventHandler = () => {
    startResize();
    document.addEventListener("mousemove", handleScrollBoxMouseMove, true);
    document.addEventListener("mouseup", handleScrollBoxMouseUp, true);
  };
  return (
    <ResizeBarBox onMouseDown={handleScrollBoxMouseDown}>
      <ResizeBar draggable={false} />
    </ResizeBarBox>
  );
}

const ResizeBarBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 15px;
  transform: translateY(-50%);
  cursor: row-resize;
  :hover > div {
    background-color: ${colors.blue100()};
  }
  :active > div {
    background-color: ${colors.blue100()};
  }
`;

const ResizeBar = styled.div`
  width: 100%;
  height: 3px;
  background-color: transparent;
`;

export default React.memo(withTableHeightResize(TableResizeBar));
