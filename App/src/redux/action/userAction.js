import {
  GET_MAPGRAPH_ERROR,
  GET_MAPGRAPH_REQUEST,
  GET_MAPGRAPH_SUCCESS,
  GET_LINEGRAPH_ERROR,
  GET_LINEGRAPH_REQUEST,
  GET_LINEGRAPH_SUCCESS,
  GET_PIEGRAPH_ERROR,
  GET_PIEGRAPH_REQUEST,
  GET_PIEGRAPH_SUCCESS,
  GET_BARGRAPH_ERROR,
  GET_BARGRAPH_REQUEST,
  GET_BARGRAPH_SUCCESS,
} from "../reducer/userReducer";
import { getRequest } from "../../utils/baseApiMethods";

export async function mapGraph(dispatch) {
  dispatch(GET_MAPGRAPH_REQUEST());
  const login = await getRequest(`/movie/map_graph`);
  if (login.status === 200) {
    dispatch(GET_MAPGRAPH_SUCCESS(login.data));
  } else {
    dispatch(GET_MAPGRAPH_ERROR(login.data));
  }
}

export async function lineGraph(dispatch) {
  dispatch(GET_LINEGRAPH_REQUEST());
  const response = await getRequest(`/movie/line_graph`);
  if (response.status === 200) {
    dispatch(GET_LINEGRAPH_SUCCESS(response.data));
  } else {
    dispatch(GET_LINEGRAPH_ERROR(response.data));
  }
}

export async function pieGraph(dispatch) {
  dispatch(GET_PIEGRAPH_REQUEST());
  const response = await getRequest(`/movie/pie_graph`);
  if (response.status === 200) {
    dispatch(GET_PIEGRAPH_SUCCESS(response.data));
  } else {
    dispatch(GET_PIEGRAPH_ERROR(response.data));
  }
}

export async function barGraph(dispatch) {
  dispatch(GET_BARGRAPH_REQUEST());
  const response = await getRequest(`/movie/bar_graph`);
  if (response.status === 200) {
    dispatch(GET_BARGRAPH_SUCCESS(response.data));
  } else {
    dispatch(GET_BARGRAPH_ERROR(response.data));
  }
}

// //Reset forgot password
// export async function resetForgotPassword(dispatch) {
//   dispatch(FORGOT_PASSWORD_RESET());
// }
