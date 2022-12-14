import React from "react";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

export default function ResponseContent({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;
`;
