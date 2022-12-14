import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { setTotalForRatio } from "@/utils/table.util";
import PlaneBarChart from "@/components/charts/PlaneBarChart";
import ResponseContent from "@/components/contents/ResponseContent";
import { Transaction } from "@/models/transaction";
import colors from "@/styles/colors";
import { comma } from "@/utils/format.util";
import ResponseText from "@/components/contents/ResponseText";
import StackedBarCharts from "@/components/charts/StackedBarCharts";
import withMaxResponse, {
  IMaxResponse,
} from "@/components/hocs/withMaxResponse";

interface Props {
  transaction: Transaction;
}

function ResponseTimeCell({ transaction, maxResponse }: Props & IMaxResponse) {
  const getDetailRatio = setTotalForRatio(transaction.responseTime);
  const getResponseRatio = setTotalForRatio(maxResponse);
  return (
    <ResponseContent>
      <PlaneBarChart
        ratio={getResponseRatio(transaction.responseTime)}
        bgColor={colors.jennifer100(0.2)}
      />
      <ResponseText time={comma(transaction.responseTime)} />
      <StackedBarCharts
        ratios={[
          {
            bgColor: colors.green100(),
            ratio: getDetailRatio(transaction.methodTime),
          },
          {
            bgColor: colors.blue100(),
            ratio: getDetailRatio(transaction.sqlTime),
          },
          {
            bgColor: colors.orange100(),
            ratio: getDetailRatio(transaction.externalCallTime),
          },
          {
            bgColor: colors.purple100(),
            ratio: getDetailRatio(transaction.batchTime),
          },
        ]}
      />
    </ResponseContent>
  );
}

export default React.memo(withMaxResponse(ResponseTimeCell));
