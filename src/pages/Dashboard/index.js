import React from "react";
import { Card, CardBody, ColumnHeader, GridContainer, GridItem, } from "../../components";
import styles from "./styles";
import { makeStyles } from "@material-ui/styles";
import { indentifyCards } from "../../utils";

const useStyles = makeStyles(styles);

export default function Dashboard({ data }) {
  const classes = useStyles();

  return (
    <GridContainer>
      {data.map((column) => {
        return (
          <>
            {column.title && <ColumnHeader title={column.title} />}

            {column.content.map((card) => {
              return Array.isArray(card) ? (
                <GridItem container xs={column.col}>
                  {card.map((cardEle) => {
                    return (
                      <GridItem container key={cardEle.title} sm={cardEle.col} id={cardEle.title}>
                        <Card className={classes.subGraphCard}>
                          <CardBody>
                            {indentifyCards(cardEle)}
                          </CardBody>
                        </Card>
                      </GridItem>
                    );
                  })}
                </GridItem>
              ) : (
                <GridItem key={card.title} xs={12} sm={card.col} id={card.title}>
                  <Card className={classes.graphCard}>
                    <CardBody>
                      {indentifyCards(card)}
                    </CardBody>
                  </Card>
                </GridItem>
              );
            })}
          </>
        );
      })}
    </GridContainer>
  );
}
