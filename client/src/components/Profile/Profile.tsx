import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import { IEmployee } from "../../../types";

import axios from "axios";

import { Button, CardMedia } from "@material-ui/core";

import { useParams, useNavigate } from "react-router-dom";

interface Props {
  employee: IEmployee;
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 600,
    margin: "auto",
    marginTop: 50,
    backgroundColor: "#f5f5f5",
    height: 500,
  },
  media: {
    height: 140,
    width: 140,
    borderRadius: "50%",
    margin: "0 auto",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  pos: {
    marginBottom: 12,
  },

  label: {
    fontWeight: "bold",
  },
});

const ProfileCard = () => {
  const { id } = useParams();

  const classes = useStyles();

  const [name, setName] = useState<any>(null);
  const [email, setEmail] = useState<any>(null);
  const [designation, setDesignation] = useState<any>(null);
  const [dob, setDob] = useState<any>(null);
  const [gender, setGender] = useState<any>(null);
  const [userId, setUserId] = useState<any>(null);
  const getAllEmpoyee = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };

      const url = `http://localhost:5000/get/single/${id}`;

      await axios.get(url, { headers }).then((response) => {
        setName(response.data.first_name);
        setEmail(response.data.email);
        setDesignation(response.data.designation);
        setDob(response.data.dob);
        setGender(response.data.gender);
        setUserId(response.data.Id);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const handleDelete = async (id: string) => {
    try {
      const url = `http://localhost:5000/get/delete/${id}`;
      await axios.delete(url).then((response) => {
        return navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllEmpoyee();
  }, []);

  return (
    <Card className={classes.root} style={{ textAlign: "center" }}>
      {" "}
      <CardContent>
        {" "}
        <CardMedia
          className={classes.media}
          image="data:image/jpeg;base64,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"
        />{" "}
        <Typography className={classes.title} gutterBottom>
          {/* {first_name} */}
          {name}{" "}
        </Typography>{" "}
        <Typography className={classes.pos}>
          <span className={classes.label}>Email:{email}</span>{" "}
        </Typography>{" "}
        <Typography className={classes.pos}>
          {" "}
          <span className={classes.label}>Designation:{designation}</span>{" "}
        </Typography>{" "}
        <Typography className={classes.pos}>
          <Typography className={classes.pos}>
            {" "}
            <span className={classes.label}>Gender:{gender}</span>{" "}
          </Typography>{" "}
          <span className={classes.label}>
            Dob:{dob ? new Date(dob).toLocaleDateString() : ""}
          </span>{" "}
        </Typography>{" "}
        <div className={classes.buttonGroup}>
          {" "}
          <Button variant="contained" color="primary">
            Edit{" "}
          </Button>{" "}
          <Button
            onClick={() => handleDelete(userId)}
            variant="contained"
            color="secondary"
          >
            Delete{" "}
          </Button>{" "}
        </div>{" "}
      </CardContent>{" "}
    </Card>
  );
};

export default ProfileCard;
