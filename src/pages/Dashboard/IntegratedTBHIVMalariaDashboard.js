import React from "react";
import Dashboard from "./index";
import { MalaridashboardGraphs } from "../../constants";
import { Card } from "@material-ui/core";
import { CardBody } from "../../components";
import Map from "../../components/Map/Map";
import MapLeaf from "../../components/Map/MapLeaf";


export default function IntegratedTBHIVMalariaDashboard() {
  return (
    <>
      <Card>
        <CardBody>
          {/* <Map /> */}
          <MapLeaf />
        </CardBody>
      </Card>
      <Dashboard data={MalaridashboardGraphs} />
    </>
  );
}
