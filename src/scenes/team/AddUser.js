import * as React from "react";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function AddUser() {
  const [userDown, setUserDown] = React.useState("admin");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleDropDownChange = (event) => {
    setUserDown(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const payload = {};

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        paddingTop: "10rem",
        paddingBottom: "10rem",
        border: "3px solid",
        margin: "6rem",
        borderRadius: "5rem",
        // boxShadow: "0px 0px 70px 0px grey",
        boxShadow: "0 19px 38px rgba(0,0,0,0.30)",
      }}
    >
      <TextField
        required
        id="outlined-required"
        label="Enter User Email"
        value={email}
        onChange={handleEmail}
      />
      <TextField
        required
        id="outlined-required"
        label="Enter Password"
        value={password}
        onChange={handlePassword}
      />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">admin</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userDown}
            label="Age"
            onChange={handleDropDownChange}
          >
            <MenuItem value={10}>admin</MenuItem>
            <MenuItem value={20}>manager</MenuItem>
            <MenuItem value={30}>user</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button
        variant="contained"
        // color="secondary"
        sx={{ color: "white", backgroundColor: "green" }}
        onClick={() => {}}
      >
        Add User
      </Button>
    </Box>
  );
}
