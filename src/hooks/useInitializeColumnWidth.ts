import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { setWidthRatioList } from "@/stores/tableSlice";
import { setTotalForRatio } from "@/utils/table.util";

export default function useInitializeColumnWidth() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    const getInitialWidthList = () => {
      const viewportWidth = window.innerWidth;
      const getWidthRatio = setTotalForRatio(viewportWidth);
      const initialWidthRatio = getWidthRatio(Math.round(viewportWidth / 14));
      const widthList = Array(14).fill(initialWidthRatio);
      return widthList;
    };
    dispatch(setWidthRatioList(getInitialWidthList()));
  }, [dispatch]);
}
