import React, { useEffect } from "react";
import styles from "./Dashboard/styles";
import { makeStyles } from "@material-ui/styles";

import { CircularLoader } from "@dhis2/ui";

import { useDataQuery } from "@dhis2/app-runtime";
import { InitialQuery } from "../constants/InitialQuery";

import { useDispatch, useSelector } from "react-redux";
import {
  setClickedOU,
  setGroups,
  setOUList,
  setUserOU,
} from "../store/outree/outree.action";
import Navbar from "../components/Navbar";
import { appRoutes } from "../routes/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { TimorNavbar } from "../components";

const useStyles = makeStyles(styles);

const Main = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { loading, error, data } = useDataQuery(InitialQuery);

  useEffect(() => {
    if (data) {
      if (data.me) {
        if (data.me.organisationUnits.length >= 2)
          data.me.organisationUnits = data.me.organisationUnits.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
        dispatch(setUserOU(data.me.organisationUnits));
        dispatch(setClickedOU(data.me.organisationUnits[0]));
      }
      if (data.ouList) dispatch(setOUList(data.ouList.organisationUnits));
      if (data.ouGroups) {
        dispatch(setGroups(data.ouGroups.organisationUnitGroups));
      }
    }
  }, [data]);

  if (error) {
    return <span>ERROR: {error.message}</span>;
  }

  if (loading) {
    return (
      <div className="h-100">
        <CircularLoader className={classes.loader}></CircularLoader>
      </div>
    );
  }
  return <div>
    <Navbar />
    <TimorNavbar />
    <Routes>
      {appRoutes.map((route, key) => {
        return (
          <Route
            path={route.path}
            element={route.component}
            key={key}
            exact
          />
        );
      })}
    </Routes>
    <Footer />

  </div>;
};

export default Main;
