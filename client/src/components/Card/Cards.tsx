import React, { useEffect, useState } from "react";

import { IEmployee } from "../../../types";

import axios from "axios";
import "./cards.css";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";

import { useNavigate } from "react-router-dom";
import "./cards.css";
interface Props {
  employee: IEmployee;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    border: 10,
    borderColor: "primary.main",
    backgroundColor: "#7986cb",
    marginLeft: 5,
  },
  media: {
    height: 140,
    width: 140,
    borderRadius: "50%",
    margin: "0 auto",
    marginTop: 10,
  },
  cardHover: {
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    },
  },
});

const Cards = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const classes = useStyles();

  const getAllEmpoyee = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const url = "http://localhost:5000/get";
      await axios.get(url, { headers }).then((response) => {
        setUser(response.data);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`profile/${id}`);
  };

  useEffect(() => {
    getAllEmpoyee();
  }, []);
  /* if (!user) {
    return <p>loading..</p>
  } */

  return (
    <>
      {loading ? (
        <>
          <div className="loader">
            Loading
            <div className="loads"></div>
          </div>
        </>
      ) : (
        <Grid
          container
          spacing={2}
          style={{ marginTop: "30px", marginLeft: "43px" }}
        >
          {Array.isArray(user) &&
            user.map((data: any) => (
              <Grid item xs={12} sm={6} md={4} key={data.Id}>
              <Card
                className={`${classes.root} ${classes.cardHover}`}
                onClick={() => handleClick(data.Id)}
                style={{
                  border: "10px",
                  color: "primary.main",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                  position: "relative",
                 
                }}
              >
                <div
                  style={{
                    backgroundColor: "#e8eaf6",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "50%",
                  }}
                ></div>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97p-Dvc-_AnZJpQ0oV9w1QclIaKFisIjspQ&usqp=CAU"
                  />
                  <CardContent style={{ textAlign: "center" }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {data.first_name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {data.email}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {data.designation}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            
            ))}
        </Grid>
      )}
    </>
  );
};

export default Cards;
{/* <Grid item xs={12} sm={6} md={4} key={data.Id}>
<Card
  style={{
    border: "10px",
    color: "primary.main",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  }}
  className={`${classes.root} ${classes.cardHover}`}
  onClick={() => handleClick(data.Id)}
>
  <CardActionArea>
    <CardMedia
      className={classes.media}
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97p-Dvc-_AnZJpQ0oV9w1QclIaKFisIjspQ&usqp=CAU"
      // title={data?.first_name}
    />
    <CardContent style={{ textAlign: "center" }}>
      <Typography gutterBottom variant="h5" component="h2">
        {data.first_name}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
      >
        {data.email}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
      >
        {data.designation}
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>
</Grid> */}