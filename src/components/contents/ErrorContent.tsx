import React from "react";
import styled from "@emotion/styled";
import { multiLineEllipsis } from "@/styles/commonStyles";
import colors from "@/styles/colors";

interface Props {
  content: string;
}

export default function ErrorContent({ content }: Props) {
  return (
    <Wrapper occurred={Boolean(content)}>
      <TextBox>{content}</TextBox>
    </Wrapper>
  );
}

const Wrapper = styled.section<{ occurred?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  background: ${({ occurred }) =>
    occurred ? colors.red100(0.1) : "transparent"};
`;

const TextBox = styled.span`
  ${multiLineEllipsis(2)}
  width: 100%;
  font-size: 12px;
  line-height: 1.5;
  color: ${colors.red100()};
  word-break: break-all;
`;
