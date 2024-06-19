import React, { useState, useEffect } from "react";
import IPAUnits from "./IPAUnits";
import FundSummary from "./FundSummary";
import FundDisbursed from "./FundDisbursed.js";
import { scoresId } from "../constants/Ids.js";

import NQAS from "./NQAS";
import AssessmentScore from "./AssessmentScore";
import CKSI from "./CKSI.js";

const Main = () => {
  return (
    <div className="main-container px-2">
      <div className="row m-2 p-3">
        <IPAUnits />
      </div>
      <div className="row">
        <div className="col border m-2 p-3">
          <h5 className="fw-semibold">Cumulative IPA Funds Summaries</h5>
          <FundSummary />
        </div>
        <div className="col border m-2 p-3">
          <h5 className="fw-semibold pb-5">Cumulative RBF Disbursed (In Lakhs) </h5>
          <FundDisbursed />
        </div>
      </div>
      <div className="border p-3">
          <NQAS chartId="PHC/UPHC" scoreId={scoresId["PHC/UPHC"]} />
          <AssessmentScore chartId="PHC/UPHC" scoreId={scoresId["PHC/UPHC"]} />
          <CKSI chartId="PHC/UPHC" scoreId={scoresId["PHC/UPHC"]} />

          <NQAS chartId="CHC/SDH" scoreId={scoresId["CHC/SDH"]} />
          <AssessmentScore chartId="CHC/SDH" scoreId={scoresId["CHC/SDH"]} />
          <CKSI chartId="CHC/SDH" scoreId={scoresId["CHC/SDH"]} />

          <NQAS chartId="DH" scoreId={scoresId["DH"]} />
          <AssessmentScore chartId="DH" scoreId={scoresId["DH"]} />
          <CKSI chartId="DH" scoreId={scoresId["DH"]} />

          <AssessmentScore chartId="DHT" scoreId={scoresId["DHT"]} />

          <AssessmentScore chartId="SHT/INS" scoreId={scoresId["SHT/INS"]} />
      </div>
    </div>
  );
};

export default Main;
