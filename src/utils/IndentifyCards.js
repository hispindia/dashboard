import React from "react";
import {
  Bar,
  Column,
  Donut,
  Line,
  LineColumn,
  Tree,
  Pie,
  StackedColumn,
} from "../components/Charts";
import styles from "../pages/Dashboard/styles";
import { CardType, Colors } from "../constants";

export function indentifyCards(arg) {
  switch (arg.type) {
    case CardType.BAR:
      return (
        <Bar
          bgColor={Colors.Graph.backgroundColor}
          data={arg}
          labelStyle={styles.graphStyle}
        />
      );
    case CardType.LINE:
      return (
        <Line
          bgColor={Colors.Graph.backgroundColor}
          data={arg}
          labelStyle={styles.graphStyle}
        />
      );
    case CardType.COLUMN:
      return (
        <Column
          bgColor={Colors.Graph.backgroundColor}
          data={arg}
          labelStyle={styles.graphStyle}
        />
      );
    case CardType.LINE_COLUMN:
      return (
        <LineColumn
          bgColor={Colors.Graph.backgroundColor}
          data={arg}
          labelStyle={styles.graphStyle}
        />
      );
    case CardType.DONUT:
      return (
        <Donut
          bgColor={Colors.Graph.backgroundColor}
          data={arg}
          labelStyle={styles.graphStyle}
        />
      );
    case CardType.PIE:
      return (
        <Pie
          bgColor={Colors.Graph.backgroundColor}
          data={arg}
          labelStyle={styles.graphStyle}
        />
      );
    case CardType.TREE:
      return (
        <Tree
          bgColor={Colors.Graph.backgroundColor}
          data={arg}
          labelStyle={styles.graphStyle}
        />
      );
    case CardType.STACKED_COLUMN:
      return (
        <StackedColumn
          bgColor={Colors.Graph.backgroundColor}
          data={arg}
          labelStyle={styles.graphStyle}
        />
      );
    default:
      return "";
  }
}

export function identifyChartType({
  dataElement,
  seriesTypeRecords,
  dualAxis,
  items,
}) {

  let calculatedseries = [];
  let ifPie = [];
  for (const yrRcd in seriesTypeRecords) {
    dataElement.forEach((subItem) => {
      if (subItem.id.includes(yrRcd) && subItem.type == CardType.PIE) {
        ifPie.push({
          y: seriesTypeRecords[yrRcd][0],
          name: items[yrRcd].name,
        });
      } else if (subItem.id.includes(yrRcd) && subItem.type == CardType.DONUT) {
        calculatedseries.push({
          data: seriesTypeRecords[yrRcd],
          type: subItem.type,
        });
      } else if (subItem.id.includes(yrRcd)) {
        calculatedseries.push({
          data: Object.values(seriesTypeRecords[yrRcd]),
          name: items[yrRcd].name,
          type: subItem.type,
          yAxis: dualAxis ? (subItem.type == CardType.LINE ? 1 : 0) : 0,
        });
      }
    });
  }
  if (ifPie.length > 0) {
    calculatedseries.push({
      data: ifPie,
      type: CardType.PIE,
    });
  }
  return calculatedseries;
}
export function identifyChartPeriod({ pe, items }) {
  return pe.map((peItem) => items[peItem].name);
}
