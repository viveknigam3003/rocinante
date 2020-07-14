import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    height: 150,
    width: 200,
    margin: 20,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    width: 200,
    padding: 20,
    fontSize: 18,
    color: "inherit",
    textDecoration: "none",
  },
  cardIcon: {
    padding: 20,
    color: "#000000",
    opacity: 0.8,
  },
});

function LoginCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardContent}>
        <Link to={props.link} className={classes.cardContent}>
          {props.iconFor === "admin" ? (
            <SupervisorAccountIcon
              fontSize="large"
              className={classes.cardIcon}
            />
          ) : (
            <PersonIcon fontSize="large" className={classes.cardIcon} />
          )}
          {props.text}
        </Link>
      </CardActionArea>
    </Card>
  );
}

export default LoginCard;
