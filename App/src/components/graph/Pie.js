import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { pieGraph } from "../../redux/action";
import { parseDataForPie } from "../../utils/parseApiResults";
import { Chart } from "react-google-charts";
import { CSpinner } from "@coreui/react";

const options = {
  title: "Subscription Bought for devices",
  is3D: true,
};

const Pie = (props) => {
  const [pieList, setPieList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    pieGraph(dispatch);
  }, []);

  useEffect(() => {
    if (Object.keys(props?.response).length > 0) {
      const pieData = props?.response?.data ?? [];
      setPieList(parseDataForPie(pieData));
    }
  }, [props?.response]);

  return (
    <>
      <h5>Pie Chart</h5>
      {pieList.length > 0 ? (
        <Chart
          chartType="PieChart"
          data={pieList}
          options={options}
          width={"100%"}
          height={"400px"}
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
    response: graph.pieGraph,
    error: graph.error,
    errorResponse: graph.pieGraphErrorResponse,
  };
}

export const PieWrapper = connect(mapStateToProps)(Pie);
