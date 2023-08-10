import React from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CCardHeader,
  CRow,
  CContainer,
} from "@coreui/react";
import "./dashboard.css";
import { MapWrapper, LineWrapper, PieWrapper, BarWrapper } from "../graph";

const Dashboard = () => {
  return (
    <CContainer>
      <CRow>
        <CCol xs={8}>
          <MapWrapper />
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={6}>
          <LineWrapper />
        </CCol>
        <CCol>
          <PieWrapper />
        </CCol>
      </CRow>
      <CRow>
        <BarWrapper />
      </CRow>
    </CContainer>
  );
};

export default Dashboard;
