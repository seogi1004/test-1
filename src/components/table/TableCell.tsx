import React from "react";
import colors from "@/styles/colors";
import styled from "@emotion/styled";
import withWidthRatio, { IWidthRatio } from "../hocs/withWidthRatio";

interface Props {
  index: number;
  isLastOne: boolean;
  children: React.ReactNode;
}

function TableCell({
  isLastOne = false,
  widthRatio,
  children,
}: Props & IWidthRatio) {
  const style: React.CSSProperties = isLastOne
    ? {
        flex: 1,
        minWidth: 0,
      }
    : {
        width: `${widthRatio}vw`,
      };
  return <Wrapper style={style}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 100%;
  border-right: 1px solid ${colors.gray40()};

  > * {
    overflow: hidden;
    padding: 8px;
  }
`;

export default withWidthRatio(React.memo(TableCell));
