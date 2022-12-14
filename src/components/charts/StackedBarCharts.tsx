import React from "react";
import styled from "@emotion/styled";

interface Props {
  ratios: { ratio: number; bgColor: string }[];
}

export default function StackedBarCharts({ ratios }: Props) {
  return (
    <Wrapper>
      {ratios.map(({ ratio, bgColor }) => (
        <StackItem key={bgColor} ratio={ratio} bgColor={bgColor} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 16px;
  border-radius: 2px;
`;

const StackItem = styled.div<{ ratio: number; bgColor: string }>`
  width: ${({ ratio }) => ratio}%;
  height: 100%;
  background: ${({ bgColor }) => bgColor};
`;
