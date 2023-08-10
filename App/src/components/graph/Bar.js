import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { barGraph } from "../../redux/action";
import { parseDataForBar } from "../../utils/parseApiResults";
import { Chart } from "react-google-charts";
import { CSpinner } from "@coreui/react";

const options = {
  title: "Subscription bought by Gender for each country",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total People",
    minValue: 0,
  },
  vAxis: {
    title: "Country",
  },
};

const Bar = (props) => {
  const [barList, setBarList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    barGraph(dispatch);
  }, []);

  useEffect(() => {
    if (Object.keys(props?.response).length > 0) {
      const barData = props?.response?.data ?? [];
      setBarList(parseDataForBar(barData));
      //console.log(barData, parseDataForBar(barData));
    }
  }, [props?.response]);

  return (
    <>
      <h5>Bar Chart</h5>
      {barList.length > 0 ? (
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={barList}
          options={options}
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
    response: graph.barGraph,
    error: graph.error,
    errorResponse: graph.barGraphErrorResponse,
  };
}

export const BarWrapper = connect(mapStateToProps)(Bar);
