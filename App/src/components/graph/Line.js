import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { lineGraph } from "../../redux/action";
import { parseDataForLine } from "../../utils/parseApiResults";
import { Chart } from "react-google-charts";
import { CSpinner } from "@coreui/react";

const options = {
  title: "Subscription Count for each year",
  curveType: "none",
  legend: { position: "bottom" },
};

const Line = (props) => {
  const [lineList, setLineList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    lineGraph(dispatch);
  }, []);

  useEffect(() => {
    if (Object.keys(props?.response).length > 0) {
      const lineData = props?.response?.data ?? [];
      setLineList(parseDataForLine(lineData));
    }
  }, [props?.response]);

  return (
    <>
      <h5>Line Chart</h5>
      {lineList.length > 0 ? (
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          options={options}
          data={lineList}
        />
      ) : (
        <CSpinner />
      )}
    </>
  );
};

function mapStateToProps(state) {
  const { graph } = state;
  return {
    loading: graph.loading,
    response: graph.lineGraph,
    error: graph.error,
    errorResponse: graph.lineGraphErrorResponse,
  };
}

export const LineWrapper = connect(mapStateToProps)(Line);
