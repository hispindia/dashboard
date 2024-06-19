import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { ApiService } from "../api/analytics.api";
import { qMonths } from "../constants/Ids";
import { getQuarters } from "./utils";
import LeagueTable from "./LeagueTable";

const CKSI = ({ chartId, scoreId }) => {
  const period = useSelector((state) => state.navbar.period);
  const orgUnit = useSelector((state) => state.outree.clickedOU);

  const [xAxis, setXAxis] = useState([]);
  const [pkScore, setPKScore] = useState("");
  const [quarter, setQuarter] = useState("");

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: xAxis,
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    plotOptions: {
      series: {
        color: scoreId["color"],
        dataLabels: {
          enabled: true,
        },
      },
    },

    series: [
      {
        name: "CKSI",
        data: pkScore,
      },
    ],
    credits: false,
  };

  useEffect(() => {
    setPKScore("");
    if (orgUnit) {
      const quarters = getQuarters(period);
      ApiService.getAssesmentScore(
        scoreId["pkId"],
        orgUnit.id,
        scoreId["group"],
        quarters.join(';')
      ).then((res) => {
        if (res.status == "ERROR") return;
        var last4Quarter = [];
        var metaData = {};
        var dataRes = {};
        var plotValues = [];
        var axisValues = [];
        var dataPeriod = "";

        for (let item in res.metaData.items)
          metaData[item] = res.metaData.items[item].name;

        last4Quarter = res.metaData.dimensions.pe.reverse();
        res.rows.forEach((row) => {
          if (!dataRes[row[2]]) dataRes[row[2]] = {};
          dataRes[row[2]][row[1]] = row[3];
        });

        for (let pe of last4Quarter) {
          if (dataRes[pe]) {
            dataPeriod = pe;
            for (let id in dataRes[pe]) {
              plotValues.push({
                name: metaData[id],
                value: Number(dataRes[pe][id]),
              });
            }
            break;
          }
        }

        plotValues.sort((a, b) => b.value - a.value);

        axisValues = plotValues.map((dv) => dv.name);
        plotValues = plotValues.map((dv) => dv.value);
        setXAxis(axisValues);
        setPKScore(plotValues);
        setQuarter(dataPeriod);
      });
    }
  }, [orgUnit, period]);

  if (!pkScore) return null;
  return (
    <>
      <h5 className="fw-bold text-center my-3">
        {chartId} CKSI Score
      </h5>
      <hr class="hr" />
      <div className="row g-2">
        <div className={chartId=="PHC/UPHC" ? "col-12 border m-2 p-3":"col border m-2 p-3"}>
          <div className="scroll">
            <h6 className="fw-semibold">
              {chartId} CKSI Score (
              {quarter
                ? qMonths[quarter.split("Q")[1]] + ", " + quarter.split("Q")[0]
                : ""}
              )
            </h6>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </div>
        <div className={chartId=="PHC/UPHC" ? "col-12 border m-2 p-3":"col border m-2 p-3"}>
          <LeagueTable
            name={`${chartId} CKSI Score`}
            groupId={scoreId["group"]}
            scoreId={scoreId["pkId"]}
          />
        </div>
      </div>
    </>
  );
};

export default CKSI;
