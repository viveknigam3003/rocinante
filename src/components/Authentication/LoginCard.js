import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
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
  cardIconEnter: {
    padding: 20,
    color: "#3e55ab",
    opacity: 0.8,
  },
  cardIcon: {
    padding: 20,
    color: "#000000",
    opacity: 0.8,
  },
});

function LoginCard(props) {
  const classes = useStyles();
  const [enter, setEnter] = useState(false);

  return (
    <Card
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
      className={classes.card}
    >
      <CardActionArea className={classes.cardContent}>
        <Link to={props.link} className={classes.cardContent}>
          {enter ? (
            props.iconFor === "admin" ? (
              <SupervisorAccountIcon
                fontSize="large"
                className={classes.cardIconEnter}
              />
            ) : (
              <PersonIcon fontSize="large" className={classes.cardIconEnter} />
            )
          ) : props.iconFor === "admin" ? (
            <SupervisorAccountOutlinedIcon
              fontSize="large"
              className={classes.cardIcon}
            />
          ) : (
            <PersonOutlineOutlinedIcon
              fontSize="large"
              className={classes.cardIcon}
            />
          )}
          {props.text}
        </Link>
      </CardActionArea>
    </Card>
  );
}

export default LoginCard;
