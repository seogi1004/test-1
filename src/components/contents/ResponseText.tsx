import colors from "@/styles/colors";
import styled from "@emotion/styled";
import React from "react";

interface Props {
  time: string;
  ratio?: string;
}

export default function ResponseText({ time, ratio }: Props) {
  return (
    <Wrapper>
      <Time>{time}</Time>
      {ratio && <Ratio>{ratio}</Ratio>}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

const Time = styled.span`
  color: ${colors.gray10()};
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;
  text-align: left;
`;

const Ratio = styled.span`
  color: ${colors.gray10()};
  font-weight: 400;
  font-size: 10px;
  line-height: 1.6;
  text-align: right;
`;
