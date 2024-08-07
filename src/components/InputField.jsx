import { Grid, TextField } from "@mui/material";
import React from "react";

const InputField = ({label,value,stateFunc}) => {
    const handleChange = (e)=>{
        stateFunc(e.target.value);
    }
  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label={label}
        required
        variant="outlined"
        value={value}
        onChange={handleChange}
        InputProps={{
          style: {
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            border: "none",
          },
        }}
        InputLabelProps={{
          style: {
            paddingLeft: "8px",
          },
        }}
      />
    </Grid>
  );
};

export default InputField;
