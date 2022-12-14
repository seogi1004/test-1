import colors from "@/styles/colors";
import styled from "@emotion/styled";
import React from "react";

interface Props {
  ratio: number;
  bgColor: string;
}

export default function StickBarChart({ ratio, bgColor }: Props) {
  return (
    <Wrapper>
      <Bar ratio={ratio} bgColor={bgColor} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: ${colors.gray0(0.047)};
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
