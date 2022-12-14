import React from "react";
import colors from "@/styles/colors";
import styled from "@emotion/styled";
import withWidthRatio, { IWidthRatio } from "@/components/hocs/withWidthRatio";

interface Props {
  isLastOne: boolean;
  displayName: string;
  onClick: () => void;
  children: React.ReactNode;
}

function ColumnName({
  isLastOne,
  displayName,
  widthRatio,
  onClick,
  children,
}: Props & IWidthRatio) {
  const handleClickColumnName: React.MouseEventHandler = (e) => {
    e.stopPropagation();
    onClick();
  };
  const style: React.CSSProperties = isLastOne
    ? {
        flex: 1,
        minWidth: 0,
        paddingRight: "10px",
      }
    : { width: `${widthRatio}vw` };
  return (
    <Wrapper title={displayName} style={style} onClick={handleClickColumnName}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.li`
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border-right: 1px solid ${colors.gray40()};

  cursor: pointer;

  :last-of-type {
    border-right: none;
  }
`;

export default withWidthRatio(ColumnName);
