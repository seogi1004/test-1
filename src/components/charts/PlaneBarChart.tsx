import colors from "@/styles/colors";
import styled from "@emotion/styled";
import React from "react";

interface Props {
  ratio: number;
  bgColor: string;
}

export default function PlaneBarChart({ ratio, bgColor }: Props) {
  return (
    <Wrapper>
      <Bar ratio={ratio} bgColor={bgColor} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Bar = styled.div<{ ratio: number; bgColor: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(${({ ratio }) => ratio - 100}%);
  background: ${({ bgColor }) => bgColor};
`;
