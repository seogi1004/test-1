import React from "react";
import styled from "@emotion/styled";
import colors from "@/styles/colors";
import { multiLineEllipsis } from "@/styles/commonStyles";

type Aligns = "left" | "right";

interface Props {
  children: React.ReactNode;
  align?: Aligns;
}

export default function PlainContent({ children, align = "left" }: Props) {
  return (
    <Wrapper align={align}>
      <TextBox>{children}</TextBox>
    </Wrapper>
  );
}

const Wrapper = styled.section<{ align: Aligns }>`
  display: flex;
  justify-content: ${({ align }) =>
    align === "left" ? "flex-start" : "flex-end"};
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TextBox = styled.span`
  ${multiLineEllipsis(2)}
  color: ${colors.gray10()};
  font-size: 12px;
  line-height: 1.5;
  word-break: break-all;
`;
