import React from 'react'
import styles from "./styles";
import { makeStyles } from "@material-ui/styles";
import { Card } from '../Card';

const useStyles = makeStyles(styles);

export function ColumnHeader({ title }) {
    const classes = useStyles();

    return (
        <Card className={classes.columnHeader} >
            <h4 className={classes.columnTitle}>{title}</h4>
        </Card>
    )
}