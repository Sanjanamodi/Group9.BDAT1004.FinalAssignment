import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { mapGraph } from "../../redux/action";
import { parseDataForMap } from "../../utils/parseApiResults";
import { Chart } from "react-google-charts";
import { CSpinner } from "@coreui/react";

export const options = {
  colorAxis: { colors: ["#B3E5FC", "#4FC3F7", "#03A9F4", "#01579B"] },
};

const Map = (props) => {
  const [mapList, setMapList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    mapGraph(dispatch);
  }, []);

  useEffect(() => {
    if (Object.keys(props?.response).length > 0) {
      const mapData = props?.response?.data ?? [];
      setMapList(parseDataForMap(mapData));
    }
  }, [props?.response]);

  return (
    <>
      <h5>Map</h5>
      {mapList.length > 0 ? (
        <Chart
          chartType="GeoChart"
          width="100%"
          height="400px"
          data={mapList}
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
    response: graph.mapGraph,
    error: graph.error,
    errorResponse: graph.errorResponse,
  };
}

export const MapWrapper = connect(mapStateToProps)(Map);
