import React from "react";
import styles from "../Column/styles";
import { makeStyles } from "@material-ui/styles";
import { Card } from "@material-ui/core";
const useStyles = makeStyles(styles);
const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.columnHeader}>
        <h4 className={classes.columnTitle}>All Rights Reserved</h4>
      </Card>
    </>
  );
};

export default Footer;
