import React, { useState } from "react";
import { TextField, makeStyles, Container, Typography, Button, Link, Box } from "@material-ui/core";
import clsx from "clsx";
import { AccountCircleRounded } from "@material-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  },
  container: {
    marginTop: "2rem"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  icon: {
    fontSize: 32
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  box: {
    display: "flex",
    alignItems: "center"
  }
}));

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const handleChange = name => ({ target: { value } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = values => e => {
    e.preventDefault();
  };

  const classes = useStyles();
  const { email, password } = values;
  return (
    <Container className={classes.container} maxWidth="sm">
      <Typography variant="h2" gutterBottom>
        Login
      </Typography>
      <Box className={classes.box}>
        <AccountCircleRounded color="primary" className={classes.icon} />
        <Typography variant="body1">Sign into your account</Typography>
      </Box>
      <form noValidate autoComplete="off" handleSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          // id="standard-name"
          label="Email"
          value={email}
          onChange={handleChange("email")}
          className={clsx(classes.dense)}
          fullWidth
          margin="dense"
        />
        <TextField
          variant="outlined"
          // id="standard-name"
          label="Password"
          value={password}
          onChange={handleChange("password")}
          className={clsx(classes.dense)}
          fullWidth
          margin="dense"
        />

        <Button className={classes.button} variant="contained" color="primary">
          Submit
        </Button>
        <Typography variant="body1">
          Don't have an account?{" "}
          <Link color="primary" component={RouterLink} to="/register">
            Sign Up
          </Link>
        </Typography>
      </form>
    </Container>
  );
};

export default Login;
