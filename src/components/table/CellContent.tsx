import React from "react";
import { Transaction } from "@/models/transaction";
import { setTotalForRatio } from "@/utils/table.util";
import PlaneBarChart from "@/components/charts/PlaneBarChart";
import StickBarChart from "@/components/charts/StickBarChart";
import ErrorContent from "@/components/contents/ErrorContent";
import PlainContent from "@/components/contents/PlainContent";
import ResponseContent from "@/components/contents/ResponseContent";
import ResponseText from "@/components/contents/ResponseText";
import { comma, intPercent, number2Time } from "@/utils/format.util";
import colors from "@/styles/colors";
import ResponseTimeCell from "@/components/cells/ResponseTimeCell";

interface Props {
  transaction: Transaction;
  contentKey: keyof typeof Transaction["nameMap"];
}

function CellContent({ transaction, contentKey }: Props) {
  const getDetailRatio = setTotalForRatio(transaction.responseTime);

  const map: Record<keyof typeof Transaction["nameMap"], React.ReactNode> = {
    application: <PlainContent>{transaction.application}</PlainContent>,
    batchTime: (
      <ResponseContent>
        <PlaneBarChart
          ratio={getDetailRatio(transaction.batchTime)}
          bgColor={colors.purple100(0.2)}
        />
        <ResponseText
          time={comma(transaction.batchTime)}
          ratio={intPercent(getDetailRatio(transaction.batchTime))}
        />
        <StickBarChart
          bgColor={colors.purple100()}
          ratio={getDetailRatio(transaction.batchTime)}
        />
      </ResponseContent>
    ),
    clientIp: <PlainContent>{transaction.clientIp}</PlainContent>,
    cpu: <PlainContent align="right">{comma(transaction.cpu)}</PlainContent>,
    domain: <PlainContent>{transaction.domain}</PlainContent>,
    endTime: <PlainContent>{number2Time(transaction.endTime)}</PlainContent>,
    error: <ErrorContent content={transaction.error} />,
    externalCallTime: (
      <ResponseContent>
        <PlaneBarChart
          ratio={getDetailRatio(transaction.externalCallTime)}
          bgColor={colors.orange100(0.2)}
        />
        <ResponseText
          time={comma(transaction.externalCallTime)}
          ratio={intPercent(getDetailRatio(transaction.externalCallTime))}
        />
        <StickBarChart
          bgColor={colors.orange100()}
          ratio={getDetailRatio(transaction.externalCallTime)}
        />
      </ResponseContent>
    ),
    fetch: (
      <PlainContent align="right">{comma(transaction.fetch)}</PlainContent>
    ),
    instance: <PlainContent>{transaction.instance}</PlainContent>,
    methodTime: (
      <ResponseContent>
        <PlaneBarChart
          ratio={getDetailRatio(transaction.methodTime)}
          bgColor={colors.green100(0.2)}
        />
        <ResponseText
          time={comma(transaction.methodTime)}
          ratio={intPercent(getDetailRatio(transaction.methodTime))}
        />
        <StickBarChart
          bgColor={colors.green100()}
          ratio={getDetailRatio(transaction.methodTime)}
        />
      </ResponseContent>
    ),
    responseTime: <ResponseTimeCell transaction={transaction} />,
    sqlTime: (
      <ResponseContent>
        <PlaneBarChart
          ratio={getDetailRatio(transaction.sqlTime)}
          bgColor={colors.blue100(0.2)}
        />
        <ResponseText
          time={comma(transaction.sqlTime)}
          ratio={intPercent(getDetailRatio(transaction.sqlTime))}
        />
        <StickBarChart
          bgColor={colors.blue100()}
          ratio={getDetailRatio(transaction.sqlTime)}
        />
      </ResponseContent>
    ),
    startTime: (
      <PlainContent>{number2Time(transaction.startTime)}</PlainContent>
    ),
  };

  return <>{map[contentKey]}</>;
}

export default React.memo(CellContent);
