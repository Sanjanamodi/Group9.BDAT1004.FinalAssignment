import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mapGraph: {},
  lineGraph: {},
  pieGraph: {},
  barGraph: {},
  errorResponse: {},
  lineGraphErrorResponse: {},
  pieGraphErrorResponse: {},
  barGraphErrorResponse: {},
  error: false,
  loading: false,
};

export const graphSlice = createSlice({
  name: "graph",
  initialState: initialState,
  reducers: {
    GET_MAPGRAPH_REQUEST: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    GET_MAPGRAPH_SUCCESS: (state, action) => {
      return {
        ...state,
        mapGraph: action.payload,
        loading: false,
        error: false,
      };
    },
    GET_MAPGRAPH_ERROR: (state, action) => {
      return {
        ...state,
        error: true,
        errorResponse: action.payload,
        loading: false,
      };
    },
    GET_LINEGRAPH_REQUEST: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    GET_LINEGRAPH_SUCCESS: (state, action) => {
      return {
        ...state,
        lineGraph: action.payload,
        loading: false,
        error: false,
      };
    },
    GET_LINEGRAPH_ERROR: (state, action) => {
      return {
        ...state,
        error: true,
        lineGraphErrorResponse: action.payload,
        loading: false,
      };
    },
    GET_PIEGRAPH_REQUEST: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    GET_PIEGRAPH_SUCCESS: (state, action) => {
      return {
        ...state,
        pieGraph: action.payload,
        loading: false,
        error: false,
      };
    },
    GET_PIEGRAPH_ERROR: (state, action) => {
      return {
        ...state,
        error: true,
        pieGraphErrorResponse: action.payload,
        loading: false,
      };
    },
    GET_BARGRAPH_REQUEST: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    GET_BARGRAPH_SUCCESS: (state, action) => {
      return {
        ...state,
        barGraph: action.payload,
        loading: false,
        error: false,
      };
    },
    GET_BARGRAPH_ERROR: (state, action) => {
      return {
        ...state,
        error: true,
        barGraphErrorResponse: action.payload,
        loading: false,
      };
    },
  },
});

export const {
  GET_MAPGRAPH_REQUEST,
  GET_MAPGRAPH_SUCCESS,
  GET_MAPGRAPH_ERROR,
  GET_LINEGRAPH_ERROR,
  GET_LINEGRAPH_REQUEST,
  GET_LINEGRAPH_SUCCESS,
  GET_PIEGRAPH_ERROR,
  GET_PIEGRAPH_REQUEST,
  GET_PIEGRAPH_SUCCESS,
  GET_BARGRAPH_ERROR,
  GET_BARGRAPH_REQUEST,
  GET_BARGRAPH_SUCCESS,
} = graphSlice.actions;
