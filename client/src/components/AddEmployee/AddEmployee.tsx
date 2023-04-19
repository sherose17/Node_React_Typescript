import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import NavBar from "../NavBar/NavBar"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import { MenuItem } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    padding: theme.spacing(3),
  },
  input: {
    marginBottom: theme.spacing(3),
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(3),
    width: "100%",
  },
}));

const RegisterForm = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handleDesignationChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDesignation(event.target.value);
  };
  const handleDobChange = (event: { target: { value: any } }) => {
    setDob(event.target.value);
  };

  const handleGenderChange = (event: { target: { value: any } }) => {
    setGender(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = {
      first_name: name,
      email: email,
      designation: designation,
      dob: dob,
      gender: gender,
    };
    console.log(newUser);
    try {
      const response = await axios.post(
        "http://localhost:5000/get/add",
        newUser,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <NavBar/>
    <Card className={classes.card}>
      <CardContent>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            label="Name"
            value={name}
            onChange={handleNameChange}
            variant="outlined"
            required
            InputProps={{
              startAdornment: <AccountCircleIcon />,
            }}
          />
          <TextField
            className={classes.input}
            label="Email"
            value={email}
            onChange={handleEmailChange}
            variant="outlined"
            type="email"
            required
            InputProps={{
              startAdornment: <EmailIcon />,
            }}
          />
          <TextField
            className={classes.input}
            label="Designation"
            value={designation}
            onChange={handleDesignationChange}
            variant="outlined"
            required
            InputProps={{
              startAdornment: <WorkIcon />,
            }}
          />

          <TextField
            type="date"
            className={classes.input}
            label="Date of Birth"
            value={dob}
            onChange={handleDobChange}
            variant="outlined"
            required
            InputProps={{
              startAdornment: <EditCalendarIcon />,
            }}
          />
          <Select
            className={classes.input}
            label="Gender"
            value={gender}
            onChange={handleGenderChange}
            variant="outlined"
            required
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select Gender
            </MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>

          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
          >
            Add Employees
          </Button>
        </form>
      </CardContent>
    </Card>
    </>
  );
};

export default RegisterForm;
