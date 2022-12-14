import React from "react";
import colors from "@/styles/colors";
import styled from "@emotion/styled";
import GridTable from "@/components/GridTable";
import useInitializeColumnWidth from "@/hooks/useInitializeColumnWidth";
import useInitializeTransactionList from "@/hooks/useInitializeTransactionList";

const badgeList = [
  { content: "Method", bgColor: colors.green100() },
  { content: "SQL", bgColor: colors.blue100() },
  { content: "External Call", bgColor: colors.orange100() },
  { content: "Batch job", bgColor: colors.purple100() },
];

export default function App() {
  useInitializeColumnWidth();
  useInitializeTransactionList();
  return (
    <AppWrapper>
      <AppHeader>
        {badgeList.map(({ content, bgColor }) => {
          return (
            <Badge key={bgColor} bgColor={bgColor}>
              {content}
            </Badge>
          );
        })}
      </AppHeader>
      <GridTable />
    </AppWrapper>
  );
}

const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const AppHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  gap: 12px;
`;

const Badge = styled.div<{ bgColor: string }>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  line-height: 1.35;
  color: ${colors.gray10()};

  ::before {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ bgColor }) => bgColor};
    content: "";
  }
`;
