import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  RadioGroup,
  TextField,
  Radio,
  FormControlLabel,
  CardActions,
  Button
} from "@mui/material";
import React, { useState } from "react";

export const Edit = (props) => {
  const [name, setName] = useState(props?.name);
  const [username, setuserName] = useState(props?.username);
  const [address, setAddress] = useState(props?.address);
  const [gender, setGender] = useState(props?.gender);
  const [email, setEmail] = useState(props?.email);
  return (
    <>
      <Card>
        <CardHeader>Details</CardHeader>
        <CardContent>
          <FormControl>
            <TextField label="Name" variant="standard" required value={name} />
            <TextField label="UserName" variant="standard" value={username} />
            <TextField
              label="Address"
              variant="standard"
              required
              value={address}
              multiline
            />
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={gender}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
            <TextField label="Email" variant="standard" required value=  {email} type="emal"/>
            
          </FormControl>
        </CardContent>
        <CardActions>
        <Button size="small" variant="outlined" onClick={saveData}>Save</Button>
        </CardActions>
      </Card>
    </>
  );
};
